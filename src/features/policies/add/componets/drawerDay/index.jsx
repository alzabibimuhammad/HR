import React, { useState } from 'react';
import { Box, Stack, styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import { Button } from '@mui/material';

const drawerWidth = 470;

const CenteredDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    width: drawerWidth,
    margin: 'auto',
    top: '20%',
    borderRadius: '12px ',
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function DrawerForm({ open, setOpenParent ,setDays }) {
  const [selectedDays, setSelectedDays] = useState([]);

  const handleDrawerClose = () => {
    setOpenParent(false);
  };

  const handleDrawerDone = () => {
    console.log('Selected Days:', selectedDays);
    setDays(selectedDays)
    handleDrawerClose();
  };

  const handleButtonToggle = (day) => {
    setSelectedDays((prevSelectedDays) =>
      prevSelectedDays.includes(day)
        ? prevSelectedDays.filter((selectedDay) => selectedDay !== day)
        : [...prevSelectedDays, day]
    );
  };

  return (
    <>
      <CenteredDrawer
        anchor="top"
        open={open}
        variant="temporary"
        ModalProps={{
          keepMounted: true,
        }}
        onEscapeKeyDown={handleDrawerClose}
      >
        <DrawerHeader sx={{ color: '#8090A7', padding: '0px 0px 0px 10px' }}>
          Set Work Days
        </DrawerHeader>

        <Stack spacing={2} direction={'row'} justifyContent={'center'}>

          {['Sat', 'Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri'].map((day) => (
            <Button
              key={day}
              sx={{
                backgroundColor: selectedDays.includes(day) ? '#6AB2DF' : '#E9ECF3',
                color: selectedDays.includes(day) ? '#fff' : '#8090A7',

                ':hover': {
                  backgroundColor: selectedDays.includes(day) ? '#4F8CC9' : '#D0D7E3',
                  color: selectedDays.includes(day) ? '#fff' : '#576B7E',
                },
              }}
              onClick={() => handleButtonToggle(day)}
            >
              {day}
            </Button>
          ))}

        </Stack>

        <Stack direction={'column'} padding={'2px 0px 0px 10px'}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '7px', gap: '4px', marginTop: '8px' }}>
            <Button onClick={handleDrawerClose}>Cancel</Button>
            <Button
              sx={{
                backgroundColor: '#6AB2DF',
                color: '#fff',
                ':hover': { color: '#fff', backgroundColor: '#2A4759' },
              }}
              onClick={handleDrawerDone}
            >
              Set
            </Button>
          </Box>
        </Stack>
      </CenteredDrawer>
    </>
  );
}
