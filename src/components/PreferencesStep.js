import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Slider,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Chip
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TuneIcon from '@mui/icons-material/Tune';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SpeedIcon from '@mui/icons-material/Speed';

const PreferencesStep = ({ userData, onNext, onPrevious, canGoBack }) => {
  const [preferences, setPreferences] = useState({
    difficulty: userData.preferences?.difficulty || 'medium',
    dailyTime: userData.preferences?.dailyTime || 15,
    notifications: userData.preferences?.notifications ?? true,
  });

  const handleNext = () => {
    onNext({ preferences });
  };

  const handleDifficultyChange = (event) => {
    setPreferences(prev => ({ ...prev, difficulty: event.target.value }));
  };

  const handleTimeChange = (event, newValue) => {
    setPreferences(prev => ({ ...prev, dailyTime: newValue }));
  };

  const handleNotificationChange = (event) => {
    setPreferences(prev => ({ ...prev, notifications: event.target.checked }));
  };

  const getDifficultyEmoji = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '🟡';
    }
  };

  const getTimeEmoji = (time) => {
    if (time <= 10) return '⚡';
    if (time <= 20) return '🏃‍♂️';
    if (time <= 30) return '🚶‍♂️';
    return '🐌';
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ 
          maxWidth: 600, 
          background: 'linear-gradient(135deg, #ffffff 0%, #fef7ff 100%)',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <TuneIcon sx={{ fontSize: 60, color: 'warning.main', mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                  Customize your experience
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Let's set up your preferences to make this perfect for you!
                </Typography>
              </Box>
            </motion.div>

            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <FormControl component="fieldset" sx={{ width: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <SpeedIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <FormLabel component="legend" sx={{ fontWeight: 700, fontSize: '1.1rem' }}>
                      Choose your difficulty level {getDifficultyEmoji(preferences.difficulty)}
                    </FormLabel>
                  </Box>
                  <RadioGroup
                    value={preferences.difficulty}
                    onChange={handleDifficultyChange}
                    sx={{ ml: 4 }}
                  >
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <FormControlLabel 
                        value="easy" 
                        control={<Radio />} 
                        label={
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              🟢 Easy & Relaxed
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Take it slow and steady
                            </Typography>
                          </Box>
                        }
                        sx={{ mb: 2 }}
                      />
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <FormControlLabel 
                        value="medium" 
                        control={<Radio />} 
                        label={
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              🟡 Balanced Challenge
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Perfect mix of fun and progress
                            </Typography>
                          </Box>
                        }
                        sx={{ mb: 2 }}
                      />
                    </motion.div>
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <FormControlLabel 
                        value="hard" 
                        control={<Radio />} 
                        label={
                          <Box>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              🔴 Intense & Fast-paced
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                              Push your limits!
                            </Typography>
                          </Box>
                        }
                      />
                    </motion.div>
                  </RadioGroup>
                </FormControl>
              </motion.div>
            </Box>

            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <AccessTimeIcon sx={{ mr: 1, color: 'secondary.main' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Daily time commitment {getTimeEmoji(preferences.dailyTime)}
                  </Typography>
                </Box>
                <Box sx={{ px: 3 }}>
                  <Slider
                    value={preferences.dailyTime}
                    onChange={handleTimeChange}
                    min={5}
                    max={60}
                    step={5}
                    marks={[
                      { value: 5, label: '5min' },
                      { value: 15, label: '15min' },
                      { value: 30, label: '30min' },
                      { value: 60, label: '1hr' },
                    ]}
                    valueLabelDisplay="auto"
                    valueLabelFormat={(value) => `${value} minutes`}
                    sx={{
                      '& .MuiSlider-thumb': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                      },
                      '& .MuiSlider-track': {
                        background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
                      }
                    }}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Chip 
                      label={`${preferences.dailyTime} minutes daily`}
                      color="secondary"
                      variant="filled"
                      sx={{ fontWeight: 700 }}
                    />
                  </Box>
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: 'background.paper',
                  border: '2px solid',
                  borderColor: 'divider'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <NotificationsIcon sx={{ mr: 2, color: 'info.main' }} />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Daily Reminders 🔔
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Get gentle nudges to keep you on track
                      </Typography>
                    </Box>
                  </Box>
                  <Switch
                    checked={preferences.notifications}
                    onChange={handleNotificationChange}
                    color="primary"
                    size="medium"
                  />
                </Box>
              </motion.div>
            </Box>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button
                  variant="outlined"
                  startIcon={<ArrowBackIcon />}
                  onClick={onPrevious}
                  disabled={!canGoBack}
                  sx={{ px: 3 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  onClick={handleNext}
                  sx={{ px: 3 }}
                >
                  Finish Setup
                </Button>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default PreferencesStep;
