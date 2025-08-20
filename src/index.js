import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import theme from './theme';
import '@fontsource/fredoka'; // Defaults to weight 400

// Import PWA Manager and Service Worker Manager
import './utils/pwaManager';
import './utils/serviceWorkerManager';

// COMPLETELY DISABLE SERVICE WORKER - Remove all service worker code
// Comment out or remove any serviceWorker registration

// If there's existing service worker code, replace it with this:
if ('serviceWorker' in navigator) {
  // Unregister all existing service workers
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    for(let registration of registrations) {
      registration.unregister();
    }
  });
}

// Disable caching in development
if (process.env.NODE_ENV === 'development') {
  if ('caches' in window) {
    caches.keys().then(function(names) {
      for (let name of names) {
        caches.delete(name);
      }
    });
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
