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
import { Tab, Tabs } from '@mui/material'
import { TabPanel } from '@mui/lab'

const ProfilePicture = styled('img')(({ theme }) => ({
  width: 108,
  height: 108,
  borderRadius: theme.shape.borderRadius,
  border: `4px solid ${theme.palette.common.white}`,
  position: 'relative',  // Fix here
  zIndex: 1,
  top: -40,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  }
}));

const TabsProfile = styled(Tabs)(({ theme }) => ({

  position: 'absolute',  // Change to 'absolute' to position relative to the parent
  top: '25%',            // Center vertically
  left: '35%',           // Center horizontally
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

const UserProfileHeader = ({Data,setValues,value}) => {
  const {t} = useTranslation()

  const handleChange = (event, newValue) => {

    setValues(newValue);
  };

  return Object.keys(Data).length > 0 ? (
    < >


          <Box sx={{ marginTop:'5%',marginLeft:'3%' }} >

            <ProfilePicture src='/images/avatars/3.png' alt='profile-picture' />
            <TabsProfile
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value="1" label="Reports" />
              <Tab value="2" label="Profile" />
              <Tab value="3" label="Item Section" />
            </TabsProfile>

          </Box>



          <CardContent
            sx={{
              pt: 0,
              mt: -20,
              display: 'flex',
              alignItems: 'flex-end',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'flex-start' },
              height: '110px',
              zIndex: 0,
              position: 'relative',
              backgroundColor: 'white',
              borderRadius: '10px',
              width: '95.5%',
              marginLeft:'2%',
              padding:0,
              bottom: 40
            }}
          >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            ml: { xs: 0, md: 6 },
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
    <Box
      sx={{
        mb: [6, 0],
        display: 'flex',
        flexDirection: 'column',
        alignItems: ['center', 'flex-start'],
        marginLeft: { sm: '17%', xs: '30%' },
        marginTop: { sm: '0', xs: '2%' },
      }}
    >
      <Typography variant='h5' sx={{ mb: 2.5 }}>
        Daniel
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: ['center', 'flex-start'],
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
