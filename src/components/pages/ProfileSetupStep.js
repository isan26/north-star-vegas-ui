import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Grid,
  Fade
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';

const avatarOptions = [
  { id: '🦸‍♂️', emoji: '🦸‍♂️', name: 'Superhero' },
  { id: '🧙‍♀️', emoji: '🧙‍♀️', name: 'Wizard' },
  { id: '🚀', emoji: '🚀', name: 'Astronaut' },
  { id: '🎨', emoji: '🎨', name: 'Artist' },
  { id: '🎸', emoji: '🎸', name: 'Musician' },
  { id: '📚', emoji: '📚', name: 'Scholar' },
  { id: '🌟', emoji: '⭐', name: 'Star' },
  { id: '🦄', emoji: '🦄', name: 'Unicorn' },
];

const ProfileSetupStep = ({ userData, onNext, onPrevious, canGoBack }) => {
  const [name, setName] = useState(userData.name || '');
  const [selectedAvatar, setSelectedAvatar] = useState(userData.avatar || avatarOptions[0].id);
  const [nameError, setNameError] = useState('');

  const handleNext = () => {
    if (!name.trim()) {
      setNameError('Please enter your name');
      return;
    }
    setNameError('');
    onNext({ name: name.trim(), avatar: selectedAvatar });
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
          background: 'linear-gradient(135deg, #ffffff 0%, #f0f8ff 100%)',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <PersonIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                  Tell us about yourself!
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Let's create your profile to personalize your experience
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  What's your name?
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your name..."
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  error={!!nameError}
                  helperText={nameError}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: 'background.paper',
                    }
                  }}
                />
              </Box>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h6" sx={{ mb: 3 }}>
                  Choose your avatar
                </Typography>
                <Grid container spacing={2}>
                  {avatarOptions.map((avatar, index) => (
                    <Grid item xs={3} key={avatar.id}>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <Box
                          onClick={() => setSelectedAvatar(avatar.id)}
                          sx={{
                            textAlign: 'center',
                            cursor: 'pointer',
                            p: 2,
                            borderRadius: 2,
                            border: selectedAvatar === avatar.id ? '3px solid' : '2px solid transparent',
                            borderColor: selectedAvatar === avatar.id ? 'primary.main' : 'divider',
                            backgroundColor: selectedAvatar === avatar.id ? 'primary.light' : 'background.paper',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              backgroundColor: 'primary.light',
                              borderColor: 'primary.main',
                            }
                          }}
                        >
                          <Typography variant="h4" sx={{ mb: 1 }}>
                            {avatar.emoji}
                          </Typography>
                          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                            {avatar.name}
                          </Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </motion.div>

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
                  disabled={!name.trim()}
                  sx={{ px: 3 }}
                >
                  Continue
                </Button>
              </Box>
            </motion.div>

            {name && (
              <Fade in={!!name}>
                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Nice to meet you, <strong>{name}</strong>! {selectedAvatar}
                  </Typography>
                </Box>
              </Fade>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ProfileSetupStep;
