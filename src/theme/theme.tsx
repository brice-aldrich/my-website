import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A2A3A', // Deep Navy
    },
    secondary: {
      main: '#4A6FA5', // Steel Blue
    },
    background: {
      default: '#FFFFFF', // Crisp White
      paper: '#C4C9CF', // Soft Gray
    },
    text: {
      primary: '#1A2A3A', // Deep Navy
      secondary: '#65676b', // Steel Blue
    },
    action: {
      active: '#20B2AA', // Accent Teal
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#4a6fa5',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#4a6fa5',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.75rem',
      color: '#4a6fa5',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      color: '#7d7f7c',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle1: {
      fontWeight: 500,
    },
    subtitle2: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      color: '#1A2A3A',
    },
    body2: {
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
});

export default theme;