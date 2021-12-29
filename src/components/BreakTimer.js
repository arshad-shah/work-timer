import React, { useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import InputField from './InputField';

function BreakTimer({ shouldStartBreakTimer, breakTime, start, stop }) {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(shouldStartBreakTimer);
	const [min, setMin] = useState(0);

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
		if (time === 60) {
			setTime(0);
			setMin(min => min + 1);
		}
	}, [time]);

	useEffect(() => {
		if (min === breakTime) {
			setTime(0);
			setMin(breakTime);
			stop();
		}
	}, [time]);

	function startStop() {
		if (!timer) {
			setTimer(true);
			start();
		} else {
			setTimer(false);
		}
	}

	function reset() {
		setTimer(false);
		setTime(0);
		setMin(0);
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
				{min} : {time}
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					width: '100%',
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

export default BreakTimer;
