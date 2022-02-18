import { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import styles from './Main.module.css';

function Main(props) {
	const [date, setDate] = useState(new Date());

	const onChange = (date) => {
		setDate(date);
	};
	

	return (
		<>
			<div className={styles.cal}>
					<div>
						<p className={styles.para}>Welcome to the gift app! Create your own profile to keep track of cool things you see online and get friends and family off your back when they ask what you want.</p>
					</div>
					{/* <div>image</div> */}
				<div className={styles.cal_obj}>
					<p>
						Selected date:
						<b>{moment(date).format(' MMM D YYYY')}</b>
					</p>
					<Calendar className={styles.calendar} onChange={onChange} value={date} />
				</div>
				<p></p>
			</div>
		</>
	);
}

export default Main;
