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
import useUpdateBranch from '../../hooks/useUpdate'
import { useTranslation } from 'react-i18next'

export default function AlertDialogEdit({ Branch, open, handleClose }) {

  const { mutate: editBranch, isLoading } = useUpdateBranch();

  const {t} = useTranslation()
  const handleSubmit = event =>{

    event.preventDefault();

    editBranch({id:Branch?.id, branch:event.target[0].value})
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
      {Object?.keys(Branch).length != 0 ? (
        <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Dialog onClose={handleClose} open={open}>
            <Grid item xs={12}>
              <Item>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', color: '#131627' }}>{t('Edit')}</Typography>
                <form onSubmit={handleSubmit}>

                  <Stack direction={'column'}>
                    <DialogTitle style={{ fontSize: '14px', color: '#3F4458' }}>
                    {t('Please, Enter the new name of the branch.')}

                    </DialogTitle>

                    <DialogTitle style={{ fontSize: '14px', color: '#3F4458' }}>
                      <TextField defaultValue={Branch?.name} label={t('Branch Name')} fullWidth size='small' />
                    </DialogTitle>
                  </Stack>
                  <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <Button onClick={handleClose} sx={{ backgroundColor: 'rgba(128, 144, 167,0.2)', color: '#8090A7' }}>
                    {t('Cancel')}
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
                      {t('Submit')}
                    </Button>
                  </DialogActions>
                </form>
              </Item>
            </Grid>
          </Dialog>
        </Grid>
      ) : null}
    </Box>
  )
}
