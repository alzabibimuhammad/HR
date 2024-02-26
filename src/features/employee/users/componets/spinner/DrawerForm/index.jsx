import React, { useEffect, useState } from 'react';
import { Box, Stack, styled } from '@mui/system';
import Drawer from '@mui/material/Drawer';
import { Avatar, Button, Typography } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import useGetAllUsers from '../../../hooks/useGetAllUsers';
import useUpdateMvp from '../../../hooks/useUpdateMvp';
import { useTranslation } from 'react-i18next';

const drawerWidth = 440;

const CenteredDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,


  '& .MuiDrawer-paper': {
    width: drawerWidth,
    margin: 'auto',
    top: '20%',
    borderRadius:"12px "
  },
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',

}));

export default function DrawerForm({ open, setOpenParent }) {
  const {data} = useGetAllUsers()


  const [selectedId, setSelectedId] = useState(null);

  const {t} = useTranslation()

  const { mutate: UpdateMvp, isLoading } = useUpdateMvp();


  const handleDrawerClose = () => {
    setOpenParent(false);
  };

  const handleDrawerDone = _=>{
    UpdateMvp(selectedId)

    handleDrawerClose()
  }

  const handleRadioChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <>
    {data?
    <CenteredDrawer
      anchor="top"
      open={open}
      variant="temporary"
      ModalProps={{
        keepMounted: true,
      }}
        onEscapeKeyDown={handleDrawerClose}

      >
      <DrawerHeader sx={{color:'#8090A7',padding:'0px 0px 0px 10px' }} >{t('Select the new employee of the month')}</DrawerHeader>

    <Stack  height={ '270px' }   direction={'column'} padding={'2px 0px 0px 10px'}>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={handleRadioChange}

          >
             <Stack spacing={3} >
             {data.data?.data?.map((element, index) => (
                <Box key={index}>
                    <FormControlLabel
                        value={element.id}
                        control={<Radio />}
                        label={
                            <Stack direction={'row'} spacing={2} alignItems={'center'}>
                                <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + element?.user_info?.image}  />
                                <Typography>
                                    {element.first_name}
                                </Typography>
                                <Typography>
                                {element.last_name}
                                </Typography>
                            </Stack>
                        }
                    />
                </Box>
            ))}


             </Stack>
          </RadioGroup>
      </FormControl>



    <Box sx={{ display:"flex",justifyContent:"flex-end",padding:"7px",gap:"4px",marginTop:"8px" }}>
    <Button  onClick={handleDrawerClose} >{t('Cancel')}</Button>
        <Button sx={{backgroundColor: '#6AB2DF',color: '#fff',':hover': { color: '#fff', backgroundColor: '#2A4759' }, }} onClick={handleDrawerDone}>{t('Done')}</Button>
    </Box>
    </Stack>

    </CenteredDrawer>
            : null }
            </>
  );
}
