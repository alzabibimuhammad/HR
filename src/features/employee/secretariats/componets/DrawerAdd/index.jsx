import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Avatar, Button, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Schema } from '../../validation'
import { yupResolver } from '@hookform/resolvers/yup'
import useGetAllUsers from 'src/features/employee/users/hooks/useGetAllUsers'
import { Stack } from '@mui/system'
import useAddSecretariats from '../../hooks/useAddSecretariats'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerFormAdd({ open, setOpenParent }) {
  const { mutate: AddSecretariats, isLoading } = useAddSecretariats()

  const { data } = useGetAllUsers()
  const [ users , setUsers] = useState(data?.data?.data)

  useEffect(()=>{
    setUsers(data?.data?.data)
  },[data])

  const [selectedUser, setSelectedUser] = useState()

  const theme = useTheme()
  const { t } = useTranslation()

  const handleDrawerClose = () => {
    setOpenParent(false)
    open = false
  }

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm({
    resolver: yupResolver(Schema),
    mode: 'onBlur'
  })

  const handleUserSelection = userId => {

    setSelectedUser(userId)
  }

  const onSubmit = data => {
    data.user_id = Number(selectedUser)
    AddSecretariats(data)
    handleDrawerClose()

  }

  const handelSearch = e => {
    const searchText = e.target.value

    let searchData;

    if(searchText){

      searchData = users?.filter((user)=>{return user?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())})
      setUsers(searchData)
    }
    else{
      setUsers(data?.data?.data)

    }

  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,

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
        <Box ml={2} pl={2} pr={2}>
          <Stack width={'100%'} direction={'column'}>
            <Typography ml={2}>{t('Employee')}</Typography>
            <TextField
              placeholder={t('Search')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <Box paddingRight={1}>
                    <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g id='zoom-split'>
                        <path
                          id='Combined Shape'
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                          fill='#8090A7'
                        />
                      </g>
                    </svg>
                  </Box>
                )
              }}
              onChange={handelSearch}
              sx={{
                paddingLeft: '8px',
                paddingRight: '8px',
                backgroundColor: '#F5F7FA',
                border: 'none',
                boxShadow: 'none'
              }}
              size='small'
            />
          </Stack>
              <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction={'column'} mt={5} spacing={5}>

            <RadioGroup value={selectedUser} onChange={event => handleUserSelection(event.target.value)}>
              {users?.map(user => (
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Stack direction={'row'} alignItems={'center'} spacing={1}>
                  <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + user?.user_info?.image}  />
                <Typography>{user.first_name} {user.last_name}</Typography>
                </Stack>
                  <FormControlLabel
                    key={user.id}
                    value={user.id}
                    control={<Radio />}

                  />
              </Stack>
              ))}
            </RadioGroup>

          </Stack>

                <Controller
                  name='received_date'
                  control={control}

                  defaultValue=''
                  render={({ field }) => (
                    <TextField
                      {...field}
                      sx={{ marginTop:5 }}
                      placeholder='2000-01-01'
                      fullWidth
                      label={t('Received Date')}
                      variant='outlined'
                      error={!!errors.received_date}
                      helperText={t(errors.received_date) ? t(errors.received_date.message) : ''}
                    />
                  )}
                />
                  <Controller
                    name='description'
                    defaultValue=''
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        sx={{ marginTop:5 }}
                        autoFocus
                        multiline
                        rows={7}
                        maxRows={4}
                        label={`${t('Description')}`}
                        variant='outlined'
                        error={!!errors.description}
                        helperText={t(errors.description) ? t(errors.description.message) : ''}
                      />
                    )}
                  />

                  <Button type='submit' sx={{marginTop:"12px"}} variant='contained' color='primary'>
                    {`${t('Submit')}`}
                  </Button>
            </form>
        </Box>
      </Drawer>
    </Box>
  )
}
