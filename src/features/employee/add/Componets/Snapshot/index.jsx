import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export default function Snapshot() {


  return (
    <Card>
        <CardContent>

          <Typography >Snapshot</Typography>
          <br/>
          <Stack direction={'row'} spacing={3} >
            <Box>
              <img src='/images/avatars/3.png' alt='profile-picture' />
              {/* <TextField type='file'
                size='small'
                sx={{width:'100px'}}
              /> */}
            </Box>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <TextField
                fullWidth
                size='small'
                placeholder='First Name'
              />
              <TextField
                fullWidth
                size='small'

                placeholder='Middle Name'
              />
              <TextField

                size='small'
                fullWidth
                placeholder='Last Name'
              />

          </Stack>
          </Stack>
        </CardContent>
    </Card>

  )
}
