import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export default function Account() {


  return (
    <Card>
        <CardContent>

          <Typography >Account</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <TextField
                fullWidth
                type='email'
                required
                size='small'
                placeholder='Email'
              />
              <TextField
                fullWidth
                size='small'
                type='password'
                required
                placeholder='Password'
              />
              <TextField
                type='password'
                size='small'
                fullWidth
                placeholder='Confirm Password'
              />

          </Stack>
        </CardContent>
    </Card>

  )
}
