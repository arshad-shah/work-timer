import { Box, Typography } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

function DateTime() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box>
      <Typography variant="h4" >{date.toLocaleDateString()} - {date.toLocaleTimeString()}</Typography>
    </Box>
  );
}

export default DateTime;
