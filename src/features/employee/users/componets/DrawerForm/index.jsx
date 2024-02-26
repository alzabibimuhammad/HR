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
import useEditEmployee from '../../hooks/useEditEmployee'
import useMediaQuery from '@mui/material/useMediaQuery';

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
const {mutate:EditEmployee,isloading}=useEditEmployee()

const handleDrawerClose = () => {
    dispatch(getContractsData())
    setOpenParent(false)
    open = false
    reset();
  }

  const defaultValues = {
    first_name: Data?.first_name,
    last_name: Data?.last_name,
    middle_name:Data?.middle_name,
    team: Data?.specialization,
    email:Data?.email,
    role:Data?.role
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
        EditEmployee(EditData)
      }
      handleDrawerClose()
      reset();

  }

  return (
    <Box sx={{ display: 'flex', }}>

      <Drawer

        sx={{

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
            overflowX: 'hidden'
          },
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
                  name='first_name'
                  defaultValue=''
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                       autoFocus
                      label={t("First Name")}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='middle_name'
                  defaultValue=''
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                       autoFocus
                      label={t("Midle Name")}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              </Grid>
               <Grid item xs={12}>
                <Controller
                  name='last_name'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('Last name')}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              </Grid>


              <Grid item xs={12}>
                <Controller
                  name='team'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('Team')}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='role'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('Role')}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
                    />
                  )}
                />
                              </Grid>
                              <Grid item xs={12}>
                <Controller
                  name='email'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('Email')}
                      variant='outlined'
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ''}
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
