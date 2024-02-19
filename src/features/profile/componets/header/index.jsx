import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTranslation } from 'react-i18next'
import { Button, Tab, Tabs } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material'

const TabsProfile = styled(Tabs)(({ theme }) => ({
  position: 'relative',
  left: '0px',
  bottom: '45px'
}))

const UserProfileHeader = ({ Data, setValues, value, ProfileData, userData }) => {
  const { t } = useTranslation()
  const handleOne = _ => {
    setValues(1)
  }
  const handleTwo = _ => {
    setValues(2)
  }
  const handleThree = _ => {
    setValues(3)
  }
  const handleFoure = _ => {
    setValues(4)
  }
  const handleChange = (event, newValue) => {
    setValues(newValue)
  }

  return Object.keys(Data).length > 0 ? (
    <>
      <Stack
        direction={'row'}
        overflowX='hidden'
        spacing={{ sm:5,xs:1 }}
        sx={{
          position: { sm: 'relative', xs: 'relative' },
          bottom: { sm: '-15px', xs: '14px' },
          left: { sm: '170px', xs: '90px' },
          overflow: 'hidden',
          zIndex: 1000
        }}
      >
        <Button sx={{ width:{xs:'10px',sm:'25px'},fontSize:{xs:'12px',sm:'16px'} }} onClick={handleOne}>Reports</Button>
        <Button sx={{ width:{xs:'10px',sm:'25px'},fontSize:{xs:'12px',sm:'16px'} }} onClick={handleTwo}>Profile</Button>
        <Button sx={{ width:{xs:'10px',sm:'25px'},fontSize:{xs:'12px',sm:'16px'} }} onClick={handleThree}>Manage</Button>
        <Button sx={{ width:{xs:'10px',sm:'25px'},fontSize:{xs:'12px',sm:'16px'} }} onClick={handleFoure}>Review</Button>
      </Stack>
      <Stack
        direction={'row'}
        spacing={3}
        sx={{
          position: 'relative',
          zIndex: '11',
          display: 'flex',
          alignItems: 'center',
          overflowX: 'hidden'
        }}
      >
        <Avatar
          sx={{
            width: { xs: '80px', sm: '100px', md: '130px' },
            height: { xs: '100px', sm: '100px', md: '130px' },
            borderRadius: '5px',
            marginLeft: { xs: '16px', sm: '20px', md: '26px' },
            position: 'relative',
            bottom: '20px'
          }}
          src={process.env.NEXT_PUBLIC_IMAGES + '/' + userData?.user_info?.image || '/broken-image.jpg'}
        />

        {/* <ProfilePicture src={ || "/broken-image.jpg"} alt='profile-picture' /> */}

        <Box>
          <Typography variant='h5' sx={{ mb: 2.5, marginTop: { xs: '-45px', sm: '0px' } }}>
            {ProfileData?.first_name} {ProfileData?.last_name}
          </Typography>
          <Typography color={'#8090A7'} fontSize={'14px'}>
            {userData?.specialization}
          </Typography>
        </Box>
      </Stack>

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
          padding: 0,
          bottom: 40
        }}
      ></CardContent>
    </>
  ) : null
}

export default UserProfileHeader
