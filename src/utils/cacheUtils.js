// Utility function to manually clear service worker cache
export const clearServiceWorkerCache = async () => {
  if ('serviceWorker' in navigator) {
    try {
      // Get the service worker registration
      const registration = await navigator.serviceWorker.getRegistration();
      
      if (registration && registration.active) {
        // Send message to service worker to clear cache
        registration.active.postMessage({ type: 'CLEAR_CACHE' });
        
        // Listen for response
        navigator.serviceWorker.addEventListener('message', (event) => {
          if (event.data && event.data.type === 'CACHE_CLEARED') {
            console.log('Cache cleared successfully');
            // Reload the page to see changes
            window.location.reload();
          }
        });
      } else {
        // If no service worker, just clear browser cache
        if ('caches' in window) {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
          console.log('Browser cache cleared');
          window.location.reload();
        }
      }
    } catch (error) {
      console.error('Error clearing cache:', error);
    }
  }
};

// Function to force update service worker
export const forceServiceWorkerUpdate = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      if (registration) {
        await registration.update();
        console.log('Service worker update check completed');
      }
    } catch (error) {
      console.error('Error updating service worker:', error);
    }
  }
};
