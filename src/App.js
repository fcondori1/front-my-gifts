import './App.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Gifts from './components/Gifts/Gifts';
import GiftsCreate from './components/GiftsCreate/GiftsCreate';
import Signup from './components/Signup/Signup';

function App() {
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/gifts' element={<Gifts />} />
				<Route path='/giftscreate' element={<GiftsCreate />} />
				<Route path='/signup' element={<Signup />} />>
			</Routes>
		</div>
	);
}

export default App;
