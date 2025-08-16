import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import logo from '../../assets/logo.jpeg';

const containerVariants = {
  initial: { 
    opacity: 0,
    scale: 0.1,
    rotate: -180
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    scale: 1.2,
    transition: { duration: 0.2 }
  }
};

const AnimatedLogoStep = ({ onNext }) => {
  useEffect(() => {
    const timer = setTimeout(onNext, 1000);
    return () => clearTimeout(timer);
  }, [onNext]);

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9c27b0 100%)',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 12 + 4,
            height: Math.random() * 12 + 4,
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.8, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: Math.random()
          }}
        />
      ))}

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{
          width: '320px',
          height: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.6))'
        }}
      />
    </Box>
  );
};

export default AnimatedLogoStep;