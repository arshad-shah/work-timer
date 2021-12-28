import React, { useState } from 'react';
import DateTime from './components/DateTime';
import MainTimer from './components/MainTimer';
import BreakTimer from './components/BreakTimer';
import { Box, Switch, Typography } from '@mui/material';
function App() {
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
				backgroundColor: '#fafafa',
			}}
		>
			<Typography variant="h1" color="primary">
				Pomodoro Clock
			</Typography>
			<DateTime />
			<MainTimer
				shouldStartBreakTimer={shouldStartBreakTimer}
				start={start}
			/>
			{shouldStartBreakTimer && (
				<BreakTimer
					shouldStartBreakTimer={shouldStartBreakTimer}
					start={start}
					stop={stop}
				/>
			)}
		</Box>
	);
}

export default App;
