import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
	return (
		<>
			<form className={styles.container}>
				<h1 className={styles.signup_title}>Sign-In</h1>
				<label>Email:</label>
				<input
					type='text'
					placeholder='Enter Email'
					className={styles.signup_text}
				/>
				<label>Password:</label>
				<input
					type='text'
					placeholder='Enter Password'
					className={styles.signup_text}
				/>
				<button type='submit' className={styles.signup_btn}>
					Login
				</button>
				<button type='submit' className={styles.signup_btn}>
					<Link to='/signup'>sign up</Link>
				</button>
			</form>
		</>
	);
}

export default Login;
