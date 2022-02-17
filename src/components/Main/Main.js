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
					<div>Hello</div>
					<div>image</div>
				</div>
				<div className={styles.cal_obj}>
					<p>
						Today's date is
						<b>{moment(date).format(' MMM D YYYY')}</b>
					</p>
					<Calendar onChange={onChange} value={date} />
				</div>
			</div>
		</>
	);
}

export default Main;
