import React from 'react';

import ResponsiveAppBar from './components/Navbar';
import RandomQuoteMachine from './components/RandomQuoteMachine';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

import './App.css';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dda78e',
    },
    secondary: {
      main: '#282c34',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="App">
          <ResponsiveAppBar />
          <div className="App-header">
            <RandomQuoteMachine />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
