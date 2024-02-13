import React from 'react'
import { Button, Card, CardContent, Dialog, DialogContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'

export default function Show({ data, open, handleClose }) {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))

  return (
    <Grid sx={{ width: '400px', height: '400px' }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Dialog fullWidth onClose={handleClose} open={open}>
        <Card>
          <CardContent>
            <Stack spacing={5} direction={'column'}>

              <Box display={'flex'} justifyContent={'center'}>
                <Typography color={'#3F4458'} fontSize={'20px'}>
                  Complaints
                </Typography>

              </Box>

              <Typography color={'#131627'} fontSize={'14px'}>{data.description}</Typography>


            </Stack>

            <Box mt={2} display={'flex'} justifyContent={'end'}>
                <Button onClick={handleClose} sx={{ backgroundColor: 'rgba(128, 144, 167,0.2)', color: '#8090A7' }}>
                  Close
                </Button>
              </Box>
          </CardContent>
        </Card>
      </Dialog>
    </Grid>
  )
}
