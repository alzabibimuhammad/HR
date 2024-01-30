import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export default function Logo() {
  return (
    <Stack  direction={'column'} spacing={2} sx={{backgroundColor:"#FFFFFF",p:"30px",borderRadius:"12px"}}>


      <Box  display={'flex'} alignItems={'center'} sx={{width:"246px"}}>

      <Box sx={{ width:'64px',height:'65px' }}>
        <img style={{ width:'100%',height:'100%' }} src='/images/axis.png' />
      </Box>

      <Typography color={'#8090A7'} variant='h2'>
      Axis Code
      </Typography>

          </Box>
        <Box width={'246px'} >
          <Typography sx={{fontWeight:"500",fontSize:"12px",color:"#8090A7"}}>Office 149, 450 South Brand Brooklyn
    San Diego Country, CA 91905, USA
    +1 (123) 456 7894, +44 (789) 54222</Typography>
    </Box>
        </Stack>
        )
}
