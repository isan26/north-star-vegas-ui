import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  Box,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const ContactFormStep = ({ pollData = {}, onNext, onBack, canGoBack }) => {
  // Map pollData to userData for compatibility
  const userData = {
    name: pollData.contactInfo?.name || '',
    email: pollData.contactInfo?.email || '',
    phone: pollData.contactInfo?.phone || '',
    interested: pollData.interests,
    leveragesAi: pollData.aiLeverage,
    confidenceLevel: pollData.confidenceRating
  };

  const [formData, setFormData] = useState({
    name: userData.name || '',
    email: userData.email || '',
    phone: userData.phone || '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ''));
  };

  const handleChange = (field) => (event) => {
    const value = event.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSubmitError('');

    try {
      // Prepare complete user data for Firebase
      const completeUserData = {
        // Contact Information
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        
        // Survey Responses
        interested: userData.interested,
        leveragesAi: userData.leveragesAi,
        confidenceLevel: userData.confidenceLevel,
        
        // Metadata
        timestamp: new Date(),
        submissionId: `ai-consultant-${Date.now()}`,
        source: 'AI Consultant Wizard'
      };

      // Save to Firebase
      const docRef = await addDoc(collection(db, 'ai-consultant-applications'), completeUserData);
      
      
      // Pass data to next step using PollApp's expected format
      onNext({ 
        contactInfo: formData,
        submissionId: completeUserData.submissionId,
        firebaseId: docRef.id
      });
    } catch (error) {
      console.error('Error adding document: ', error);
      setSubmitError('Failed to submit your application. Please try again.');
    } finally {
      setLoading(false);
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
          maxWidth: 600, 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fff8 100%)',
        }}>
          <CardContent sx={{ p: 6 }}>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <ContactPageIcon sx={{ fontSize: 70, color: 'primary.main', mb: 2 }} />
                <Typography variant="h3" sx={{ mb: 2, fontWeight: 800 }}>
                  Great! Let's connect 🎉
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Please share your contact information so we can get in touch with you about this exciting opportunity.
                </Typography>
              </Box>
            </motion.div>

            {submitError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Alert severity="error" sx={{ mb: 3 }}>
                  {submitError}
                </Alert>
              </motion.div>
            )}

            <Box sx={{ mb: 4 }}>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <TextField
                  fullWidth
                  label="Full Name *"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange('name')}
                  error={!!errors.name}
                  helperText={errors.name}
                  sx={{ mb: 3 }}
                  InputLabelProps={{ shrink: true }}
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <TextField
                  fullWidth
                  label="Email Address *"
                  variant="outlined"
                  type="email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{ mb: 3 }}
                  InputLabelProps={{ shrink: true }}
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <TextField
                  fullWidth
                  label="Phone Number *"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  InputLabelProps={{ shrink: true }}
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>
            </Box>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <Box sx={{ 
                p: 3, 
                backgroundColor: 'rgba(88, 204, 2, 0.1)', 
                borderRadius: 2,
                mb: 4,
                border: '1px solid rgba(88, 204, 2, 0.2)'
              }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  🔒 <strong>Your privacy matters:</strong> We'll only use this information to contact you about the AI consultant position. Your data is secure and won't be shared with third parties.
                </Typography>
              </Box>
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
                  onClick={onBack}
                  disabled={!canGoBack || loading}
                  sx={{ px: 3 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                  onClick={handleSubmit}
                  disabled={loading}
                  sx={{ 
                    px: 4,
                    minWidth: 140,
                    background: loading ? undefined : 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
                    '&:hover': {
                      background: loading ? undefined : 'linear-gradient(135deg, #3d8b00 0%, #58cc02 100%)',
                    }
                  }}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </Button>
              </Box>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default ContactFormStep;