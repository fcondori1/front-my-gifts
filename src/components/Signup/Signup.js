import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../apiConfig';
import styles from './Signup.module.css';

const Signup = () => {
	const initialFormData = {
		email: '',
		username: '',
		password: '',
		re_password: '',
	};

	const navigate = useNavigate();
	const [formData, setFormData] = useState(initialFormData);
	const [error, setError] = useState(false);
	const [success, setSuccess] = useState(false);
	const handleChange = (event) => {
		setFormData((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};

	const _handleSignup = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const response = await fetch(API_URL + 'users/', {
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			console.log(response);
			if (response.status === 201) {
				// 201 status === success
				setSuccess(true);
				setTimeout(() => {
					navigate('/login');
				}, 5000);
			}
		} catch (error) {}
	};

	const handlePasswordMatch = (event) => {
		if (formData.password !== formData.re_password) {
			setError(true);
		} else {
			setError(false);
		}
	};

	return (
		<>
			<form onSubmit={_handleSignup} className={styles.container}>
				<h1 className={styles.sign}>Sign-Up</h1>
				<h4>Let's create your account!</h4>
				<label className={styles.label}>Email:</label>
				<input
					required
					autoFocus
					type='email'
					value={formData.email}
					name='email'
					onChange={handleChange}
					placeholder='Enter Email'
					className={styles.signup_text}
				/>
				<label className={styles.label}>Username:</label>
				<input
					required
					autoFocus
					type='text'
					name='username'
					value={formData.username}
					onChange={handleChange}
					placeholder='Enter Username'
					className={styles.signup_text}
				/>
				<label className={styles.label}>Password:</label>
				<input
					required
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					placeholder='Enter Password'
					className={styles.signup_text}
				/>
				<label className={styles.label}>Confirm Password:</label>
				<input
					required
					type='password'
					name='re_password'
					value={formData.re_password}
					onChange={handleChange}
					onBlur={handlePasswordMatch}
					placeholder='Confirm Password'
					className={styles.signup_text}
				/>
				<button type='submit' className={styles.signup_btn}>
					Sign-up
				</button>
			</form>
		</>
	);
};

export default Signup;
