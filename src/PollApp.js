import React, { useState } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedLogoStep,
  InterestStep, 
  ContactFormStep, 
  ThankYouGenericStep, 
  ThankYouSuccessStep,
  ProgressBar 
} from './components';

const steps = [
  { id: 'logo', component: AnimatedLogoStep },
  { id: 'interest', component: InterestStep },
  { id: 'contact', component: ContactFormStep },
  { id: 'thankYouGeneric', component: ThankYouGenericStep },
  { id: 'thankYouSuccess', component: ThankYouSuccessStep },
];

function PollApp() {
  const [currentStep, setCurrentStep] = useState('logo');
  const [userData, setUserData] = useState({
    interested: null,
    name: '',
    email: '',
    phone: '',
  });

  const handleNext = (stepData = {}) => {
    setUserData(prev => ({ ...prev, ...stepData }));
    
    switch(currentStep) {
      case 'logo':
        setCurrentStep('interest');
        break;
      case 'interest':
        setCurrentStep(stepData.interested ? 'contact' : 'thankYouGeneric');
        break;
      case 'contact':
        setCurrentStep('thankYouSuccess');
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    if (currentStep === 'contact') {
      setCurrentStep('interest');
    }
  };

  const handleReset = () => {
    setCurrentStep('logo');
    setUserData({
      interested: null,
      name: '',
      email: '',
      phone: '',
    });
  };

  const showProgressBar = ['interest', 'contact'].includes(currentStep);
  const progress = currentStep === 'interest' ? 50 : 100;

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showProgressBar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar progress={progress} />
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
          {steps.map(({ id, component: Component }) => 
            currentStep === id && (
              <Component
                key={id}
                userData={userData}
                onNext={handleNext}
                onPrevious={handlePrevious}
                onReset={handleReset}
                canGoBack={currentStep === 'contact'}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default PollApp;