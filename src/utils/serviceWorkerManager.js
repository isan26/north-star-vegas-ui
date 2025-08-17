// Simple Service Worker registration - no automatic updates
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
        // No update checking - just register once
      })
      .catch((error) => {
        console.log('SW registration failed: ', error);
      });
  });
}
