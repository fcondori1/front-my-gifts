import styles from './App.module.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';
import Gifts from './components/Gifts/Gifts';
import GiftsCreate from './components/GiftsCreate/GiftsCreate';
import Signup from './components/Signup/Signup';
import Welcome from './components/Welcome/Welcome';

function App() {
  const { pathname } = useLocation();

	return (
		<main className={styles.app}>
			{pathname !== '/' && <Navigation />}

			<Routes>
				<Route path='/' element={<Welcome />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
				<Route path='/gifts' element={<Gifts />} />
				<Route path='/giftscreate' element={<GiftsCreate />} />
			</Routes>
		</main>
	);
}

export default App;
