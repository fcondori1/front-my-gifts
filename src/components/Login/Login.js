import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login(props) {
    return (
			<>
				<form className={styles.container}>
					<h1>Sign-In</h1>
					<label>Email:</label>
					<input type='text' placeholder='Enter Email' />
					<label>Password:</label>
					<input type='text' placeholder='Enter Password' />
					<button type='submit'>Login</button>
					<button type='submit'>
						<Link to='/signup'>sign up</Link>
					</button>
				</form>
			</>
		);
}

export default Login;