import React, { useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import useDeleteBranch from '../../hooks/useDelete'

export default function AlertDialog({ Branch, open, handleClose }) {
  const { mutate: deleteBranch, isLoading } = useDeleteBranch();

  const handleDeleteAPI = () => {
    deleteBranch(Branch?.id)
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
      {Object?.keys(Branch).length != 0 ?

      <Grid  columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Dialog onClose={handleClose} open={open}>
          <Grid item xs={12}>
            <Item>
              <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#131627' }}>Delete</Typography>

              <DialogTitle style={{ fontSize: '14px', color: '#3F4458' }}>
                Are you sure you want to delete [{Branch && Branch && Branch.name}] ? This action is irreversible and
                will permanently remove all associated data and configurations for this branch.
              </DialogTitle>

              <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Button onClick={handleClose} sx={{ backgroundColor: 'rgba(128, 144, 167,0.2)', color: '#8090A7' }}>
                  Cancel
                </Button>

                <Button
                  autoFocus
                  sx={{
                    color: '#fff',
                    backgroundColor: '#DF2E38',
                    border: '1px solid #DF2E38',
                    '&:hover': { color: '#fff', background: '#DF2E38' }
                  }}
                  onClick={() => handleDeleteAPI()}
                >
                  Delete
                </Button>
              </DialogActions>
            </Item>
          </Grid>
        </Dialog>
      </Grid>
    : null }
    </Box>
  )
}
