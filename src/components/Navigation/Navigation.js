import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import styles from './Navigation.module.css';

function Navigation(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
		<>
			<nav>
				<Link to='/'>
					<h1 className={styles.nav_welcome}>Hello User</h1>
				</Link>
				<div className={styles.menuNav}>
					<button className={styles.nav} onClick={handleToggle}>
						{navbarOpen ? (
							<GrClose style={{ width: '30px', height: '30px ' }} />
						) : (
							<GrMenu style={{ width: '30px', height: '30px' }} />
						)}
					</button>
					<ul
						style={{ display: navbarOpen ? 'flex' : 'none' }}
						className='menuNav'>
						<li>
							<Link className='navLink' to='/'>
								Home
							</Link>
						</li>
						<li>
							<Link className='navLink' to='/about'>
								About
							</Link>
						</li>
					</ul>
					<p>logged in as user</p>
				</div>
			</nav>
		</>
	);
}

export default Navigation;
