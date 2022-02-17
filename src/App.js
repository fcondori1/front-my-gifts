import styles from './App.module.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Gifts from './components/Gifts/Gifts';
import GiftsCreate from './components/GiftsCreate/GiftsCreate';
import Signup from './components/Signup/Signup';

function App() {
	return (
		<main className={styles.app}>
			<Navigation />
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/gifts' element={<Gifts />} />
				<Route path='/giftscreate' element={<GiftsCreate />} />
				<Route path='/signup' element={<Signup />} />
			</Routes>
		</main>
	);
}

export default App;
