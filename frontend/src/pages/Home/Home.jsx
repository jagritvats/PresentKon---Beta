import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styles from './Home.module.css';
import MainArt from '../../assets/MainArt.svg';
import Face from '../../assets/face.png';
import Student from '../../assets/student.png';
import Attendance from '../../assets/attendance.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Box className={styles.home}>
			<Box className={styles.home_top}>
				<Box className={styles.home_sub}>
					<Typography
						variant="h4"
						component="h4"
						className={styles.home_check}
					>
						Check who's Present
					</Typography>
					<Typography
						variant="h5"
						component="h5"
						className={styles.home_we}
					>
						We provide Attendance services using facial recognition
					</Typography>

					<Link to="/dashboard">
						<Button
							variant="contained"
							type="submit"
							className={styles.home_button}
						>
							DASHBOARD
						</Button>
					</Link>
				</Box>
				<Box className={styles.mainart}>
					<img
						className={styles.home_img}
						src={MainArt}
						alt="register and profile"
					/>
				</Box>
			</Box>
			<Box className={styles.home_bottom}>
				<Box>
					<img src={Face} alt="Face image" />
					<Typography variant="h5" component="h5">
						Facial Recognition
					</Typography>
					<Typography variant="h6" component="h6">
						Recognise students faces from class photo.
					</Typography>
				</Box>
				<Box>
					<img src={Student} alt="student image" />
					<Typography variant="h5" component="h5">
						Student Management
					</Typography>
					<Typography variant="h6" component="h6">
						Record and organise your students in batches.
					</Typography>
				</Box>
				<Box>
					<img src={Attendance} alt="attendacne image" />
					<Typography variant="h5" component="h5">
						Attendance Record
					</Typography>
					<Typography variant="h6" component="h6">
						Attendance record for batch is saved.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
