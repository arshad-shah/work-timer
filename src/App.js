import React, { useState } from 'react';
import DateTime from './components/DateTime';
import MainTimer from './components/MainTimer';
import BreakTimer from './components/BreakTimer';
import { Alert, Box, Typography } from '@mui/material';
import InputField from './components/InputField';
function App() {
	const [breakTime, setBreakTime] = useState(15);
	const [shouldStartBreakTimer, setShouldStartBreakTimer] = useState(false);
	function start() {
		setShouldStartBreakTimer(true);
	}

	function stop() {
		setShouldStartBreakTimer(false);
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
				backgroundColor: shouldStartBreakTimer ? '#E53935' : '#24BD24',
				color: shouldStartBreakTimer ? '#ffffff' : '#000000',
			}}
		>
			<Typography variant="h1">
				{shouldStartBreakTimer ? 'Break' : 'Work'}
			</Typography>
			<DateTime />
			{!shouldStartBreakTimer ? (
				<MainTimer
					shouldStartBreakTimer={shouldStartBreakTimer}
					start={start}
				/>
			) : (
				<BreakTimer
					shouldStartBreakTimer={shouldStartBreakTimer}
					breakTime={breakTime}
					start={start}
					stop={stop}
				/>
			)}
			{shouldStartBreakTimer && (
				<Alert
					sx={{
						margin: '1rem',
					}}
					severity="info"
					variant="filled"
				>
					<Typography>
						You have completed your work session. Take a break!
					</Typography>
				</Alert>
			)}
			<InputField breakTime={breakTime} setBreakTime={setBreakTime} />
		</Box>
	);
}

export default App;
