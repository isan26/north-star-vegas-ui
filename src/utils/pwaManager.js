// PWA Installation and Service Worker utilities

class PWAManager {
  constructor() {
    this.deferredPrompt = null;
    this.installButton = null;
    this.isInstalled = false;
    
    this.init();
  }

  init() {
    // Check if app is already installed
    this.checkInstallStatus();
    
    // Setup install prompt handling
    this.setupInstallPrompt();
    
    // Setup install button
    this.setupInstallButton();
  }

  checkInstallStatus() {
    // Check if running in standalone mode (installed as PWA)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      this.isInstalled = true;
      console.log('App is running in standalone mode (installed)');
    }
    
    // Check if running as TWA (Trusted Web Activity) on Android
    if (document.referrer.includes('android-app://')) {
      this.isInstalled = true;
      console.log('App is running as TWA (installed)');
    }
  }

  setupInstallPrompt() {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('beforeinstallprompt event fired');
      
      // Prevent the mini-infobar from appearing on mobile
      event.preventDefault();
      
      // Save the event so it can be triggered later
      this.deferredPrompt = event;
      
      // Show custom install button
      this.showInstallButton();
    });

    // Listen for the app being installed
    window.addEventListener('appinstalled', (event) => {
      console.log('PWA was installed successfully');
      this.isInstalled = true;
      this.hideInstallButton();
      this.showInstallationSuccess();
      
      // Clear the deferredPrompt
      this.deferredPrompt = null;
    });
  }

  setupInstallButton() {
    this.installButton = document.getElementById('pwa-install-prompt');
    
    if (this.installButton) {
      this.installButton.addEventListener('click', () => {
        this.promptInstall();
      });
    }
  }

  showInstallButton() {
    if (this.installButton && !this.isInstalled) {
      this.installButton.style.display = 'block';
      
      // Auto-hide after 10 seconds
      setTimeout(() => {
        this.hideInstallButton();
      }, 10000);
    }
  }

  hideInstallButton() {
    if (this.installButton) {
      this.installButton.style.display = 'none';
    }
  }

  async promptInstall() {
    if (!this.deferredPrompt) {
      console.log('Install prompt not available');
      return;
    }

    try {
      // Show the install prompt
      this.deferredPrompt.prompt();
      
      // Wait for the user to respond to the prompt
      const result = await this.deferredPrompt.userChoice;
      
      console.log('User choice:', result.outcome);
      
      if (result.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // Clear the deferredPrompt
      this.deferredPrompt = null;
      this.hideInstallButton();
      
    } catch (error) {
      console.error('Error showing install prompt:', error);
    }
  }

  showUpdateNotification() {
    // Create a simple update notification without auto-refresh
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #4CAF50;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 600;
        pointer-events: none;
      ">
        🔄 Update available! Refresh manually to see changes.
      </div>
    `;
    
    document.body.appendChild(notification);
    

    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }

  showInstallationSuccess() {
    // Create a success notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #1cb0f6 0%, #58cc02 100%);
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1001;
        font-weight: 600;
        animation: slideDown 0.3s ease-out;
      ">
        🎉 App installed successfully!
      </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 3000);
  }

  // Enable offline game progress sync
  enableBackgroundSync() {
    if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
      navigator.serviceWorker.ready.then((registration) => {
        return registration.sync.register('background-sync-game-progress');
      }).catch((error) => {
        console.log('Background sync not supported:', error);
      });
    }
  }

  // Request notification permission
  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      console.log('Notification permission:', permission);
      return permission === 'granted';
    }
    return false;
  }

  // Check if device supports PWA features
  getSupportedFeatures() {
    return {
      serviceWorker: 'serviceWorker' in navigator,
      installPrompt: 'beforeinstallprompt' in window,
      backgroundSync: 'serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype,
      pushNotifications: 'serviceWorker' in navigator && 'PushManager' in window,
      offlineStorage: 'localStorage' in window && 'indexedDB' in window
    };
  }
}

// Export for use in other modules
export default PWAManager;

// Initialize PWA Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.pwaManager = new PWAManager();
  
  // Log supported features
  console.log('PWA Features supported:', window.pwaManager.getSupportedFeatures());
});
