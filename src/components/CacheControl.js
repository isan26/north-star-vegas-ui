import React from 'react';
import { Button, Box } from '@mui/material';
import { clearServiceWorkerCache, forceServiceWorkerUpdate } from '../utils/cacheUtils';

const CacheControl = () => {
  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <Box sx={{ 
      position: 'fixed', 
      bottom: 16, 
      left: 16, 
      zIndex: 9999,
      display: 'flex',
      gap: 1
    }}>
      <Button
        variant="contained"
        size="small"
        onClick={clearServiceWorkerCache}
        sx={{ 
          backgroundColor: '#ff4444',
          '&:hover': { backgroundColor: '#cc3333' }
        }}
      >
        Clear Cache
      </Button>
      <Button
        variant="contained"
        size="small"
        onClick={forceServiceWorkerUpdate}
        sx={{ 
          backgroundColor: '#4444ff',
          '&:hover': { backgroundColor: '#3333cc' }
        }}
      >
        Update SW
      </Button>
    </Box>
  );
};

export default CacheControl;
