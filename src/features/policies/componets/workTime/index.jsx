import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, TextField, Typography } from '@mui/material';
import DrawerForm from '../drawerDay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styled from 'styled-components';

export default function WorkTime() {
  const [openParent, setOpenParent] = React.useState(false);
  const [days, setDays] = React.useState([]);

  const handleDayPicker = (date) => {
    setOpenParent(true);
  };
  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))


  return (
    <Card>
      <CardContent>

        <Stack spacing={2} direction={'column'}>
          <Typography fontSize={'20px'}>Work Time</Typography>
          <Typo style={{ marginTop:'24px' }} >Work days</Typo>

            <Button
              onClick={handleDayPicker}
              sx={{
                justifyContent: 'start',
                border:'1px solid black',
                height: '2.5em',
                '&:hover': {
                  backgroundColor: '#fff',
                  color:'none'
                },
              }}
              fullWidth
            >
            {days.length ? (
                days.map((day) => (
                  <Chip
                    key={day}
                    label={day}
                    sx={{
                      marginLeft:'2px',
                      backgroundColor: '#6AB2DF',
                      color: '#fff',
                      fontSize: '13px',
                      width: 'auto',
                    }}
                  />
                ))
              ) :

            <Stack direction={'row'}  width={'100%'} justifyContent={'space-between'} >
              <Box>
              <Typo>Work days</Typo>
              </Box>
              <Box>
              <CalendarMonthIcon sx={{ color:'#8090A7' }} />
              </Box>
            </Stack>}
          </Button>


          <Typo>Start time</Typo>
            <TextField
              type='time'
              placeholder="Start time"
              fullWidth
              size='small'
            />
            <Typo>Cut-off time</Typo>
            <TextField
              type='time'
              placeholder="Cut-off time"
              fullWidth
              size='small'
            />

            <Typo>End time</Typo>
            <TextField
              type='time'
              placeholder="End time"
              fullWidth
              size='small'
            />


        </Stack>

        <DrawerForm  open={openParent} setOpenParent={setOpenParent} setDays={setDays} />
      </CardContent>
    </Card>
  );
}
