import Home from './components/Home/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createContext, useState } from 'react';
import { Paper } from '@mui/material';

export const DarkModeContext = createContext();

const App = () => {

  const [mode, setMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: mode ? 'light' : 'dark'
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
  });

  return (
    <DarkModeContext.Provider value={[mode, setMode]}>
      <ThemeProvider theme={theme}>
        <Paper sx={{ height: '100vh' }}>
          <Home />
        </Paper>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default App;
