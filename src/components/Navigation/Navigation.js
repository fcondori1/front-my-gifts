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
				<div className={styles.menuNav}>
					<button className={styles.navBtn} onClick={handleToggle}>
						{navbarOpen ? (
							<GrClose style={{ width: '100%', height: '30px ' }} />
						) : (
							<GrMenu style={{ width: '30px', height: '30px' }} />
						)}
					</button>
					<ul
						style={{ display: navbarOpen ? 'flex' : 'none' }}
						className='menuNav'>
						<li className={styles.navList}>
							<Link className='navLink' to='/main'>
								Home
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className='navLink' to='/about'>
								About
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className='navLink' to='/login'>
								Login
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className='navLink' to='/signup'>
								Sign-up
							</Link>
						</li>
					</ul>
					{/* <p>logged in as user</p> */}
				</div>
				<Link to='/main'>
					<h1 className={styles.nav_welcome}>Hello User</h1>
				</Link>
			</nav>
		</>
	);
}

export default Navigation;
