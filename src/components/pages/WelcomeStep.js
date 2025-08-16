import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const WelcomeStep = ({ onNext }) => {
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
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <WavingHandIcon 
                sx={{ 
                  fontSize: 80, 
                  color: '#ffc800', 
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
                mb: 2, 
                background: 'linear-gradient(135deg, #58cc02 0%, #1cb0f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800
              }}>
                Welcome!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.6 }}>
                Ready to embark on an amazing journey? 🚀
                <br />
                Let's set up your personalized experience!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                size="large" 
                onClick={onNext}
                startIcon={<RocketLaunchIcon />}
                sx={{ 
                  px: 4, 
                  py: 2,
                  fontSize: '1.2rem',
                  borderRadius: 3,
                }}
              >
                Let's Get Started!
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <Typography variant="body2" sx={{ mt: 3, color: 'text.secondary' }}>
                This will only take a few minutes ⏱️
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default WelcomeStep;
