import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import 'animate.css';
import LinearProgress from '@mui/material/LinearProgress';
import React from 'react';

const FallbackSpinner = ({ sx }) => {
  const theme = useTheme()

  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;

        return Math.min(oldProgress + diff, 100);
      });
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);



  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >

      <Box  >
          <div className="animate__animated animate__backInDown" >
          <img width={200} height={200}  src='/images/policesIcon/pageLogo/logo.svg'/>

              </div>
        </Box>

       <Box sx={{ width: '20%' }}>
      <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Box>
  )
}


export default FallbackSpinner
