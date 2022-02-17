import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

function Signup(props) {
	return (
		<>
			<form className={styles.container}>
				<h1>Sign-In</h1>
				<label>Username:</label>
				<input type='text' placeholder='Enter Username' />
				<label>Email:</label>
				<input type='text' placeholder='Enter Email' />
				<label>Password:</label>
				<input type='text' placeholder='Enter Password' />
				<label>Re-enter Password:</label>
				<input type='text' placeholder='Enter Password' />
				<button type='submit'>Login</button>
				<button type='submit'>
					<Link to='/signup'>sign up</Link>
				</button>
			</form>
		</>
	);
}

export default Signup;
