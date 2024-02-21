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
import { useTranslation } from 'react-i18next'
import useUpdateSecretariats from '../../hooks/useUpdateSecretariats'
import { Schema } from '../../validation'
import { yupResolver } from '@hookform/resolvers/yup'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerForm({ open, setOpenParent, Data }) {

 const { mutate: UpdateSecretariats, isLoading } = useUpdateSecretariats();

  const theme = useTheme()
  const { t } = useTranslation()

  const handleDrawerClose = () => {
    setOpenParent(false)
    open = false
    reset()
  }

  const defaultValues = {
    description: Data?.description,
    received_date: Data?.date
  }

  useEffect(() => {
    reset(defaultValues);

  }, [Data]);


  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm({
    defaultValues,
    resolver: yupResolver(Schema),
    mode: 'onBlur'
  })


  const onSubmit = data => {

    UpdateSecretariats({id:Data?.id,data:data})

    handleDrawerClose()
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: { xl:drawerWidth,md:drawerWidth , sm:drawerWidth, xs: '90%' },

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: {sm:drawerWidth}
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
                  name='description'
                  defaultValue=''
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      autoFocus
                      multiline
                      rows={7}
                      maxRows={4}
                      label={`${t('Description')}`}
                      variant='outlined'
                      error={!!errors.description}
                      helperText={errors.description ? errors.description.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name='received_date'
                  control={control}
                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={t('Received Date')}
                      variant='outlined'
                      error={!!errors.received_date}
                      helperText={errors.received_date ? errors.received_date.message : ''}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type='submit' variant='contained' color='primary'>
                  {`${t('Submit')}`}
                </Button>
              </Grid>
            </Grid>
          </form>
        </List>
      </Drawer>
    </Box>
  )
}
