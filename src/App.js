import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Gifts from './components/Gifts/Gifts';
import GiftsCreate from './components/GiftsCreate/GiftsCreate';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
      <Gifts />
      <GiftsCreate />
      <Signup />
    </div>
  );
}

export default App;
