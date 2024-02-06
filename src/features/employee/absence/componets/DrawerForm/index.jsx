import React, { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, MenuItem, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { getContractsData,addContract, EditContract } from 'src/pages/contracts/store'
import { useDispatch  } from 'react-redux'
import { Schema } from '../../validation'
import { Stack } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

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
  const {t} = useTranslation()
const dispatch=useDispatch()

  const handleDrawerClose = () => {
    dispatch(getContractsData())
    setOpenParent(false)
    open = false
    reset();
  }

  const defaultValues = {
    type:''
  }

  useEffect(() => {
    reset(defaultValues);

  }, [Data]);

  const {
    control,
    handleSubmit,
    formState: { errors ,isDirty },
    reset
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
    mode: 'onBlur'
  })

  const onSubmit =   data => {
      if(!Data)
      {
        dispatch(addContract(data));

               }
      else
      {
        const EditData = {
          data,
          Data
        };
        dispatch(EditContract(EditData));
      }
      handleDrawerClose()
      reset();

  }

  const handleDeleteAbsence=user_id=>{
  }


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


    <Box  sx={{width:'100%',backgroundColor:'#DCE1E6' , fontSize:'20px' ,gap: '10px',padding:'15px',borderRadius:'10px',fontFamily:'Montserrat'  }}>Add team</Box>
    <Stack marginLeft={{ sm:'3%' }} marginTop={{sm:'2%'}}direction={{ sm:'column' }}spacing={3} >
        <Typography >UnJustified</Typography>
          <Box width={{ sm:'94%' }} >
          <TextField
          fullWidth
          type='date'
          size='small'
          />
          </Box>
    </Stack>

    <Stack direction={'column'}   marginTop={'2%'} style={{ overflowY: 'scroll', maxHeight: '300px', padding: '15px' }}>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>

      </Stack>
    <Stack marginLeft={{ sm:'3%' }} marginTop={{sm:'2%'}}direction={{ sm:'column' }}spacing={3} >
        <Typography >Justified</Typography>
          <Box width={{ sm:'94%' }} >
          <TextField
          fullWidth
          type='date'
          size='small'
          />
          </Box>
    </Stack>
      <Stack direction={'column'}   marginTop={'2%'} style={{ overflowY: 'scroll', maxHeight: '300px', padding: '15px' }}>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>

        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>
        <Stack direction={'row'} width={ '100%'} height={'49px'} justifyContent={'space-between'} alignItems={'center'}>
          <Typography marginLeft={'3%'} >
            1/2/2024
          </Typography>
          < CloseIcon sx={{ color:'#df2e38' }} onClick={()=>handleDeleteAbsence('hi')}  />
        </Stack>


        </Stack>


        <Box width={"90%"} marginLeft={'3%'}>
        <Controller
            name='type'
            control={control}

            render={({ field }) => (
              <TextField

                select
                {...field}
                defaultValue=''
                variant="outlined"
                fullWidth
                size='small'
              >
                <MenuItem value='' >Type</MenuItem>
                <MenuItem value='justified' >Justified</MenuItem>
                <MenuItem value='unjustified' >UnJustified</MenuItem>
              </TextField>
            )}
          />
          <Controller
            name='date'
            control={control}

            render={({ field }) => (
              <TextField
                type='date'
                {...field}
                variant="outlined"
                fullWidth
                size='small'
              />
            )}
          />
          </Box>
        <Stack marginLeft={{ sm:'3%'  }}>
          <Box display={'flex'}> <AddIcon sx={{ color:'#6AB2DF' }} />  <Typography sx={{ color:'#6AB2DF' }}>Add Absence</Typography> </Box>
        </Stack>


      <Box sx={{ display:'flex', width:'100%',padding:'10px'}} >
          <Stack sx={{ marginLeft:'50%' }} direction={'row'} spacing={2} >
            <Button onClick={handleDrawerClose} sx={{ backgroundColor:'#DCE1E6',color:'#8090A7',borderRadius:'4px', padding: '8px 24px' }}>Cancle</Button>
            <Button /*onClick={handlerSendData}*/ sx={{ backgroundColor:'#6AB2DF',color:'#fff' ,borderRadius:'4px', padding: '8px 24px' ,   '&:hover': {
              backgroundColor: '#3F4458', },}} >Add</Button>
          </Stack>

      </Box>

      </Drawer>
  )
}
