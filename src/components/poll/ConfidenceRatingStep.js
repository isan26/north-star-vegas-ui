import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StarIcon from '@mui/icons-material/Star';

const ConfidenceRatingStep = ({ userData, onNext, onPrevious, canGoBack }) => {
  const [confidence, setConfidence] = useState(0);
  const [hover, setHover] = useState(-1);

  const handleSubmit = () => {
    if (confidence > 0) {
      onNext({ confidenceLevel: confidence });
    }
  };

  const labels = {
    1: 'Complete Beginner',
    2: 'Some Experience',
    3: 'Intermediate',
    4: 'Advanced',
    5: 'Expert Level',
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
          background: 'linear-gradient(135deg, #ffffff 0%, #fff8e1 100%)',
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <EmojiEventsIcon 
                sx={{ 
                  fontSize: 100, 
                  color: '#ff9800', 
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
                background: 'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 800
              }}>
                Confidence Level
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
                fontSize: '1.8rem',
              }}>
                On a scale of 1-5, how confident are you using AI as a consultant?
                <br />
                <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic' }}>
                  Be honest - we'll customize your experience! ⭐
                </Typography>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Rating
                  name="confidence-rating"
                  value={confidence}
                  precision={1}
                  onChange={(event, newValue) => {
                    setConfidence(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                  size="large"
                  sx={{
                    fontSize: '4rem',
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#ff9800',
                    },
                    '& .MuiRating-iconHover': {
                      color: '#ffb74d',
                    },
                  }}
                />
                
                {confidence > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Typography variant="h6" sx={{ 
                      color: '#ff9800', 
                      fontWeight: 600,
                      mb: 2
                    }}>
                      {labels[hover !== -1 ? hover : confidence]}
                    </Typography>
                  </motion.div>
                )}

                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                  Click the stars to rate your confidence level
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: confidence > 0 ? 1 : 0.5, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Button 
                variant="contained" 
                color="primary"
                size="large" 
                onClick={handleSubmit}
                disabled={confidence === 0}
                sx={{ 
                  px: 6, 
                  py: 2.5,
                  fontSize: '1.2rem',
                  borderRadius: 3,
                  minWidth: 200,
                  background: confidence > 0 ? 
                    'linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)' : 
                    'rgba(0, 0, 0, 0.12)',
                  '&:hover': {
                    background: confidence > 0 ? 
                      'linear-gradient(135deg, #f57c00 0%, #ff9800 100%)' : 
                      'rgba(0, 0, 0, 0.12)',
                  },
                  '&:disabled': {
                    color: 'rgba(0, 0, 0, 0.26)',
                  }
                }}
              >
                Continue
              </Button>
            </motion.div>

            {canGoBack && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
              >
                <Button 
                  variant="text" 
                  onClick={onPrevious}
                  sx={{ 
                    mt: 4, 
                    color: 'text.secondary',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    }
                  }}
                >
                  ← Go Back
                </Button>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                backgroundColor: 'rgba(255, 152, 0, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(255, 152, 0, 0.2)'
              }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  🚀 <strong>Your journey matters!</strong>
                  <br />
                  Every expert was once a beginner. We're here to help you grow.
                </Typography>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ConfidenceRatingStep;
