import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

export default function Contact() {
  return (
    <Card>
        <CardContent>

          <Typography >Contact</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
    
              <TextField
                fullWidth
                size='small'
                required
                placeholder='Address'
              />
              <TextField
                fullWidth
                type='number'
                size='small'
                required
                placeholder='Phone Number'
              />

              <TextField
                fullWidth
                type='email'
                size='small'
                required
                placeholder='Email'
              />
          </Stack>
        </CardContent>
    </Card>

  )
}
