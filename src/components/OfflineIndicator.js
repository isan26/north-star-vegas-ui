import React, { useState, useEffect } from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import WifiIcon from '@mui/icons-material/Wifi';

const OfflineIndicator = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setShowNotification(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
      setShowNotification(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleClose = () => {
    setShowNotification(false);
  };

  if (isOnline) return null;

  return (
    <Snackbar
      open={showNotification}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      TransitionComponent={Slide}
      TransitionProps={{ direction: 'down' }}
    >
      <Alert
        onClose={handleClose}
        severity={isOnline ? 'success' : 'warning'}
        variant="filled"
        icon={isOnline ? <WifiIcon /> : <WifiOffIcon />}
        sx={{
          width: '100%',
          '& .MuiAlert-message': {
            fontWeight: 600
          }
        }}
      >
        {isOnline 
          ? '🌐 Back online! Your progress will sync automatically.' 
          : '📱 You\'re offline. Game progress is saved locally.'}
      </Alert>
    </Snackbar>
  );
};

export default OfflineIndicator;
