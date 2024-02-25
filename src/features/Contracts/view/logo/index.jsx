import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Logo() {
  const {t} = useTranslation()
  return (
    <Stack  direction={'column'} spacing={2} sx={{backgroundColor:"#FFFFFF",p:"30px",borderRadius:"12px"}}>


      <Box  display={'flex'} alignItems={'center'} sx={{width:"246px"}}>

      <Box sx={{ width:'64px',height:'65px' }}>
        <img style={{ width:'100%',height:'100%' }} src='/images/policesIcon/pageLogo/logo.svg' />
      </Box>

      <Typography color={'#8090A7'} variant='h2'>
      {t('Code Shild')}
      </Typography>

          </Box>
        <Box width={'246px'} >
          <Typography sx={{fontWeight:"500",fontSize:"12px",color:"#8090A7"}}>{t('Al-Assad suburb, Al-Jazeera (e), next to Al-Rahmoun roundabout')}</Typography>
    </Box>
        </Stack>
        )
}
