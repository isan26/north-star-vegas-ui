import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Card, 
  CardContent,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  LinearProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const PollApp = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    interested: '',
    aiLeverage: '',
    confidenceLevel: 5,
    name: '',
    email: '',
    phone: ''
  });

  const steps = [
    'Interest',
    'AI Leverage', 
    'Confidence',
    'Contact Info',
    'Thank You'
  ];

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Save to localStorage for offline capability
    localStorage.setItem('pollUserData', JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString()
    }));
    
    // Trigger service worker sync
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.sync.register('background-sync-poll-data');
      });
    }
    
    setStep(steps.length - 1);
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '80vh' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ 
          fontWeight: 700,
          background: 'linear-gradient(135deg, #1cb0f6 0%, #58cc02 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          North Star Vegas Poll
        </Typography>
        
        {step < steps.length - 1 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Step {step + 1} of {steps.length - 1}: {steps[step]}
            </Typography>
            <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
          </Box>
        )}
      </Box>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Card sx={{ mb: 3 }}>
            <CardContent sx={{ p: 4 }}>
              {step === 0 && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Are you interested in learning about AI for your business?
                  </Typography>
                  <RadioGroup
                    value={formData.interested}
                    onChange={(e) => setFormData({...formData, interested: e.target.value})}
                  >
                    <FormControlLabel value="yes" control={<Radio />} label="Yes, very interested" />
                    <FormControlLabel value="somewhat" control={<Radio />} label="Somewhat interested" />
                    <FormControlLabel value="no" control={<Radio />} label="Not interested" />
                  </RadioGroup>
                </Box>
              )}

              {step === 1 && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    How do you currently leverage AI in your business?
                  </Typography>
                  <RadioGroup
                    value={formData.aiLeverage}
                    onChange={(e) => setFormData({...formData, aiLeverage: e.target.value})}
                  >
                    <FormControlLabel value="extensively" control={<Radio />} label="Extensively using AI tools" />
                    <FormControlLabel value="some" control={<Radio />} label="Some AI implementation" />
                    <FormControlLabel value="exploring" control={<Radio />} label="Just exploring options" />
                    <FormControlLabel value="none" control={<Radio />} label="Not using AI currently" />
                  </RadioGroup>
                </Box>
              )}

              {step === 2 && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    How confident are you with technology? (1-10)
                  </Typography>
                  <Box sx={{ px: 2, mt: 3 }}>
                    <Slider
                      value={formData.confidenceLevel}
                      onChange={(e, value) => setFormData({...formData, confidenceLevel: value})}
                      min={1}
                      max={10}
                      marks
                      valueLabelDisplay="on"
                    />
                  </Box>
                </Box>
              )}

              {step === 3 && (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Contact Information
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                    <TextField
                      label="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <TextField
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                    <TextField
                      label="Phone (Optional)"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </Box>
                </Box>
              )}

              {step === 4 && (
                <Box textAlign="center">
                  <Typography variant="h4" gutterBottom color="primary">
                    🎉 Thank You!
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Your responses have been saved. We'll be in touch soon!
                  </Typography>
                  <Button 
                    variant="outlined" 
                    onClick={() => {
                      setStep(0);
                      setFormData({
                        interested: '',
                        aiLeverage: '',
                        confidenceLevel: 5,
                        name: '',
                        email: '',
                        phone: ''
                      });
                    }}
                    sx={{ mt: 3 }}
                  >
                    Start Over
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>

          {step < steps.length - 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button 
                variant="outlined" 
                onClick={handlePrev}
                disabled={step === 0}
              >
                Previous
              </Button>
              <Button 
                variant="contained" 
                onClick={step === 3 ? handleSubmit : handleNext}
                disabled={
                  (step === 0 && !formData.interested) ||
                  (step === 1 && !formData.aiLeverage) ||
                  (step === 3 && (!formData.name || !formData.email))
                }
              >
                {step === 3 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default PollApp;