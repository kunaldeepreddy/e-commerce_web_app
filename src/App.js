import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
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
