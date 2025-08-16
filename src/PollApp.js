import React, { useState } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AnimatedLogoStep,
  InterestStep,
  AiLeverageStep,
  ConfidenceRatingStep,
  ContactFormStep, 
  ThankYouGenericStep, 
  ThankYouSuccessStep
} from './components/pages';
import ProgressBar from './components/generic/ProgressBar';

const steps = [
  { id: 'logo', component: AnimatedLogoStep },
  { id: 'interest', component: InterestStep },
  { id: 'aiLeverage', component: AiLeverageStep },
  { id: 'confidence', component: ConfidenceRatingStep },
  { id: 'contact', component: ContactFormStep },
  { id: 'thankYouGeneric', component: ThankYouGenericStep },
  { id: 'thankYouSuccess', component: ThankYouSuccessStep },
];

function PollApp() {
  const [currentStep, setCurrentStep] = useState('logo');
  const [userData, setUserData] = useState({
    interested: null,
    aiLeverage: null,
    confidenceLevel: 0,
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
        if (stepData.interested === false) {
          setCurrentStep('thankYouGeneric');
        } else {
          setCurrentStep('aiLeverage');
        }
        break;
      case 'aiLeverage':
        setCurrentStep('confidence');
        break;
      case 'confidence':
        setCurrentStep('contact');
        break;
      case 'contact':
        setCurrentStep('thankYouSuccess');
        break;
      default:
        break;
    }
  };

  const handlePrevious = () => {
    switch(currentStep) {
      case 'aiLeverage':
        setCurrentStep('interest');
        break;
      case 'confidence':
        setCurrentStep('aiLeverage');
        break;
      case 'contact':
        setCurrentStep('confidence');
        break;
      default:
        break;
    }
  };

  const handleReset = () => {
    setCurrentStep('logo');
    setUserData({
      interested: null,
      aiLeverage: null,
      confidenceLevel: 0,
      name: '',
      email: '',
      phone: '',
    });
  };

  const showProgressBar = ['interest', 'aiLeverage', 'confidence', 'contact'].includes(currentStep);
  
  const getProgress = () => {
    switch(currentStep) {
      case 'interest': return 25;
      case 'aiLeverage': return 50;
      case 'confidence': return 75;
      case 'contact': return 100;
      default: return 0;
    }
  };

  const canGoBack = ['aiLeverage', 'confidence', 'contact'].includes(currentStep);

  return (
    <Container maxWidth="md" sx={{ py: 4, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {showProgressBar && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProgressBar progress={getProgress()} />
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
                canGoBack={canGoBack}
              />
            )
          )}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
}

export default PollApp;