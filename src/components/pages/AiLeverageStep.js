import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const AiLeverageStep = ({ userData, onNext, onPrevious, canGoBack }) => {
  const handleResponse = (leveragesAi) => {
    onNext({ leveragesAi });
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card sx={{ 
          maxWidth: 600, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <AutoAwesomeIcon 
                sx={{ 
                  fontSize: 100, 
                  color: '#1cb0f6', 
                  mb: 3,
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
                }} 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Typography variant="h2" sx={{ 
                mb: 3, 
                background: 'linear-gradient(135deg, #1cb0f6 0%, #58cc02 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800
              }}>
                Current AI Usage
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Typography variant="h5" sx={{
                mb: 5,
                color: 'text.secondary',
                lineHeight: 1.6,
                fontSize: '1.8rem',
              }}>
                Do you currently leverage AI as a consultant?
                <br />
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                  This helps us understand your experience level 🤖
                </Typography>
              </Typography>
            </motion.div>

            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large" 
                  onClick={() => handleResponse(true)}
                  startIcon={<ThumbUpIcon />}
                  sx={{ 
                    px: 5, 
                    py: 2.5,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    minWidth: 200,
                    background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #3d8b00 0%, #58cc02 100%)',
                    }
                  }}
                >
                  Yes, I Do!
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outlined" 
                  color="secondary"
                  size="large" 
                  onClick={() => handleResponse(false)}
                  startIcon={<ThumbDownIcon />}
                  sx={{ 
                    px: 5, 
                    py: 2.5,
                    fontSize: '1.2rem',
                    borderRadius: 3,
                    minWidth: 200,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'rgba(28, 176, 246, 0.1)',
                    }
                  }}
                >
                  Not Yet
                </Button>
              </motion.div>
            </Box>

            {canGoBack && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <Button 
                  variant="text" 
                  onClick={onPrevious}
                  sx={{ 
                    mt: 4, 
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  ← Go Back
                </Button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                backgroundColor: 'rgba(88, 204, 2, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(88, 204, 2, 0.2)'
              }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  🎯 <strong>Don't worry!</strong>
                  <br />
                  Whether you're a beginner or expert, we'll help you reach the next level
                </Typography>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default AiLeverageStep;
