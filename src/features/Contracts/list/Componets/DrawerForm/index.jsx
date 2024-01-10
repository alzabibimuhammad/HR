import React, { useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { getContractsData,addContract, EditContract } from 'src/pages/contracts/store'
import { useDispatch  } from 'react-redux'
import { Schema } from '../../validation'

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
  console.log(Data);

  const handleDrawerClose = () => {
    dispatch(getContractsData())
    setOpenParent(false)
    open = false
    reset();
  }

  const defaultValues = {
    name: Data?.name,
    birthDate: Data?.birthDate,
    password: Data?.password,
    phoneNumber: Data?.phoneNumber,
    finance: '',
    role:'coach'
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

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          }
        }}
        anchor='right'
        open={open}
        variant='temporary'
        ModalProps={{
          keepMounted: true
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <List>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container sx={{ padding: '12px' }} spacing={3}>
              <Grid item xs={12}>
                <Controller
                  name='name'
                  defaultValue=''
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                       autoFocus
                      label={`${t("COACH NAME")}`}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              </Grid>
{!Data ?               <Grid item xs={12}>
                <Controller
                  name='password'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='PASSWORD'
                      variant='outlined'
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ''}
                    />
                  )}
                />
              </Grid>
:null

}

              <Grid item xs={12}>
                <Controller
                  name='phoneNumber'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='PHONE NUMBER'
                      variant='outlined'
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='finance'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='finance'
                      variant='outlined'
                      error={!!errors.finance}
                      helperText={errors.finance ? errors.finance.message : ''}
                    />
                  )}
                />
                              </Grid>
                              <Grid item xs={12}>
                <Controller
                  name='birthDate'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={`${t("BIRTH DATE")}`}
                      variant='outlined'
                      error={!!errors.birthDate}
                      helperText={errors.birthDate ? errors.birthDate.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Button disabled={!isDirty} type='submit' variant='contained' color='primary'>
                  {`${t("Submit")}`}
                </Button>
              </Grid>
            </Grid>
          </form>
        </List>
      </Drawer>
    </Box>
  )
}
