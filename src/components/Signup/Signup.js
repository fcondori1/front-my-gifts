import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup(props) {
	return (
		<>
			<form className={styles.container}>
				<h1>Sign-Up</h1>
				<label>Email:</label>
				<input
					type='text'
					placeholder='Enter Email'
					className={styles.signup_text}
				/>
				<label>Username:</label>
				<input
					type='text'
					placeholder='Enter Username'
					className={styles.signup_text}
				/>
				<label>Password:</label>
				<input
					type='text'
					placeholder='Enter Password'
					className={styles.signup_text}
				/>
				<label>Re-enter Password:</label>
				<input
					type='text'
					placeholder='Enter Password'
					className={styles.signup_text}
				/>
				<button type='submit' className={styles.signup_btn}>
					Sign-up
				</button>
			</form>
		</>
	);
}

export default Signup;
