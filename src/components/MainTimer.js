/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function MainTimer({ shouldStartBreakTimer, start }) {
	const [time, setTime] = useState(0);
	const [min, setMin] = useState(0);
	const [hour, setHour] = useState(0);
	const [startStopCalled, setStartStopCalled] = useState(false);
	const [prevHour, setPrevHour] = useState(0);
	const [timer, setTimer] = useState(false);
	useEffect(() => {
		if (timer) {
			const interval = setInterval(() => {
				setTime(time => time + 1);
			}, 1000);

			return () => {
				clearInterval(interval);
			};
		}
	}, [timer]);

	useEffect(() => {
		if (shouldStartBreakTimer && startStopCalled) {
			setTimer(false);
		} else {
			if (!shouldStartBreakTimer && startStopCalled) setTimer(true);
		}
	}, [shouldStartBreakTimer]);

	useEffect(() => {
		if (time === 60) {
			setTime(0);
			setMin(min => min + 1);
		}
	}, [time]);

	useEffect(() => {
		if (min === 60) {
			setMin(0);
			setPrevHour(hour);
			setHour(hour => hour + 1);
		}
	}, [min]);

	useEffect(() => {
		if (hour > prevHour) {
			start();
			setTimer(false);
		}
	}, [hour]);

	function startStop() {
		setStartStopCalled(true);
		if (!timer) {
			setTimer(true);
		} else {
			setTimer(false);
		}
	}

	function reset() {
		setTimer(false);
		setTime(0);
		setMin(0);
		setHour(0);
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography variant="h1">
				{hour} : {min} : {time}
			</Typography>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
					marginTop: '1rem',
				}}
			>
				<Button variant="contained" color="primary" onClick={startStop}>
					{timer ? 'stop' : 'start'}
				</Button>
				<Button variant="contained" color="secondary" onClick={reset}>
					reset
				</Button>
			</Box>
		</Box>
	);
}

export default MainTimer;
