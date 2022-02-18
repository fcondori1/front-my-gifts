import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import API_URL from '../../apiConfig';
import styles from './GiftsCreate.module.css';

const GiftsCreate = () => {
	const [profiles, setProfiles] = useState([]);
	const [info, setInfo] = useState([]);

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

	const getInfoIndex = async () => {
		try {
			const response = await fetch(API_URL + 'informations/');
			const data = await response.json();
			console.log(data);
			setInfo(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProfilesIndex();
		getInfoIndex();
	}, []);

	if (!profiles.length) {
		return null;
	}

	if (!info.length) {
		return null;
	}

	return (
		<div className={styles.block}>
			<h2>Stuff I have eyes on:</h2>
			<ul className={styles.profiles}>
				{profiles.map((profile) => {
					return (
						<li className={styles.profile}>
							<div className={styles.img_block}>
								<h3 className={styles.profile_name}>{profile.name}</h3>
								<Image
									rounded
									fluid
									src={profile.photo}
									className={styles.image}
								/>
							</div>
						</li>
					);
				})}
			</ul>
			{/* <h2>Brands I like:</h2> */}
		</div>
	);
};

export default GiftsCreate;
