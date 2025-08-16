import React, { useState } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  InterestStep, 
  AiLeverageStep,
  ConfidenceRatingStep,
  ContactFormStep, 
  ThankYouGenericStep, 
  ThankYouSuccessStep,
  ProgressBar 
} from './components';

const steps = [
  { id: 'interest', component: InterestStep },
  { id: 'aiLeverage', component: AiLeverageStep },
  { id: 'confidence', component: ConfidenceRatingStep },
  { id: 'contact', component: ContactFormStep },
  { id: 'thankYouGeneric', component: ThankYouGenericStep },
  { id: 'thankYouSuccess', component: ThankYouSuccessStep },
];

function PollApp() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    interested: null,
    leveragesAi: null,
    confidenceLevel: 0,
    name: '',
    email: '',
    phone: '',
  });

  const handleNext = (stepData = {}) => {
    setUserData(prev => ({ ...prev, ...stepData }));
    
    // Handle routing logic based on user responses
    if (currentStep === 0) { // Interest step
      if (stepData.interested === false) {
        setCurrentStep(4); // Go to generic thank you
      } else {
        setCurrentStep(1); // Go to AI leverage question
      }
    } else if (currentStep === 1) { // AI leverage step
      setCurrentStep(2); // Go to confidence rating
    } else if (currentStep === 2) { // Confidence rating step
      setCurrentStep(3); // Go to contact form
    } else if (currentStep === 3) { // Contact form step
      setCurrentStep(5); // Go to success thank you
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      setCurrentStep(0); // From AI leverage back to interest
    } else if (currentStep === 2) {
      setCurrentStep(1); // From confidence back to AI leverage
    } else if (currentStep === 3) {
      setCurrentStep(2); // From contact form back to confidence
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setUserData({
      interested: null,
      leveragesAi: null,
      confidenceLevel: 0,
      name: '',
      email: '',
      phone: '',
    });
  };

  const CurrentStepComponent = steps[currentStep].component;
  
  // Only show progress bar for the main flow (not thank you pages)
  const showProgressBar = currentStep <= 3;
  const progressSteps = [
    { step: 0, progress: 25 },
    { step: 1, progress: 50 },
    { step: 2, progress: 75 },
    { step: 3, progress: 100 },
  ];
  
  const progressInfo = progressSteps.find(p => p.step === currentStep);
  const progress = progressInfo ? progressInfo.progress : 0;
  const totalSteps = 4;

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: 'calc(100vh - 64px)', display: 'flex', flexDirection: 'column' }}>
      {showProgressBar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar progress={progress} currentStep={currentStep + 1} totalSteps={totalSteps} />
        </motion.div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          style={{ flex: 1, display: 'flex', alignItems: 'center' }}
        >
          <CurrentStepComponent
            userData={userData}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onReset={handleReset}
            canGoBack={currentStep > 0 && currentStep <= 3}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default PollApp;
