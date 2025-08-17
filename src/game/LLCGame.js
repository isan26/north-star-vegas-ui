import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LLCGameMenu from './components/LLCGameMenu';
import GameLevel from './components/GameLevel';
import GameResults from './components/GameResults';
import { llcGameData, getLLCUnlockedLevels } from './data/llcGameData';

const LLCGame = () => {
  const [currentView, setCurrentView] = useState('menu'); // 'menu', 'playing', 'results'
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameResults, setGameResults] = useState(null);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  useEffect(() => {
    setUnlockedLevels(getLLCUnlockedLevels());
  }, []);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setCurrentView('playing');
  };

  const handleGameComplete = (results) => {
    setGameResults(results);
    setCurrentView('results');
    // Refresh unlocked levels after completing a game
    setTimeout(() => {
      setUnlockedLevels(getLLCUnlockedLevels());
    }, 1000);
  };

  const handleBackToMenu = () => {
    setCurrentView('menu');
    setSelectedLevel(null);
    setGameResults(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'playing':
        return (
          <GameLevel
            level={selectedLevel}
            gameData={llcGameData[selectedLevel]}
            onComplete={handleGameComplete}
            onBack={handleBackToMenu}
            storageKey="llcGameProgress"
          />
        );
      case 'results':
        return (
          <GameResults
            results={gameResults}
            levelData={llcGameData[selectedLevel]}
            onBackToMenu={handleBackToMenu}
            onRetryLevel={() => setCurrentView('playing')}
          />
        );
      default:
        return (
          <LLCGameMenu
            unlockedLevels={unlockedLevels}
            onLevelSelect={handleLevelSelect}
          />
        );
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, minHeight: '100vh' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {renderCurrentView()}
        </motion.div>
      </AnimatePresence>
    </Container>
  );
};

export default LLCGame;
