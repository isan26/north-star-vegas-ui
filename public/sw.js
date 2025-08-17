const CACHE_NAME = 'north-star-vegas-v2';
const urlsToCache = [
  '/',
  '/game',
  '/llc-game',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/logo192.png',
  '/logo512.png',
  // Add other static assets as needed
];

// Install Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => {
          // Add cache-busting parameter to prevent stale cache
          return new Request(url, { cache: 'reload' });
        }));
      })
      .catch((error) => {
        console.error('Failed to cache resources:', error);
      })
  );
  // Force the waiting service worker to become the active service worker
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of all pages immediately
  self.clients.claim();
});

// Fetch Strategy: Cache First with Network Fallback
self.addEventListener('fetch', (event) => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Handle API requests with Network First strategy
  if (event.request.url.includes('/api/') || 
      event.request.url.includes('firestore') || 
      event.request.url.includes('firebase')) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response before caching
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseClone);
            });
          return response;
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request);
        })
    );
    return;
  }

  // Handle other requests with Cache First strategy
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }

        // If not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('Fetch failed:', error);
            
            // For navigation requests, return a fallback page
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
            
            throw error;
          });
      })
  );
});

// Handle background sync
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync-ai-game-progress') {
    event.waitUntil(
      syncGameProgress('aiGameProgress')
    );
  }
  
  if (event.tag === 'background-sync-llc-game-progress') {
    event.waitUntil(
      syncGameProgress('llcGameProgress')
    );
  }
  
  if (event.tag === 'background-sync-poll-data') {
    event.waitUntil(
      syncPollData()
    );
  }
});

// Handle push notifications
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  let notificationData = {
    title: 'North Star Vegas',
    body: 'New content available!',
    icon: '/logo192.png',
    badge: '/logo192.png'
  };

  // Parse push data if available
  if (event.data) {
    try {
      const pushData = event.data.json();
      notificationData = { ...notificationData, ...pushData };
    } catch (e) {
      notificationData.body = event.data.text();
    }
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon,
    badge: notificationData.badge,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: notificationData.primaryKey || '1',
      url: notificationData.url || '/'
    },
    actions: [
      {
        action: 'explore',
        title: 'Open App',
        icon: '/logo192.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/logo192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(notificationData.title, options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();

  const targetUrl = event.notification.data.url || '/';

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow(targetUrl)
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow(targetUrl)
    );
  }
});

// Handle message events from the main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data);
  
  if (event.data && event.data.type === 'SYNC_GAME_PROGRESS') {
    // Trigger background sync for game progress
    self.registration.sync.register(`background-sync-${event.data.gameType}-game-progress`);
  }
  
  if (event.data && event.data.type === 'SYNC_POLL_DATA') {
    // Trigger background sync for poll data
    self.registration.sync.register('background-sync-poll-data');
  }
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper function for syncing game progress
async function syncGameProgress(storageKey) {
  try {
    console.log(`Syncing ${storageKey}...`);
    
    // Get game progress from localStorage
    const gameProgressStr = await getFromIndexedDB(storageKey) || 
                           (typeof localStorage !== 'undefined' ? localStorage.getItem(storageKey) : null);
    
    if (!gameProgressStr) {
      console.log(`No ${storageKey} data found to sync`);
      return Promise.resolve();
    }

    const gameProgress = JSON.parse(gameProgressStr);
    console.log(`Current ${storageKey}:`, gameProgress);
    
    // In a real implementation, you'd send this data to your server
    // const response = await fetch('/api/sync-progress', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     type: storageKey,
    //     data: gameProgress,
    //     timestamp: new Date().toISOString()
    //   })
    // });
    
    // if (!response.ok) {
    //   throw new Error(`Failed to sync ${storageKey}: ${response.statusText}`);
    // }
    
    console.log(`${storageKey} synced successfully`);
    return Promise.resolve();
  } catch (error) {
    console.error(`Failed to sync ${storageKey}:`, error);
    return Promise.reject(error);
  }
}

// Helper function for syncing poll data
async function syncPollData() {
  try {
    console.log('Syncing poll data...');
    
    // Get poll data from localStorage
    const pollDataStr = await getFromIndexedDB('pollUserData') || 
                       (typeof localStorage !== 'undefined' ? localStorage.getItem('pollUserData') : null);
    
    if (!pollDataStr) {
      console.log('No poll data found to sync');
      return Promise.resolve();
    }

    const pollData = JSON.parse(pollDataStr);
    console.log('Current poll data:', pollData);
    
    // In a real implementation, you'd send this data to your server
    // const response = await fetch('/api/sync-poll', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     ...pollData,
    //     timestamp: new Date().toISOString()
    //   })
    // });
    
    // if (!response.ok) {
    //   throw new Error(`Failed to sync poll data: ${response.statusText}`);
    // }
    
    console.log('Poll data synced successfully');
    return Promise.resolve();
  } catch (error) {
    console.error('Failed to sync poll data:', error);
    return Promise.reject(error);
  }
}

// Helper function to get data from IndexedDB (fallback storage)
function getFromIndexedDB(key) {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in self)) {
      resolve(null);
      return;
    }

    const request = indexedDB.open('NorthStarVegasDB', 1);
    
    request.onerror = () => resolve(null);
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('gameData')) {
        resolve(null);
        return;
      }
      
      const transaction = db.transaction(['gameData'], 'readonly');
      const store = transaction.objectStore('gameData');
      const getRequest = store.get(key);
      
      getRequest.onsuccess = () => {
        resolve(getRequest.result ? getRequest.result.value : null);
      };
      
      getRequest.onerror = () => resolve(null);
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('gameData')) {
        db.createObjectStore('gameData', { keyPath: 'key' });
      }
    };
  });
}

// Helper function to store data in IndexedDB
function storeInIndexedDB(key, value) {
  return new Promise((resolve, reject) => {
    if (!('indexedDB' in self)) {
      resolve();
      return;
    }

    const request = indexedDB.open('NorthStarVegasDB', 1);
    
    request.onerror = () => resolve();
    
    request.onsuccess = (event) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('gameData')) {
        resolve();
        return;
      }
      
      const transaction = db.transaction(['gameData'], 'readwrite');
      const store = transaction.objectStore('gameData');
      
      store.put({ key, value, timestamp: Date.now() });
      resolve();
    };
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('gameData')) {
        db.createObjectStore('gameData', { keyPath: 'key' });
      }
    };
  });
}

// Periodic background sync for data persistence
self.addEventListener('periodicsync', (event) => {
  console.log('Periodic background sync triggered:', event.tag);
  
  if (event.tag === 'backup-game-data') {
    event.waitUntil(
      Promise.all([
        syncGameProgress('aiGameProgress'),
        syncGameProgress('llcGameProgress'),
        syncPollData()
      ])
    );
  }
});
