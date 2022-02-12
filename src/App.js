import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
