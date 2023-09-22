import './App.css';
import React from "react";
import Layout from './components/Layout.js'
import { ThemeProvider , CssBaseline} from '@mui/material';
import theme from './styles/theme.js';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
     <ThemeProvider theme={theme}>
       <BrowserRouter>
      <Layout/>
      </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
