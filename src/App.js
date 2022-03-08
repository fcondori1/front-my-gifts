import styles from './App.module.css';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Profiles from './components/Profiles/Profiles';
import GiftsCreate from './components/GiftsCreate/GiftsCreate';
import Signup from './components/Signup/Signup';
import Welcome from './components/Welcome/Welcome';
import Main from './components/Main/Main';
import API_URL from './apiConfig';
import 'animate.css';

function App() {
	const { pathname } = useLocation();

	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const [userInfo, setUserInfo] = useState(null);
	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		getUserInfo();
		console.log(localStorage.getItem('token'));
		setLoggedIn(true);
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			const data = await response.json();
			console.log(data);
			if (data.detail === 'Invalid token.') {
				setUserInfo(null);
				setLoggedIn(false);
				return;
			} else {
				setUserInfo(data);
				setLoggedIn(true);
				return;
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		console.log(localStorage.getItem('token'));
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 204) {
				alert('You have been logged out!');
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem('token');
			}
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (loggedIn) {
			getUserInfo();
		}
	}, []);

	return (
		<>
			{pathname !== '/' && (
				<Navigation
					loggedIn={loggedIn}
					handleLogout={handleLogout}
					userInfo={userInfo}
				/>
			)}
			<main className={styles.app}>
				<Routes>
					<Route path='/' element={<Welcome />} />
					<Route
						path='/login'
						element={<Login handleSetLoggedIn={handleSetLoggedIn} />}
					/>
					<Route path='/signup' element={<Signup />} />
					<Route path='/main' element={<Main />} />
					<Route path='/profiles' element={<Profiles loggedIn={loggedIn} />} />
					<Route path='/profiles/:owner' element={<GiftsCreate />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
