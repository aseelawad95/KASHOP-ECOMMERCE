import { createTheme } from '@mui/material/styles';


const lightPalette = {
  mode: 'light',
    primary: {
        main: '#1976d2',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9c27b0',
        contrastText: '#fff',
      },
      background: {
        default: '#f5f5f5',
        paper: '#fff',
      },
      text: {
        primary: '#000',
        secondary: '#555',
      },
      divider: '#e0e0e0',

};

const darkPalette = {
  mode: 'dark',
    primary: {
        main: '#1976d2',
        contrastText: '#fff',
      },
      secondary: {
        main: '#9c27b0',
        contrastText: '#fff',
      },
      background: {
       default: '#121212',
        paper: '#fff',
      },
      text: {
        primary: '#fff',
        secondary: '#555',
      },
      divider: '#e0e0e0',

}

export const getTheme = (mode) => {
  return createTheme({
    palette: mode === 'light' ? lightPalette : darkPalette,
  });
}
