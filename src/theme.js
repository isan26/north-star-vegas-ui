import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#58cc02', // Duolingo green
      light: '#89e219',
      dark: '#3d8b00',
    },
    secondary: {
      main: '#1cb0f6', // Duolingo blue
      light: '#58ccf7',
      dark: '#0f7db2',
    },
    success: {
      main: '#58cc02',
    },
    warning: {
      main: '#ffc800',
    },
    error: {
      main: '#ff4b4b',
    },
    background: {
      default: '#f7f7f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#4b4b4b',
      secondary: '#777777',
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.1rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
    },
    button: {
      fontWeight: 700,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          padding: '12px 24px',
          fontSize: '1rem',
          fontWeight: 700,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
            transform: 'translateY(-1px)',
          },
          transition: 'all 0.2s ease-in-out',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #3d8b00 0%, #58cc02 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #1cb0f6 0%, #58ccf7 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #0f7db2 0%, #1cb0f6 100%)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
          },
          transition: 'all 0.3s ease-in-out',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          height: 12,
          backgroundColor: '#e5e5e5',
        },
        bar: {
          borderRadius: 10,
          background: 'linear-gradient(135deg, #58cc02 0%, #89e219 100%)',
        },
      },
    },
  },
});

export default theme;
