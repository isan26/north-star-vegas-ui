import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedLogoStep from '../components/poll/AnimatedLogoStep';
import InterestStep from '../components/poll/InterestStep';
import AiLeverageStep from '../components/poll/AiLeverageStep';
import ConfidenceRatingStep from '../components/poll/ConfidenceRatingStep';
import ContactFormStep from '../components/poll/ContactFormStep';
import ThankYouSuccessStep from '../components/poll/ThankYouSuccessStep';
import ProfileSetupStep from '../components/poll/ProfileSetupStep';

const PollApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pollData, setPollData] = useState({
    interests: [],
    aiLeverage: '',
    confidenceRating: 0,
    contactInfo: {},
    profileData: {}
  });

  const steps = [
    { component: AnimatedLogoStep, name: 'logo' },
    { component: InterestStep, name: 'interests' },
    { component: AiLeverageStep, name: 'aiLeverage' },
    { component: ConfidenceRatingStep, name: 'confidence' },
    { component: ContactFormStep, name: 'contact' },
    { component: ProfileSetupStep, name: 'profile' },
    { component: ThankYouSuccessStep, name: 'success' }
  ];

  const handleNext = (stepData = {}) => {
    // Save step data
    setPollData(prev => ({
      ...prev,
      ...stepData
    }));

    // Move to next step
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    // Allow skipping certain steps
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleComplete = (finalData = {}) => {
    // Save final data
    setPollData(prev => ({
      ...prev,
      ...finalData,
      completedAt: new Date().toISOString()
    }));

    console.log('Poll completed with data:', { ...pollData, ...finalData });
    
    // Move to thank you step
    setCurrentStep(steps.length - 1);
  };

  const CurrentStepComponent = steps[currentStep]?.component;

  if (!CurrentStepComponent) {
    return <div>Error: Step not found</div>;
  }

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="md" sx={{ py: 0 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <CurrentStepComponent
              onNext={handleNext}
              onBack={currentStep > 1 ? handleBack : undefined} // Hide back button on logo and first step
              onSkip={handleSkip}
              onComplete={handleComplete}
              pollData={pollData}
              stepNumber={currentStep + 1}
              totalSteps={steps.length}
              canGoBack={currentStep > 1}
            />
          </motion.div>
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default PollApp;