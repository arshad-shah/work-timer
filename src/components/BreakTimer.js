import React, { useEffect } from 'react';
import { Box, Button, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

function BreakTimer({ shouldStartBreakTimer, start, stop }) {
	const [time, setTime] = useState(0);
	const [timer, setTimer] = useState(shouldStartBreakTimer);
	const [min, setMin] = useState(0);
	const [breakTime, setBreakTime] = useState(15);

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

	function breakDecrement() {
		if (breakTime > 1) {
			setBreakTime(breakTime => breakTime - 1);
		}
	}

	function breakIncrement() {
		setBreakTime(breakTime => breakTime + 1);
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
			<Typography variant="h1" color="primary">
				{min} : {time}
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
				<Typography
					sx={{
						marginRight: '1rem',
						padding: '0.5rem',
					}}
					variant="h3"
					color="primary"
				>
					{breakTime}
				</Typography>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						marginTop: '1rem',
					}}
				>
					<IconButton
						size="large"
						variant="outlined"
						color="secondary"
						onClick={breakIncrement}
					>
						<KeyboardArrowUpRoundedIcon fontSize="inherit" />
					</IconButton>
					<IconButton
						size="large"
						variant="outlined"
						color="secondary"
						onClick={breakDecrement}
					>
						<KeyboardArrowDownRoundedIcon fontSize="inherit" />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
}

export default BreakTimer;
