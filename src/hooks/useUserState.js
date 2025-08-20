import { useState, useEffect } from 'react';

const useUserState = () => {
  const [userState, setUserState] = useState(() => {
    const saved = localStorage.getItem('northStarVegasUser');
    return saved ? JSON.parse(saved) : {
      aiQuizHighScore: 0,
      llcQuizHighScore: 0,
      delawareQuizHighScore: 0,
      nonprofitQuizHighScore: 0
    };
  });

  useEffect(() => {
    localStorage.setItem('northStarVegasUser', JSON.stringify(userState));
  }, [userState]);

  const updateHighScore = (gameType, score) => {
    setUserState(prev => ({
      ...prev,
      [gameType]: Math.max(prev[gameType], score)
    }));
  };

  const resetScores = () => {
    setUserState({
      aiQuizHighScore: 0,
      llcQuizHighScore: 0,
      delawareQuizHighScore: 0,
      nonprofitQuizHighScore: 0
    });
  };

  return {
    userState,
    updateHighScore,
    resetScores
  };
};

export default useUserState;
