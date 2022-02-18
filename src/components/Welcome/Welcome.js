import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Welcome.module.css';

function Welcome(props) {
	return (
		<div className={styles.landing}>
			<h1 className={styles.landing_intro}>Welcome to</h1>
			<div className={styles.landing_phrase}>My Gifts</div>
			<Link to='/main'>
				<button className={styles.landing_btn}>Enter</button>
			</Link>
		</div>
	);
}

export default Welcome;
