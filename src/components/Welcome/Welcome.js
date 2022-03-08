import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

function Welcome(props) {
	return (
		<div className='landing'>
			<h1 className='landing_intro'>Welcome to</h1>
			<div className='landing_phrase animate__animated animate__pulse animate__infinite'>
				My Gifts
			</div>
			<Link to='/main'>
				<button className='landing_btn animate__animated animate__fadeInUpBig'>
					Enter
				</button>
			</Link>
		</div>
	);
}

export default Welcome;
