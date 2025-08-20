// DISABLED SERVICE WORKER - Prevent any caching or refresh behavior

self.addEventListener('install', (event) => {
  // Do nothing on install
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Clear all caches and take control immediately
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Let all requests pass through without any caching
  return;
});

// Remove any message listeners that might trigger refreshes
