import React, { useState } from 'react';
import DateTime from './components/DateTime';
import MainTimer from './components/MainTimer';
import BreakTimer from './components/BreakTimer';
import { Box, Typography } from '@mui/material';
function App() {
	const [shouldStartBreakTimer, setShouldStartBreakTimer] = useState(false);
	function start() {
		setShouldStartBreakTimer(true);
	}

	function stop() {
		setShouldStartBreakTimer(false);
	}
	const colors = {
		green: '#00e676',
		red: '#ff1744',
	};
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
				backgroundColor: shouldStartBreakTimer
					? colors.red
					: colors.green,
				color: '#3b3b3b',
			}}
		>
			<Typography variant="h1" color="primary">
				Work Clock
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
