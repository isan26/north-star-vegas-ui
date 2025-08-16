import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PollApp from './PollApp';
import Game from './game/Game';
import OfflineIndicator from './components/OfflineIndicator';
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';

const Navigation = () => {
  const location = useLocation();
  
  return (
    <AppBar position="static" sx={{ 
      background: 'linear-gradient(135deg, #1cb0f6 0%, #58cc02 100%)',
      mb: 0
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
          North Star Vegas 🌟
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/"
            startIcon={<HomeIcon />}
            variant={location.pathname === '/' ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname === '/' ? 'white' : 'transparent'
            }}
          >
            Poll
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/game"
            startIcon={<GamepadIcon />}
            variant={location.pathname.startsWith('/game') ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname.startsWith('/game') ? 'white' : 'transparent'
            }}
          >
            AI Game
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navigation />
        <OfflineIndicator />
        <Routes>
          <Route path="/" element={<PollApp />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;