import React, { useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const drawerWidth = 440

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }),

  position: 'relative'
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

const Schema = yup.object().shape({
  name: yup.string().required('name is required'),
  birthDate: yup.string().required('Date of registration is required'),
  password: yup.string().required('Time of registration is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  wallet: yup.string().required('wallet is required')
})

export default function DrawerForm({ opent, setOpenParent,EditData }) {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const {t} = useTranslation()
const dani=EditData
  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpenParent(false)
    opent = false
  }

  const defaultValues = {
    name: dani?.name ?? '',
    birthDate: 'daniel',
    password: 'daniel',
    phoneNumber: 'daniel',
    wallet: 'daniel',
    role:'coach'
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
    mode: 'onBlur'
  })

  const onSubmit =  data => {
if(!EditData)
{
  try {
    const response =  axios.post('http://192.168.2.138:8000/api/register', data)
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
else
{
}

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
        open={opent}
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
                  control={control}
                  defaultValue=''
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

              <Grid item xs={12}>
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
                  name='wallet'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label='WALLET'
                      variant='outlined'
                      error={!!errors.wallet}
                      helperText={errors.wallet ? errors.wallet.message : ''}
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
                <Button type='submit' variant='contained' color='primary'>
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
