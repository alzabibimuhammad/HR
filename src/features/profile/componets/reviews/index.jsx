import { Card, CardContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export default function ReviewsReport() {
  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={1}>
          <Typography fontSize={'20px'} color={'#8090A7'}>
            Reviews (2 Reviews)
          </Typography>
          <Typography fontSize={'14px'} color='#3F4458'>
            Total (90%)
          </Typography>

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#6AB2DF' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
              Technical 90%
            </Typography>
          </Stack>

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#6AB2DF' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
              Communication 90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
              Creativity 90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
              Time Management 90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
              Personality 90%
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
