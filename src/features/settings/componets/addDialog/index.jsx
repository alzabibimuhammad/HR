import React, { useEffect, useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material'
import { Box, Stack } from '@mui/system'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import useAddBranch from '../../hooks/useAdd'

export default function AlertDialogAdd({  open, handleClose }) {

  const { mutate: AddBranch, isLoading } = useAddBranch();

  const handleSubmit = event =>{

    event.preventDefault();
    AddBranch(event.target[0].value)
    handleClose()

  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Box>
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Dialog onClose={handleClose} open={open}>
            <Grid item xs={12}>
              <Item>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#131627' }}>Add</Typography>
                <form onSubmit={handleSubmit}>

                  <Stack direction={'column'}>
                    <DialogTitle style={{ fontSize: '14px', color: '#3F4458' }}>
                      Please, Enter the new branch name.
                    </DialogTitle>

                    <DialogTitle style={{ fontSize: '14px', color: '#3F4458' }}>
                      <TextField  label='Branch Name' fullWidth size='small' />
                    </DialogTitle>
                  </Stack>
                  <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <Button onClick={handleClose} sx={{ backgroundColor: 'rgba(128, 144, 167,0.2)', color: '#8090A7' }}>
                      Cancel
                    </Button>

                    <Button
                      autoFocus
                      type='submit'
                      sx={{
                        color: '#fff',
                        backgroundColor: '#6AB2DF',
                        '&:hover': { color: '#fff', background: '#6AB2DF' }
                      }}
                    >
                      Add
                    </Button>
                  </DialogActions>
                </form>
              </Item>
            </Grid>
          </Dialog>
        </Grid>
    </Box>
  )
}
