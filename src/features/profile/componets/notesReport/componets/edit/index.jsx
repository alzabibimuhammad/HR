import React, { useEffect, useState } from 'react'
import { Box, Stack, styled } from '@mui/system'
import Drawer from '@mui/material/Drawer'
import { Avatar, Button, Input, TextField, Typography } from '@mui/material'
import { useEditNote } from '../../hooks/useEditNote'


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

export default function EditNote({oldNote, open, setOpen }) {

  const { mutate: EditNote, isLoading } = useEditNote();

  const handleDrawerClose = _ => {
    setOpen(false)
  }
  const handleDrawerDone = _ => {
    setOpen(false)
  }
  const handleSubmit = event => {
    event.preventDefault()
    console.log('submit');
    EditNote({id:oldNote?.id,content:event.target[0].value})
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
        Edit Note
      </DrawerHeader>

      <Stack height={'270px'} direction={'column'} padding={'2px 0px 0px 10px'}>
          <form onSubmit={handleSubmit} >
        <Box width={'100%'} display={'flex'} justifyContent={'center'} >
          <TextField
              defaultValue={oldNote?.content}
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
            Done
          </Button>
        </Box>
          </form>

      </Stack>
    </CenteredDrawer>
  )
}
