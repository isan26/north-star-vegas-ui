import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import PollApp from './pages/PollApp';
import Game from './pages/Game';
import LLCGame from './pages/LLCGame';
import DelawareGame from './pages/DelawareGame';
import NonprofitGame from './pages/NonprofitGame';
import HomeIcon from '@mui/icons-material/Home';
import GamepadIcon from '@mui/icons-material/Gamepad';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

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
            variant={location.pathname === '/game' ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname === '/game' ? 'white' : 'transparent'
            }}
          >
            AI Quiz
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/llc-quiz"
            startIcon={<BusinessIcon />}
            variant={location.pathname === '/llc-quiz' ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname === '/llc-quiz' ? 'white' : 'transparent'
            }}
          >
            NV LLC QUIZ
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/delaware-quiz"
            startIcon={<AccountBalanceIcon />}
            variant={location.pathname === '/delaware-quiz' ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname === '/delaware-quiz' ? 'white' : 'transparent'
            }}
          >
            DE + NV LLC Quiz
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/nonprofit-quiz"
            startIcon={<VolunteerActivismIcon />}
            variant={location.pathname === '/nonprofit-quiz' ? 'outlined' : 'text'}
            sx={{ 
              color: 'white',
              borderColor: location.pathname === '/nonprofit-quiz' ? 'white' : 'transparent'
            }}
          >
            Nonprofit
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
        <Routes>
          <Route path="/" element={<PollApp />} />
          <Route path="/game" element={<Game />} />
          <Route path="/llc-quiz" element={<LLCGame />} />
          <Route path="/delaware-quiz" element={<DelawareGame />} />
          <Route path="/nonprofit-quiz" element={<NonprofitGame />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;