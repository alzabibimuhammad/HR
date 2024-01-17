// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import axios from 'axios'
import Icon from 'src/@core/components/icon'
import { useTranslation } from 'react-i18next'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 108,
  height: 108,
  borderRadius: theme.shape.borderRadius,
  border: `4px solid ${theme.palette.common.white}`,
  position: 'relative',  // Fix here
  zIndex: 1,
  top: -54,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}));

const UserProfileHeader = (Data) => {
  const {t} = useTranslation()
  return Object.keys(Data).length > 0 ? (
    < >

          <Box sx={{ width:'140px',height:'140px',marginTop:'3%',zIndex:999,marginLeft:'1%' }} >
            <ProfilePicture sx={{ width:'100%',zIndex:999,height:'100%' }} src='/images/avatars/3.png' alt='profile-picture' />
          </Box>


          <CardContent
            sx={{
              pt: 0,
              mt: -20,
              display: 'flex',
              alignItems: 'flex-end',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              height:'100px',
              zIndex: 0,
              position: 'relative',
              backgroundColor: 'white',
              borderRadius:'15px',
              width: '100%',
              bottom: 40
            }}
          >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: ['wrap', 'nowrap'],
            justifyContent: ['center', 'space-between'],
          }}
        >
          <Box sx={{ mb: [6, 0], display: 'flex', flexDirection: 'column', alignItems: ['center', 'flex-start']  }} marginLeft={{ sm:'17%',xs:'30%' }} marginTop={{ sm:'0',xs:'2%' }} >
            <Typography variant='h5' sx={{ mb: 2.5 }}>
            {Data.Data.data[0].name}
            </Typography>


            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: ['center', 'flex-start']
              }}
            >

              <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.secondary' } }}>
                <Typography sx={{ color: 'text.secondary' }}>{t('Damascus')}</Typography>
              </Box>

            </Box>
          </Box>

        </Box>

      </CardContent>


    </>
  ) : null
}

export default UserProfileHeader
