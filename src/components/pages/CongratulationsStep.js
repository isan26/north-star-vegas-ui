import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Avatar, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import CelebrationIcon from '@mui/icons-material/Celebration';
import RefreshIcon from '@mui/icons-material/Refresh';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const CongratulationsStep = ({ userData, onReset }) => {
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
    
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const getGoalEmoji = (goal) => {
    const goalEmojis = {
      learn: '📚',
      career: '💼',
      fitness: '💪',
      creative: '🎨',
      travel: '✈️',
      personal: '🌟'
    };
    return goalEmojis[goal] || '🎯';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'success';
      case 'medium': return 'warning';
      case 'hard': return 'error';
      default: return 'primary';
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.3}
          colors={['#58cc02', '#1cb0f6', '#ffc800', '#ff4b4b', '#9c27b0', '#ff9800']}
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card sx={{ 
          maxWidth: 600, 
          textAlign: 'center',
          background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 100%)',
          border: '3px solid',
          borderColor: 'success.main',
          position: 'relative',
          overflow: 'visible'
        }}>
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 3
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
            <CelebrationIcon sx={{ color: 'white', fontSize: 40 }} />
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
                Congratulations!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
                🎉 Your profile is all set up! 🎉
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
                borderColor: 'divider'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                  <Avatar sx={{ 
                    width: 80, 
                    height: 80, 
                    fontSize: '2rem',
                    backgroundColor: 'primary.light'
                  }}>
                    {userData.avatar}
                  </Avatar>
                  <Box sx={{ ml: 3, textAlign: 'left' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                      {userData.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Ready to start your journey!
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
                  <Chip 
                    label={`Goal: ${userData.goal} ${getGoalEmoji(userData.goal)}`}
                    color="primary"
                    variant="filled"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                  <Chip 
                    label={`${userData.preferences.dailyTime} min/day ⏰`}
                    color="secondary"
                    variant="filled"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                  <Chip 
                    label={`${userData.preferences.difficulty} level`}
                    color={getDifficultyColor(userData.preferences.difficulty)}
                    variant="filled"
                    sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                  />
                  {userData.preferences.notifications && (
                    <Chip 
                      label="Notifications ON 🔔"
                      color="info"
                      variant="filled"
                      sx={{ fontWeight: 600, fontSize: '0.9rem' }}
                    />
                  )}
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', fontStyle: 'italic' }}>
                "Great things never come from comfort zones. You're about to do something amazing!" ✨
              </Typography>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="contained" 
                    size="large" 
                    startIcon={<PlayArrowIcon />}
                    sx={{ 
                      px: 4, 
                      py: 2,
                      fontSize: '1.1rem',
                      background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #3d8b00 0%, #58cc02 100%)',
                      }
                    }}
                  >
                    Start My Journey!
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outlined" 
                    size="large" 
                    startIcon={<RefreshIcon />}
                    onClick={onReset}
                    sx={{ px: 4, py: 2, fontSize: '1.1rem' }}
                  >
                    Start Over
                  </Button>
                </motion.div>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Typography variant="body2" sx={{ mt: 4, color: 'text.secondary' }}>
                🚀 Get ready for an amazing adventure ahead! 🚀
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default CongratulationsStep;
