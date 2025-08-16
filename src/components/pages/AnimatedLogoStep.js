import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
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
      duration: 0.8,
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  pulse: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: 1,
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const textVariants = {
  initial: { 
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      delay: 1.2,
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const AnimatedLogoStep = ({ onNext }) => {
  const [animationPhase, setAnimationPhase] = useState('entering');

  useEffect(() => {
    const phases = [
      { phase: 'entering', duration: 800 },
      { phase: 'pulsing', duration: 2000 },
      { phase: 'showing-text', duration: 2000 },
      { phase: 'exiting', duration: 500 }
    ];

    let currentPhaseIndex = 0;
    
    const runNextPhase = () => {
      if (currentPhaseIndex < phases.length) {
        const currentPhase = phases[currentPhaseIndex];
        setAnimationPhase(currentPhase.phase);
        
        setTimeout(() => {
          currentPhaseIndex++;
          if (currentPhaseIndex < phases.length) {
            runNextPhase();
          } else {
            onNext();
          }
        }, currentPhase.duration);
      }
    };

    runNextPhase();
  }, [onNext]);

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9c27b0 100%)',
        overflow: 'hidden',
        position: 'relative',
        minHeight: '100vh',
        borderRadius: 0
      }}
    >
      {/* Enhanced Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 15 + 3,
            height: Math.random() * 15 + 3,
            background: `rgba(255, 255, 255, ${Math.random() * 0.6 + 0.2})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -60, 0],
            x: [0, Math.random() * 60 - 30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Logo */}
      <motion.img
        src={logo}
        alt="Logo"
        variants={containerVariants}
        initial="initial"
        animate={animationPhase === 'pulsing' ? 'pulse' : animationPhase === 'exiting' ? 'exit' : 'animate'}
        style={{
          width: '350px',
          height: 'auto',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 50px rgba(255, 255, 255, 0.7))',
          marginBottom: '2rem'
        }}
      />

      {/* Welcome Text */}
      <motion.div
        variants={textVariants}
        initial="initial"
        animate={animationPhase === 'showing-text' ? 'animate' : animationPhase === 'exiting' ? 'exit' : 'initial'}
        style={{ textAlign: 'center' }}
      >
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            fontWeight: 600,
            textShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
            mb: 1,
            letterSpacing: '0.02em'
          }}
        >
          Welcome
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)',
            fontWeight: 300,
            textShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
            letterSpacing: '0.01em'
          }}
        >
          Let's discover your AI journey
        </Typography>
      </motion.div>

      {/* Subtle pulse effect overlay */}
      <motion.div
        animate={{
          opacity: [0, 0.1, 0],
          scale: [1, 1.5, 2]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
    </Box>
  );
};

export default AnimatedLogoStep;