import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  Box, 
  LinearProgress,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const GameLevel = ({ level, gameData, onComplete, onBack, storageKey = 'aiGameProgress' }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const questions = gameData.questions;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate final score
      let correctAnswers = 0;
      questions.forEach(question => {
        const selectedIndex = selectedAnswers[question.id];
        if (selectedIndex !== undefined && question.options[selectedIndex]?.correct) {
          correctAnswers++;
        }
      });
      
      setScore(correctAnswers);
      setShowResults(true);
      
      // Save progress with dynamic storage key
      const percentage = saveGameProgressWithKey(storageKey, level, correctAnswers, questions.length);
      
      // Call onComplete with results
      setTimeout(() => {
        onComplete({
          level,
          score: correctAnswers,
          totalQuestions: questions.length,
          percentage,
          passed: percentage >= 80
        });
      }, 2000);
    }
  };

  // Helper function to save progress with custom storage key
  const saveGameProgressWithKey = (key, level, score, totalQuestions) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const progress = localStorage.getItem(key);
    let parsedProgress = {};
    
    if (progress) {
      parsedProgress = JSON.parse(progress);
    }
    
    parsedProgress[level] = {
      score,
      totalQuestions,
      percentage,
      completed: true,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(key, JSON.stringify(parsedProgress));
    return percentage;
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const currentQ = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[currentQ?.id];
  const canProceed = selectedAnswer !== undefined;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const passed = percentage >= 80;
    
    return (
      <Box sx={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Card sx={{ 
            maxWidth: 600, 
            mx: 'auto',
            background: passed 
              ? 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)'
              : 'linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%)',
            border: '3px solid',
            borderColor: passed ? 'success.main' : 'error.main'
          }}>
            <CardContent sx={{ p: 6 }}>
              <Typography variant="h2" sx={{ 
                mb: 2,
                fontSize: '4rem'
              }}>
                {passed ? '🎉' : '😅'}
              </Typography>
              
              <Typography variant="h4" sx={{ 
                mb: 3,
                color: passed ? 'success.main' : 'error.main',
                fontWeight: 700
              }}>
                {passed ? 'Excellent Work!' : 'Keep Learning!'}
              </Typography>
              
              <Typography variant="h5" sx={{ mb: 4 }}>
                You scored <strong>{score}/{questions.length}</strong> ({percentage}%)
              </Typography>
              
              {passed ? (
                <Typography variant="body1" sx={{ mb: 4, color: 'success.dark' }}>
                  🚀 Amazing! You've unlocked the next level!
                </Typography>
              ) : (
                <Typography variant="body1" sx={{ mb: 4, color: 'error.dark' }}>
                  📚 You need 80% to advance. Try again - you've got this!
                </Typography>
              )}
              
              <LinearProgress 
                variant="determinate" 
                value={percentage} 
                sx={{
                  height: 12,
                  borderRadius: 6,
                  mb: 4,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: passed ? 'success.main' : 'warning.main'
                  }
                }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto' }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={onBack}
            sx={{ mr: 3 }}
          >
            Back to Menu
          </Button>
          
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={{ 
              color: gameData.color,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <span style={{ fontSize: '2rem' }}>{gameData.icon}</span>
              {gameData.title}
            </Typography>
          </Box>
        </Box>

        {/* Progress Bar */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 600 }}>
              Question {currentQuestion + 1} of {questions.length}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {Math.round(progress)}% Complete
            </Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={progress}
            sx={{
              height: 8,
              borderRadius: 4,
              '& .MuiLinearProgress-bar': {
                backgroundColor: gameData.color
              }
            }}
          />
        </Box>
      </motion.div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4 }}
        >
          <Card sx={{
            mb: 4,
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)',
            border: '2px solid',
            borderColor: gameData.color + '40'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" sx={{ 
                mb: 4,
                fontWeight: 600,
                lineHeight: 1.4
              }}>
                {currentQ.question}
              </Typography>

              <FormControl component="fieldset" fullWidth>
                <RadioGroup
                  value={selectedAnswer || ''}
                  onChange={(e) => handleAnswerSelect(currentQ.id, parseInt(e.target.value))}
                >
                  {currentQ.options.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <FormControlLabel
                        value={index}
                        control={<Radio sx={{ color: gameData.color }} />}
                        label={option.text}
                        sx={{
                          width: '100%',
                          mx: 0,
                          mb: 2,
                          p: 2,
                          borderRadius: 2,
                          border: '2px solid',
                          borderColor: selectedAnswer === index 
                            ? gameData.color 
                            : 'transparent',
                          backgroundColor: selectedAnswer === index 
                            ? gameData.color + '10'
                            : 'transparent',
                          '&:hover': {
                            backgroundColor: gameData.color + '08',
                            borderColor: gameData.color + '40'
                          },
                          '& .MuiFormControlLabel-label': {
                            fontSize: '1.1rem',
                            fontWeight: selectedAnswer === index ? 600 : 400
                          }
                        }}
                      />
                    </motion.div>
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIcon />}
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            sx={{ px: 4, py: 1.5 }}
          >
            Previous
          </Button>

          <Button
            variant="contained"
            endIcon={currentQuestion === questions.length - 1 ? <CheckIcon /> : <ArrowForwardIcon />}
            onClick={handleNext}
            disabled={!canProceed}
            sx={{ 
              px: 4, 
              py: 1.5,
              fontSize: '1.1rem',
              background: `linear-gradient(135deg, ${gameData.color} 0%, ${gameData.color}dd 100%)`,
              '&:hover': {
                background: `linear-gradient(135deg, ${gameData.color}dd 0%, ${gameData.color}bb 100%)`
              },
              '&:disabled': {
                opacity: 0.5
              }
            }}
          >
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default GameLevel;
