import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(props) {
	return (
		<div>
			Hello welcome to myGifts
			<Link to='/main'>
				<button>click to enter</button>
			</Link>
		</div>
	);
}

export default Welcome;
