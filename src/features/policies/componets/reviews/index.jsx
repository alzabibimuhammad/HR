import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function Reviews() {
  return (
    <Card>
      <CardContent>
        <Typography fontSize={'20px'}>Reviews</Typography>
        <Stack spacing={2} >
        <Typography style={{ marginTop:'24px' }} fontSize={'14px'}>Review criteria</Typography>
        <TextField
          fullWidth
          size='small'
          placeholder='Overall'
        />
        </Stack>
      </CardContent>
    </Card>
  )
}
