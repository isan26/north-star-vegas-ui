import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const InterestStep = ({ onNext }) => {
  const handleResponse = (interested) => {
    onNext({ interested });
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
              <PsychologyIcon 
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
                AI Consultant Opportunity
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
                fontSize: 50,
                fontFamily: "'Fredoka', sans-serif", // local override if needed
              }}
            >
              Are you interested in setting up or being a part of an AI Startup?
                <br />
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Join our team of experts helping businesses leverage artificial intelligence! 🚀
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
                  Yes, I'm Interested!
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
                  Not Right Now
                </Button>
              </motion.div>
            </Box>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                backgroundColor: 'rgba(28, 176, 246, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(28, 176, 246, 0.2)'
              }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  💡 <strong>Why join us?</strong>
                  <br />
                  Work with cutting-edge AI technology • Flexible remote opportunities • Competitive compensation • Make a real impact
                </Typography>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default InterestStep;
