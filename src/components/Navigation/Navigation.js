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
				<h1 className={styles.nav_welcome}>
					<Link className={styles.head} to='/main'>Hello User</Link>
				</h1>
				<div className={styles.menuNav}>
					<button className={styles.navBtn} onClick={handleToggle}>
						{navbarOpen ? (
							<GrClose style={{ width: '30px', height: '30px ' }} />
						) : (
							<GrMenu style={{ width: '30', height: '30px' }} />
						)}
					</button>
					<ul
						style={{ display: navbarOpen ? 'flex' : 'none' }}
						className='menu_Nav'>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/main'>
								Home
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/login'>
								Login
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/signup'>
								Sign-up
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/profiles'>
								Profiles
							</Link>
						</li>
						<li className={styles.navList}>
							<Link className={styles.navLink} to='/about'>
								About
							</Link>
						</li>
					</ul>
					{/* <p>logged in as user</p> */}
				</div>
			</nav>
		</>
	);
}

export default Navigation;
