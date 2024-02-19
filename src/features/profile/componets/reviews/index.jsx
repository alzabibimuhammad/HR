import { Card, CardContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ReviewsReport() {
  const {t} = useTranslation()
  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={1}>
          <Typography fontSize={'20px'} color={'#8090A7'}>
          {t('Reviews')}  (2 {t('Reviews')} )
          </Typography>
          <Typography fontSize={'14px'} color='#3F4458'>
          {t('Total')} (90%)
          </Typography>

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#6AB2DF' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {t('Technical')}  90%
            </Typography>
          </Stack>

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#6AB2DF' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {t('Communication')}  90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {t('Creativity')}  90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {t('Time Management')}  90%
            </Typography>
          </Stack>
          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#8090A7' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {t('Personality')}  90%
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}
