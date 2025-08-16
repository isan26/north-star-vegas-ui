import React from 'react';
import { Box, LinearProgress, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const ProgressBar = ({ progress, currentStep, totalSteps }) => {
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
            label={`${currentStep} of ${totalSteps}`} 
            color="primary" 
            variant="filled"
            sx={{ fontWeight: 700 }}
          />
        </motion.div>
      </Box>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformOrigin: 'left' }}
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
