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
          background: 'linear-gradient(135deg, #FF9800 0%, #F57C00 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '3.5rem' }
        }}>
          Nevada LLC Formation Quiz 🏢
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
            Score 80%+ to unlock the next level! 🚀
          </Typography>
        </Typography>
      </motion.div>

      {/* Level Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(llcGameData).map(([level, data], index) => {
          const levelNum = parseInt(level);
          const { isUnlocked, isCompleted, percentage } = getLevelStatus(levelNum);
          
          return (
            <Grid item xs={12} md={6} lg={4} key={level}>
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
                    width: 50,
                    height: 50,
                    borderRadius: '50%',
                    background: isUnlocked ? data.color : '#ccc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                  }}>
                    {!isUnlocked ? '🔒' : data.icon}
                  </Box>

                  <CardContent sx={{ pt: 5, pb: 3, px: 2 }}>
                    <Typography variant="h6" sx={{ 
                      mb: 2,
                      fontWeight: 700,
                      color: isUnlocked ? data.color : '#999',
                      fontSize: '1rem'
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
                          <CheckCircleIcon sx={{ color: 'success.main', mr: 1, fontSize: '1rem' }} />
                          <Chip 
                            label={`${percentage}%`}
                            color={percentage >= 80 ? 'success' : 'warning'}
                            size="small"
                            sx={{ fontWeight: 600, fontSize: '0.7rem' }}
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
                      size="small"
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
                      {!isUnlocked ? 'Locked' : isCompleted ? 'Replay' : 'Start'}
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
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Card sx={{
          maxWidth: 700,
          mx: 'auto',
          background: 'linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)',
          border: '2px solid #FF9800'
        }}>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#f57c00', fontWeight: 600 }}>
              🎯 Nevada LLC Formation Process
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              • <strong>Planning:</strong> Choose your business name and structure<br />
              • <strong>Filing:</strong> Submit Articles of Organization<br />
              • <strong>Compliance:</strong> Operating agreements and ongoing requirements<br />
              • <strong>Benefits:</strong> Asset protection and tax advantages<br />
              • <strong>Maintenance:</strong> Annual filings and record keeping
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default LLCGameMenu;