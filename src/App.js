import React, { useState } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InterestStep from './components/InterestStep';
import ContactFormStep from './components/ContactFormStep';
import ThankYouGenericStep from './components/ThankYouGenericStep';
import ThankYouSuccessStep from './components/ThankYouSuccessStep';
import ProgressBar from './components/ProgressBar';

const steps = [
  { id: 'interest', component: InterestStep },
  { id: 'contact', component: ContactFormStep },
  { id: 'thankYouGeneric', component: ThankYouGenericStep },
  { id: 'thankYouSuccess', component: ThankYouSuccessStep },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState({
    interested: null,
    name: '',
    email: '',
    phone: '',
  });

  const handleNext = (stepData = {}) => {
    setUserData(prev => ({ ...prev, ...stepData }));
    
    // Handle routing logic based on user's interest
    if (currentStep === 0) { // Interest step
      if (stepData.interested === false) {
        setCurrentStep(2); // Go to generic thank you
      } else {
        setCurrentStep(1); // Go to contact form
      }
    } else if (currentStep === 1) { // Contact form step
      setCurrentStep(3); // Go to success thank you
    }
  };

  const handlePrevious = () => {
    if (currentStep === 1) {
      setCurrentStep(0); // From contact form back to interest
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setUserData({
      interested: null,
      name: '',
      email: '',
      phone: '',
    });
  };

  const CurrentStepComponent = steps[currentStep].component;
  
  // Only show progress bar for the main flow (interest -> contact)
  const showProgressBar = currentStep <= 1;
  const progress = currentStep === 0 ? 50 : 100;

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showProgressBar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar progress={progress} currentStep={currentStep + 1} totalSteps={2} />
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
            canGoBack={currentStep === 1}
          />
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default App;
