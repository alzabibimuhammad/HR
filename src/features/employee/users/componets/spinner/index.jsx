import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';
import { Stack } from '@mui/system';

const FallbackSpinner = ({ total, active }) => {
  const theme = useTheme();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const diff = (active / total) * 100;
    setProgress(diff);

  }, [total, active]);

  return (
    <Stack>
      <LinearProgress variant="determinate" value={progress} />
    </Stack>
  );
}

export default FallbackSpinner;
