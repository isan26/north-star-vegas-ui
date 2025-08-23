import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import logo from '../../assets/logo.jpeg';

const containerVariants = {
  initial: { 
    opacity: 0,
    scale: 0.3
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 1.2,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: -50,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};

const logoVariants = {
  initial: { 
    scale: 0,
    rotate: -180
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 0.8,
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const textVariants = {
  initial: { 
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { 
      delay: 1.0,
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const AnimatedLogoStep = ({ onNext }) => {
  const [animationPhase, setAnimationPhase] = useState('entering');

  useEffect(() => {
    const sequence = [
      { phase: 'entering', duration: 1200 },
      { phase: 'showing', duration: 2000 },
      { phase: 'exiting', duration: 500 }
    ];

    let currentIndex = 0;
    
    const runSequence = () => {
      if (currentIndex < sequence.length) {
        const current = sequence[currentIndex];
        setAnimationPhase(current.phase);
        
        setTimeout(() => {
          currentIndex++;
          if (currentIndex < sequence.length) {
            runSequence();
          } else {
            onNext();
          }
        }, current.duration);
      }
    };

    runSequence();
  }, [onNext]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #9c27b0 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            background: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.2})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate={animationPhase === 'exiting' ? 'exit' : 'animate'}
        style={{ textAlign: 'center', zIndex: 10 }}
      >
        {/* Logo */}
        <motion.div
          variants={logoVariants}
          style={{ marginBottom: '2rem' }}
        >
          <Box
            component="img"
            src={logo}
            alt="North Star Vegas Logo"
            sx={{
              width: { xs: 120, md: 150 },
              height: { xs: 120, md: 150 },
              borderRadius: '50%',
              boxShadow: '0 8px 32px rgba(255, 255, 255, 0.3)',
              border: '4px solid rgba(255, 255, 255, 0.8)',
              objectFit: 'cover'
            }}
          />
        </motion.div>

        {/* Company Name */}
        <motion.div variants={textVariants}>
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 700,
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              mb: 1,
              fontSize: { xs: '2rem', md: '3rem' },
              letterSpacing: '0.02em'
            }}
          >
            North Star Vegas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 300,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              fontSize: { xs: '1.2rem', md: '1.5rem' }
            }}
          >
            Your Success Journey Starts Here
          </Typography>
        </motion.div>
      </motion.div>

      {/* Subtle glow effect */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
    </Box>
  );
};

export default AnimatedLogoStep;