
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    < Navbar/>
    </StyledEngineProvider>
  );
}

export default App;
