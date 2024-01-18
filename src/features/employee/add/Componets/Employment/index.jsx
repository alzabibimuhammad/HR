
import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'

export default function Employment() {
  return (
    <Card>
        <CardContent>

          <Typography >Employment</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <Typography>Salary</Typography>
              <TextField
                fullWidth
                type='number'
                size='small'
                required
                placeholder='Salary'
              />
              <Typography>Start date</Typography>
              <TextField
                fullWidth
                type='date'
                size='small'
                required
                placeholder='Start date'
              />
              <Typography>Contract</Typography>
              <TextField
                fullWidth
                type='file'
                size='small'
                required
                placeholder='add contract file'
              />
              <Typography>Secretariats</Typography>
              <TextField
                fullWidth
                size='small'
                required
                placeholder='Secretariats'
              />
               <Typography>Delivery date</Typography>
              <TextField
                fullWidth
                type='date'
                size='small'
                required
                placeholder='Delivery date'
              />
          </Stack>
        </CardContent>
    </Card>

  )
}
