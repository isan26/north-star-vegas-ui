import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import DelawareGameMenu from '../components/games/GamePages/DelawareGameMenu';
import GameLevel from '../components/games/GameLevel';
import GameResults from '../components/games/GameResults';
import { delawareGameData, getDelawareUnlockedLevels } from '../components/games/data/delawareGameData';

const DelawareGame = () => {
  const [currentView, setCurrentView] = useState('menu'); // 'menu', 'playing', 'results'
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [gameResults, setGameResults] = useState(null);
  const [unlockedLevels, setUnlockedLevels] = useState([1]);

  useEffect(() => {
    setUnlockedLevels(getDelawareUnlockedLevels());
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
      setUnlockedLevels(getDelawareUnlockedLevels());
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
            gameData={delawareGameData[selectedLevel]}
            onComplete={handleGameComplete}
            onBack={handleBackToMenu}
            storageKey="delawareGameProgress"
          />
        );
      case 'results':
        return (
          <GameResults
            results={gameResults}
            levelData={delawareGameData[selectedLevel]}
            onBackToMenu={handleBackToMenu}
            onRetryLevel={() => setCurrentView('playing')}
          />
        );
      default:
        return (
          <DelawareGameMenu
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

export default DelawareGame;
