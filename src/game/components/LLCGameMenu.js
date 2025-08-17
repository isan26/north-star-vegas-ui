import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Grid,
  Chip,
  LinearProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { llcGameData } from '../data/llcGameData';

const LLCGameMenu = ({ unlockedLevels, onLevelSelect }) => {
  const getProgressData = () => {
    const progress = localStorage.getItem('llcGameProgress');
    return progress ? JSON.parse(progress) : {};
  };

  const progressData = getProgressData();

  const getLevelStatus = (level) => {
    const isUnlocked = unlockedLevels.includes(level);
    const isCompleted = progressData[level]?.completed;
    const percentage = progressData[level]?.percentage || 0;
    
    return { isUnlocked, isCompleted, percentage };
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      {/* Game Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography variant="h1" sx={{ 
          mb: 2,
          background: 'linear-gradient(135deg, #58cc02 0%, #ff4081 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}>
          🏢 Nevada LLC Formation Quest
        </Typography>
        
        <Typography variant="h5" sx={{ 
          mb: 5, 
          color: 'text.secondary',
          maxWidth: 700,
          mx: 'auto'
        }}>
          Master the complete process of forming an LLC in Nevada!
          <br />
          <Typography variant="body1" sx={{ mt: 1, fontStyle: 'italic' }}>
            Learn all 9 essential steps from name selection to annual compliance! 🚀
          </Typography>
        </Typography>
      </motion.div>

      {/* Level Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(llcGameData).map(([level, data], index) => {
          const levelNum = parseInt(level);
          const { isUnlocked, isCompleted, percentage } = getLevelStatus(levelNum);
          
          return (
            <Grid item xs={12} md={4} key={level}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={isUnlocked ? { scale: 1.03 } : {}}
                whileTap={isUnlocked ? { scale: 0.97 } : {}}
              >
                <Card sx={{
                  height: '100%',
                  background: isUnlocked 
                    ? `linear-gradient(135deg, ${data.color}20 0%, ${data.color}10 100%)`
                    : 'linear-gradient(135deg, #f5f5f5 0%, #eeeeee 100%)',
                  border: '2px solid',
                  borderColor: isUnlocked ? data.color : '#ccc',
                  opacity: isUnlocked ? 1 : 0.6,
                  cursor: isUnlocked ? 'pointer' : 'not-allowed',
                  position: 'relative',
                  overflow: 'visible'
                }}>
                  {/* Level Icon */}
                  <Box sx={{
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    background: isUnlocked ? data.color : '#ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    {!isUnlocked ? '🔒' : data.icon}
                  </Box>

                  <CardContent sx={{ pt: 6, pb: 3 }}>
                    <Typography variant="h6" sx={{ 
                      mb: 2,
                      fontWeight: 700,
                      color: isUnlocked ? data.color : '#999',
                      fontSize: '1.1rem'
                    }}>
                      {data.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      minHeight: 40,
                      fontSize: '0.9rem'
                    }}>
                      {data.description}
                    </Typography>

                    {/* Progress for completed levels */}
                    {isCompleted && (
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>
                          <CheckCircleIcon sx={{ color: 'success.main', mr: 1, fontSize: 20 }} />
                          <Chip 
                            label={`${percentage}% Complete`}
                            color={percentage >= 80 ? 'success' : 'warning'}
                            size="small"
                            sx={{ fontWeight: 600, fontSize: '0.75rem' }}
                          />
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={percentage} 
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: percentage >= 80 ? 'success.main' : 'warning.main'
                            }
                          }}
                        />
                      </Box>
                    )}

                    {/* Action Button */}
                    <Button
                      variant={isUnlocked ? "contained" : "outlined"}
                      size="medium"
                      fullWidth
                      disabled={!isUnlocked}
                      onClick={() => isUnlocked && onLevelSelect(levelNum)}
                      startIcon={
                        isUnlocked ? <PlayArrowIcon /> : <LockIcon />
                      }
                      sx={{
                        py: 1,
                        fontSize: '0.9rem',
                        background: isUnlocked 
                          ? `linear-gradient(135deg, ${data.color} 0%, ${data.color}dd 100%)`
                          : undefined,
                        '&:hover': {
                          background: isUnlocked 
                            ? `linear-gradient(135deg, ${data.color}dd 0%, ${data.color}bb 100%)`
                            : undefined,
                        }
                      }}
                    >
                      {!isUnlocked ? 'Locked' : isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <Card sx={{
          maxWidth: 600,
          mx: 'auto',
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
          border: '2px solid #2196f3'
        }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#1976d2', fontWeight: 600 }}>
              🎯 Nevada LLC Formation Steps
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              • Complete all 9 levels to master Nevada LLC formation<br />
              • Each level covers a specific step in the process<br />
              • Score <strong>80% or higher</strong> to unlock the next level<br />
              • Learn the exact requirements, fees, and timelines<br />
              • Become an expert in Nevada business formation! 🏆
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default LLCGameMenu;
