import React, { useEffect, useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box,
  Chip,
  LinearProgress,
  Grid
} from '@mui/material';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import HomeIcon from '@mui/icons-material/Home';
import RefreshIcon from '@mui/icons-material/Refresh';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const GameResults = ({ results, levelData, onBackToMenu, onRetryLevel }) => {
  const [showConfetti, setShowConfetti] = useState(results.passed);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // REMOVE localStorage effects that might cause refresh loops
  // Comment out these useEffect hooks:
  
  // useEffect(() => {
  //   const savedProgress = localStorage.getItem('gameProgress');
  //   // ... remove this entire useEffect
  // }, [levelData.id, results]);

  // useEffect(() => {
  //   const progress = {
  //     // ... remove this entire useEffect
  //   };
  // }, [levelData.id, results]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
      return () => clearTimeout(timer);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [showConfetti]);

  const getMotivationalMessage = () => {
    if (results.percentage >= 90) {
      return { message: "Outstanding! You're an AI expert! 🌟", color: 'success.main' };
    } else if (results.percentage >= 80) {
      return { message: "Great job! You've mastered this level! 🎉", color: 'success.main' };
    } else if (results.percentage >= 70) {
      return { message: "Good effort! You're almost there! 💪", color: 'warning.main' };
    } else if (results.percentage >= 60) {
      return { message: "Keep going! Practice makes perfect! 📚", color: 'info.main' };
    } else {
      return { message: "Don't give up! Every expert was once a beginner! 🚀", color: 'error.main' };
    }
  };

  const motivationalMsg = getMotivationalMessage();

  return (
    <Box sx={{ textAlign: 'center', position: 'relative' }}>
      {showConfetti && results.passed && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.4}
          colors={[levelData.color, '#ffc800', '#ff4081', '#58cc02']}
        />
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Card sx={{ 
          maxWidth: 700, 
          mx: 'auto',
          mb: 4,
          background: results.passed 
            ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
            : 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
          border: '3px solid',
          borderColor: results.passed ? 'success.main' : 'warning.main',
          position: 'relative',
          overflow: 'visible'
        }}>
          {/* Achievement Badge */}
          <motion.div
            animate={{ 
              rotate: [0, -5, 5, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              ease: 'easeInOut',
              repeat: results.passed ? Infinity : 0,
              repeatDelay: 3
            }}
            style={{
              position: 'absolute',
              top: -40,
              left: '50%',
              transform: 'translateX(-50%)',
              background: results.passed 
                ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)'
                : 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
              borderRadius: '50%',
              width: 100,
              height: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              border: '4px solid white'
            }}
          >
            {results.passed ? (
              <EmojiEventsIcon sx={{ fontSize: 50, color: 'white' }} />
            ) : (
              <TrendingUpIcon sx={{ fontSize: 50, color: 'white' }} />
            )}
          </motion.div>

          <CardContent sx={{ p: 6, pt: 8 }}>
            {/* Level Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
                <Typography variant="h3" sx={{ 
                  color: levelData.color,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}>
                  <span style={{ fontSize: '2.5rem' }}>{levelData.icon}</span>
                  {levelData.title}
                </Typography>
              </Box>
            </motion.div>

            {/* Score Display */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Typography variant="h2" sx={{ 
                mb: 2,
                fontWeight: 800,
                color: results.passed ? 'success.main' : 'warning.main'
              }}>
                {results.score}/{results.totalQuestions}
              </Typography>
              
              <Typography variant="h4" sx={{ mb: 4 }}>
                {results.percentage}% Score
              </Typography>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.7, duration: 1 }}
            >
              <LinearProgress 
                variant="determinate" 
                value={results.percentage}
                sx={{
                  height: 16,
                  borderRadius: 8,
                  mb: 4,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: results.passed ? 'success.main' : 'warning.main'
                  }
                }}
              />
            </motion.div>

            {/* Status Messages */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Chip 
                  label={results.passed ? 'Level Passed!' : 'Keep Trying!'}
                  color={results.passed ? 'success' : 'warning'}
                  size="large"
                  sx={{ 
                    fontSize: '1.2rem',
                    py: 3,
                    px: 2,
                    mb: 3,
                    fontWeight: 700
                  }}
                />
                
                <Typography variant="h6" sx={{ 
                  color: motivationalMsg.color,
                  fontWeight: 600,
                  mb: 2
                }}>
                  {motivationalMsg.message}
                </Typography>

                {results.passed ? (
                  <Typography variant="body1" sx={{ color: 'success.dark' }}>
                    🚀 Congratulations! You've unlocked new content and can advance to the next level!
                  </Typography>
                ) : (
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    📚 You need 80% to unlock the next level. Review the material and try again!
                  </Typography>
                )}
              </Box>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <Grid container spacing={3} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    size="large"
                    fullWidth
                    startIcon={<HomeIcon />}
                    onClick={onBackToMenu}
                    sx={{ 
                      py: 2,
                      fontSize: '1.1rem',
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2
                      }
                    }}
                  >
                    Back to Menu
                  </Button>
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    startIcon={<RefreshIcon />}
                    onClick={onRetryLevel}
                    sx={{ 
                      py: 2,
                      fontSize: '1.1rem',
                      background: `linear-gradient(135deg, ${levelData.color} 0%, ${levelData.color}dd 100%)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${levelData.color}dd 0%, ${levelData.color}bb 100%)`
                      }
                    }}
                  >
                    Try Again
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Achievement Message for High Scores */}
      {results.percentage >= 90 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <Card sx={{
            maxWidth: 500,
            mx: 'auto',
            background: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
            border: '2px solid #f57f17'
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ 
                color: '#f57f17',
                fontWeight: 700,
                mb: 1
              }}>
                🏆 Perfect Score Achievement!
              </Typography>
              <Typography variant="body1" sx={{ color: '#f57f17' }}>
                You're truly mastering AI concepts! Keep up the excellent work!
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </Box>
  );
};

export default GameResults;
