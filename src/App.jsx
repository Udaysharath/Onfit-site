import './App.css';
import './index.css'
import DrawerAppBar from './components/Navbar';
import Dashboard from './components/Dashboard';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <DrawerAppBar />
      <Dashboard />
    </>
  );
}

export default App;
