import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../../apiConfig';
import styles from './Profiles.module.css';

const Profiles = ({ loggedIn }) => {
	const [profiles, setProfiles] = useState([]);

	const getProfilesIndex = async () => {
		try {
			const response = await fetch(API_URL + 'gifts/');
			const data = await response.json();
			console.log(data);
			setProfiles(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfilesIndex();
	}, []);

	if (!profiles.length) {
		return null;
	}

	return (
		<>
			<h2 className={styles.title}>Profiles:</h2>
			<div>
				<ul className={styles.profiles}>
					{profiles.map((profile) => {
						return (
                            <li className={styles.profile}>
                                <Link className={styles.links} to={`/profiles/${profile.owner}`}>
								<div>
									<h3 className={styles.profile_name}>{profile.owner}</h3>
								</div>
                            </Link>
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default Profiles;
