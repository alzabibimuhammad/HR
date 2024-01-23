import React, { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, CardHeader, Input, TextField, Typography } from '@mui/material'
import Members from './members'
import { Stack } from '@mui/system'
import TeamLeaders from './teamLeaders'
// import { Button, TextField } from '@mui/material'
// import Grid from '@mui/material/Grid'
// import { useForm, Controller } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { useTranslation } from 'react-i18next'
// import { getContractsData,addContract, EditContract } from 'src/pages/contracts/store'
// import { useDispatch  } from 'react-redux'
// import { Schema } from '../../validation'

const drawerWidth = 440



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))


export default function DrawerForm({ open, setOpenParent,Data }) {
  const theme = useTheme()
//   const {t} = useTranslation()
// const dispatch=useDispatch()
//   console.log(Data);

  const handleDrawerClose = () => {
    // dispatch(getContractsData())
    setOpenParent(false)
    open = false
  }

//   const defaultValues = {
//     name: Data?.name,
//     birthDate: Data?.birthDate,
//     password: Data?.password,
//     phoneNumber: Data?.phoneNumber,
//     finance: '',
//     role:'coach'
//   }

//   useEffect(() => {
//     reset(defaultValues);

//   }, [Data]);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors ,isDirty },
//     reset
//   } = useForm({
//     resolver: yupResolver(Schema),
//     defaultValues,
//     mode: 'onBlur'
//   })

//   const onSubmit =   data => {
//       if(!Data)
//       {
//         dispatch(addContract(data));

//                }
//       else
//       {
//         const EditData = {
//           data,
//           Data
//         };
//         dispatch(EditContract(EditData));
//       }
//       handleDrawerClose()
//       reset();

//   }

  return (

      <Drawer
        backgroundColor='#fff'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          },
          overflow:'visible',
          borderRadius:'15px',
        }}
        anchor='right'
        open={open}
        variant='temporary'
        ModalProps={{
          keepMounted: true
        }}

      >
        {/* <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader> */}
        <Stack spacing={3} >

          <Box  sx={{width:'100%',backgroundColor:'#DCE1E6' , fontSize:'20px' ,gap: '10px',padding:'15px',borderRadius:'10px',fontFamily:'Montserrat'  }}>Add team</Box>
          <Box sx={{ padding:'12px' }} >
              <Typography sx={{ fontFamily:'Montserrat' }}>
                Name
              </Typography>

              <TextField
                fullWidth
                style={{ height: '10px' }}
                placeholder="Team Name"
                size='small'
              />


          </Box>

          <Box sx={{ padding:'12px' }} >
            <Members/>
          </Box>

          <Box sx={{ padding:'12px' }} >
            <TeamLeaders/>
          </Box>

          <Box sx={{ display:'flex', width:'100%',padding:'10px'}} >
            <Stack sx={{ marginLeft:'50%' }} direction={'row'} spacing={2} >
              <Button onClick={handleDrawerClose} sx={{ backgroundColor:'#DCE1E6',color:'#8090A7',borderRadius:'4px', padding: '8px 24px' }}>Cancle</Button>
              <Button onClick={handleDrawerClose} sx={{ backgroundColor:'#6AB2DF',color:'#fff' ,borderRadius:'4px', padding: '8px 24px'}} >Add</Button>
              </Stack>
          </Box>

        </Stack>

      </Drawer>
  )
}
