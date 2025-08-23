import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import ThankYouIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';

const ThankYouGenericStep = ({ onReset }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Card sx={{ 
          maxWidth: 500, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #fff0f5 100%)',
          border: '2px solid',
          borderColor: 'secondary.light',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <ThankYouIcon 
                sx={{ 
                  fontSize: 80, 
                  color: '#ff4081', 
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
                background: 'linear-gradient(135deg, #ff4081 0%, #1cb0f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800
              }}>
                Thank You!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                We appreciate you taking the time to visit us today! 
                <br />
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Have a wonderful day ahead! ✨
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Box sx={{ 
                p: 4, 
                backgroundColor: 'rgba(255, 64, 129, 0.1)', 
                borderRadius: 3,
                mb: 4,
                border: '1px solid rgba(255, 64, 129, 0.2)'
              }}>
                <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  💝 While the AI consultant position wasn't a fit right now, we'd love to keep you in mind for future opportunities that might interest you!
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                color="secondary"
                size="large" 
                onClick={onReset}
                startIcon={<HomeIcon />}
                sx={{ 
                  px: 4, 
                  py: 2,
                  fontSize: '1.1rem',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #ff4081 0%, #ff6bb3 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #e91e63 0%, #ff4081 100%)',
                  }
                }}
              >
                Back to Home
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
                🌟 Keep exploring amazing opportunities! 🌟
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ThankYouGenericStep;
