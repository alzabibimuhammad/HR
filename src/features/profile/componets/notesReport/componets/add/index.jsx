import React, { useEffect, useState } from 'react'
import { Box, Stack, styled } from '@mui/system'
import Drawer from '@mui/material/Drawer'
import {  Button, TextField } from '@mui/material'
import { useAddNote } from '../../hooks/useAddNote'


const drawerWidth = 440

const CenteredDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,

  '& .MuiDrawer-paper': {
    width: drawerWidth,
    margin: 'auto',
    top: '20%',
    borderRadius: '12px '
  }
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'center'
}))

export default function AddNote({user_id, open, setOpen }) {

  const { mutate: AddNote, isLoading } = useAddNote();

  const handleDrawerClose = _ => {
    setOpen(false)
  }


  const handleSubmit = event => {
    event.preventDefault()

    AddNote({
      user_id:user_id,
      content:event.target[0].value
    })

    setOpen(false)

  }
  return (
    <CenteredDrawer
      anchor='top'
      open={open}
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}
    >
      <DrawerHeader  sx={{ color: '#8090A7', padding: '0px 0px 0px 10px' }}>
        Add Note
      </DrawerHeader>

      <Stack height={'270px'} direction={'column'} padding={'2px 0px 0px 10px'}>
          <form onSubmit={handleSubmit} >
        <Box width={'100%'} display={'flex'} justifyContent={'center'} >
          <TextField
              placeholder='Note'
              sx={{ width:'90%' }}
              multiline
              rows={7}
              maxRows={4}

            />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '7px', gap: '4px', marginTop: '8px' }}>
          <Button onClick={handleDrawerClose}>Cancel</Button>
          <Button
            sx={{ backgroundColor: '#6AB2DF', color: '#fff', ':hover': { color: '#fff', backgroundColor: '#2A4759' } }}
            type='submit'
          >
            Add
          </Button>
        </Box>
          </form>

      </Stack>
    </CenteredDrawer>
  )
}
