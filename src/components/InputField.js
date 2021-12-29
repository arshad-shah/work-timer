import { Alert, Box, ButtonGroup, IconButton, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

function InputField({ breakTime, setBreakTime }) {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (breakTime === 1) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [breakTime]);
	function breakDecrement() {
		if (breakTime === null || breakTime === '') {
			setBreakTime(1);
		} else {
			if (breakTime > 1) {
				setBreakTime(breakTime => breakTime - 1);
			}
		}
	}

	function breakIncrement() {
		if (breakTime === null || breakTime === '') {
			setBreakTime(1);
		} else {
			setBreakTime(breakTime => breakTime + 1);
		}
	}
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				alignContent: 'center',
				justifyContent: 'center',
				width: '100%',
			}}
		>
			<TextField
				sx={{
					margin: '20px',
				}}
				id="outlined-basic"
				label="Break Time"
				variant="outlined"
				type="number"
				InputProps={{
					endAdornment: (
						<ButtonGroup orientation="vertical">
							<IconButton
								sx={{
									margin: 0,
									padding: '5px',
								}}
								size="large"
								onClick={breakIncrement}
							>
								<KeyboardArrowUpRoundedIcon fontSize="inherit" />
							</IconButton>
							<IconButton
								sx={{
									margin: 0,
									padding: '5px',
								}}
								size="large"
								onClick={breakDecrement}
							>
								<KeyboardArrowDownRoundedIcon fontSize="inherit" />
							</IconButton>
						</ButtonGroup>
					),
				}}
				value={breakTime}
				onChange={e => setBreakTime(e.target.value)}
			/>
			{breakTime === 1 && open ? (
				<Alert
					sx={{
						margin: '10px',
					}}
					severity="warning"
					variant="filled"
				>
					The break time must be a number greater than 1.
				</Alert>
			) : null}
		</Box>
	);
}

export default InputField;
