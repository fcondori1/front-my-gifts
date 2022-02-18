import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import API_URL from '../../apiConfig';

const Login = ({ handleSetLoggedIn }) => {
	const initialFormData = {
		email: '',
		password: '',
	};
	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);

	const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};
	const _handleLogin = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const API_ENDPOINT = API_URL + 'token/login/';
			const response = await fetch(API_ENDPOINT, {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response);
			if (response.status === 200) {
				const data = await response.json();
				console.log(data);
				console.log(data.auth_token);
				navigate('/');
			} else {
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<>
			<form onSubmit={_handleLogin} className={styles.container}>
				<h1 className={styles.signup_title}>Sign-In</h1>
				<label className={styles.label}>Email:</label>
				<input
					required
					type='email'
					value={formData.email}
					onChange={handleChange}
					placeholder='Enter Email'
					className={styles.signup_text}
				/>
				<label className={styles.label}>Password:</label>
				<input
					required
					type='password'
					value={formData.password}
					onChange={handleChange}
					placeholder='Enter Password'
					className={styles.signup_text}
				/>
				<button type='submit' className={styles.signup_btn}>
					Login
				</button>
				<button type='submit' className={styles.signup_btn}>
					<Link className={styles.link_btn} to='/signup'>Sign-up</Link>
				</button>
			</form>
		</>
	);
};

export default Login;
