import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Chip, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

const ThankYouSuccessStep = ({ userData, onReset }) => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Hide confetti after 4 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 4000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.3}
          colors={['#58cc02', '#1cb0f6', '#ffc800', '#ff4081']}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card sx={{ 
          maxWidth: 650, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
          border: '3px solid',
          borderColor: 'success.main',
          position: 'relative',
          overflow: 'visible'
        }}>
          <motion.div
            animate={{ 
              rotate: [0, -5, 5, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 4
            }}
            style={{
              position: 'absolute',
              top: -30,
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
              borderRadius: '50%',
              width: 80,
              height: 80,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(88, 204, 2, 0.3)',
            }}
          >
            <CheckCircleIcon sx={{ color: 'white', fontSize: 40 }} />
          </motion.div>

          <CardContent sx={{ p: 6, pt: 8 }}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Typography variant="h2" sx={{ 
                mb: 2,
                background: 'linear-gradient(135deg, #58cc02 0%, #1cb0f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800
              }}>
                Application Submitted!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
                🎉 Thank you for your interest in our AI consultant position! 🎉
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Box sx={{ 
                p: 4, 
                backgroundColor: 'background.paper', 
                borderRadius: 3, 
                mb: 4,
                border: '2px solid',
                borderColor: 'success.light',
                boxShadow: '0 4px 12px rgba(88, 204, 2, 0.1)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, color: 'success.main' }}>
                  📝 Your Application Details
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ backgroundColor: 'primary.light' }}>
                      <PersonIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Name</Typography>
                      <Typography variant="body1" fontWeight={600}>{userData.name}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ backgroundColor: 'secondary.light' }}>
                      <EmailIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Email</Typography>
                      <Typography variant="body1" fontWeight={600}>{userData.email}</Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar sx={{ backgroundColor: 'warning.light' }}>
                      <PhoneIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" color="text.secondary">Phone</Typography>
                      <Typography variant="body1" fontWeight={600}>{userData.phone}</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Chip 
                    label="✅ Application Status: Received"
                    color="success"
                    variant="filled"
                    sx={{ fontWeight: 700, fontSize: '0.9rem' }}
                  />
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Box sx={{ 
                p: 4, 
                backgroundColor: 'rgba(28, 176, 246, 0.1)', 
                borderRadius: 3,
                mb: 4,
                border: '1px solid rgba(28, 176, 246, 0.2)'
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  📞 What happens next?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                  Our team will review your application and get back to you within <strong>2-3 business days</strong>. 
                  We're excited about the possibility of working together! 🚀
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                size="large" 
                startIcon={<HomeIcon />}
                onClick={onReset}
                sx={{ 
                  px: 4, 
                  py: 2,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #1cb0f6 0%, #58ccf7 100%)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0f7db2 0%, #1cb0f6 100%)',
                  }
                }}
              >
                Back to Home
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
            >
              <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary', fontStyle: 'italic' }}>
                🌟 "The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt 🌟
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ThankYouSuccessStep;
