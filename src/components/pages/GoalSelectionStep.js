import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  Grid,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FlagIcon from '@mui/icons-material/Flag';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PaletteIcon from '@mui/icons-material/Palette';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const goalOptions = [
  {
    id: 'learn',
    title: 'Learn Something New',
    description: 'Discover new skills and knowledge',
    icon: SchoolIcon,
    color: '#1cb0f6',
    emoji: '📚'
  },
  {
    id: 'career',
    title: 'Advance My Career',
    description: 'Boost your professional skills',
    icon: WorkIcon,
    color: '#58cc02',
    emoji: '💼'
  },
  {
    id: 'fitness',
    title: 'Get Fit & Healthy',
    description: 'Improve your physical wellbeing',
    icon: FitnessCenterIcon,
    color: '#ff4b4b',
    emoji: '💪'
  },
  {
    id: 'creative',
    title: 'Be More Creative',
    description: 'Unleash your artistic potential',
    icon: PaletteIcon,
    color: '#ffc800',
    emoji: '🎨'
  },
  {
    id: 'travel',
    title: 'Prepare for Travel',
    description: 'Get ready for your adventures',
    icon: TravelExploreIcon,
    color: '#9c27b0',
    emoji: '✈️'
  },
  {
    id: 'personal',
    title: 'Personal Growth',
    description: 'Develop yourself holistically',
    icon: FlagIcon,
    color: '#ff9800',
    emoji: '🌟'
  },
];

const GoalSelectionStep = ({ userData, onNext, onPrevious, canGoBack }) => {
  const [selectedGoal, setSelectedGoal] = useState(userData.goal || '');

  const handleNext = () => {
    if (selectedGoal) {
      onNext({ goal: selectedGoal });
    }
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ 
          maxWidth: 800, 
          background: 'linear-gradient(135deg, #ffffff 0%, #f5f3ff 100%)',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <FlagIcon sx={{ fontSize: 60, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                  What's your main goal?
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Choose what you'd like to focus on. Don't worry, you can always change this later!
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Grid container spacing={3} sx={{ mb: 4 }}>
                {goalOptions.map((goal, index) => {
                  const IconComponent = goal.icon;
                  const isSelected = selectedGoal === goal.id;
                  
                  return (
                    <Grid item xs={12} md={6} key={goal.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Paper
                          onClick={() => setSelectedGoal(goal.id)}
                          sx={{
                            p: 3,
                            cursor: 'pointer',
                            border: isSelected ? '3px solid' : '2px solid transparent',
                            borderColor: isSelected ? goal.color : 'divider',
                            backgroundColor: isSelected ? `${goal.color}15` : 'background.paper',
                            transition: 'all 0.3s ease',
                            borderRadius: 3,
                            '&:hover': {
                              backgroundColor: `${goal.color}10`,
                              borderColor: goal.color,
                              transform: 'translateY(-4px)',
                              boxShadow: `0 8px 24px ${goal.color}30`,
                            },
                            boxShadow: isSelected ? `0 8px 24px ${goal.color}30` : '0 4px 12px rgba(0,0,0,0.1)',
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                            <Box sx={{ 
                              p: 1.5, 
                              borderRadius: 2, 
                              backgroundColor: `${goal.color}20`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <IconComponent sx={{ color: goal.color, fontSize: 28 }} />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                  {goal.title}
                                </Typography>
                                <Typography variant="h6">
                                  {goal.emoji}
                                </Typography>
                              </Box>
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {goal.description}
                              </Typography>
                            </Box>
                          </Box>
                        </Paper>
                      </motion.div>
                    </Grid>
                  );
                })}
              </Grid>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
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
                  disabled={!selectedGoal}
                  sx={{ px: 3 }}
                >
                  Continue
                </Button>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default GoalSelectionStep;
