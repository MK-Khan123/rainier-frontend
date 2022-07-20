import Home from './components/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const App = () => {

  const [mode, setMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: mode ? 'light' : 'dark',
    },
    typography: {
      fontFamily: [
        'Poppins',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 390,
        md: 834,
        lg: 1250,
        xl: 1512,
      },
    },
  });

  return (
    <DarkModeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default App;
