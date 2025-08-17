import React from 'react';
import { Box, LinearProgress, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress }) => {
  const getCurrentStep = () => {
    if (progress === 25) return 1;
    if (progress === 50) return 2;
    if (progress === 75) return 3;
    if (progress === 100) return 4;
    return 1;
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ color: 'black' }}>
          Progress
        </Typography>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Chip 
            label={`${getCurrentStep()} of 4`} 
            color="primary" 
            variant="filled"
            sx={{ fontWeight: 700 }}
          />
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{
            height: 12,
            borderRadius: 6,
            backgroundColor: 'rgba(88, 204, 2, 0.1)',
            '& .MuiLinearProgress-bar': {
              borderRadius: 6,
            }
          }}
        />
      </motion.div>
      <Typography variant="body2" sx={{ mt: 1, textAlign: 'right', color: 'black' }}>
        {Math.round(progress)}% complete
      </Typography>
    </Box>
  );
};

export default ProgressBar;