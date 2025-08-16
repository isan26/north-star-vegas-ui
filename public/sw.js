const CACHE_NAME = 'north-star-vegas-v1';
const urlsToCache = [
  '/',
  '/game',
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

// Handle background sync (for future implementation)
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag);
  
  if (event.tag === 'background-sync-game-progress') {
    event.waitUntil(
      // Sync game progress when back online
      syncGameProgress()
    );
  }
});

// Handle push notifications (for future implementation)
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event);
  
  const options = {
    body: event.data ? event.data.text() : 'New AI quiz level unlocked!',
    icon: '/logo192.png',
    badge: '/logo192.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'Play Now',
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
    self.registration.showNotification('North Star Vegas', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  event.notification.close();

  if (event.action === 'explore') {
    // Open the game page
    event.waitUntil(
      clients.openWindow('/game')
    );
  } else if (event.action === 'close') {
    // Just close the notification
    return;
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper function for syncing game progress (placeholder)
async function syncGameProgress() {
  try {
    // This would sync local storage data with a remote server
    // For now, we'll just log that sync was attempted
    console.log('Syncing game progress...');
    
    const gameProgress = JSON.parse(localStorage.getItem('aiGameProgress') || '{}');
    console.log('Current game progress:', gameProgress);
    
    // In a real implementation, you'd send this data to your server
    // await fetch('/api/sync-progress', {
    //   method: 'POST',
    //   body: JSON.stringify(gameProgress)
    // });
    
    return Promise.resolve();
  } catch (error) {
    console.error('Failed to sync game progress:', error);
    return Promise.reject(error);
  }
}
