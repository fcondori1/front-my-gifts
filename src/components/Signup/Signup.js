import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup(props) {
	return (
		<>
			<form className={styles.container}>
				<h1>Sign-Up</h1>
				<label>Email:</label>
				<input type='text' placeholder='Enter Email' />
				<label>Username:</label>
				<input type='text' placeholder='Enter Username' />
				<label>Password:</label>
				<input type='text' placeholder='Enter Password' />
				<label>Re-enter Password:</label>
				<input type='text' placeholder='Enter Password' />
				<button type='submit'>Sign-up</button>
			</form>
		</>
	);
}

export default Signup;
