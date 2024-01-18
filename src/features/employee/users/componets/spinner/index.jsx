
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

const FallbackSpinner = ({ total, active }) => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = (active / total) * 100; // Calculate the progress based on total and active
        return diff;
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, [total, active]);

  return (
    <Stack >
      <LinearProgress variant="determinate" value={progress} />

    </Stack>
  );
}

export default FallbackSpinner;
