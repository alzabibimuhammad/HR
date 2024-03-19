import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTranslation } from 'react-i18next'
import { Button, Tab, Tabs } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import { Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProfileTap } from '../../../../store/apps/user'
import { useRouter } from 'next/router'
import Link from 'next/link'
import EditNoteIcon from '@mui/icons-material/EditNote';




const UserProfileHeader = ({ Data, setValues, value, ProfileData, userData }) => {
  const { t } = useTranslation()
  const [activeButton, setActiveButton] = useState('reports');
  const dispatch = useDispatch()

  const router = useRouter();
  let { type } = router.query;
  useEffect(() => {
    if (type)
      setActiveButton(type)
  }, [type])



  const handleOne = _ => {
    type = null
    setActiveButton("reports");

    dispatch(setProfileTap(1))

  }

  const handleTwo = _ => {
    dispatch(setProfileTap(2))
    type = null

    setActiveButton('profile');

  }

  const handleThree = _ => {
    dispatch(setProfileTap(3))
    setActiveButton('manage');

    type = null
  }

  const handleFoure = _ => {
    dispatch(setProfileTap(4))
    type = null
    setActiveButton('review');

  }

  const handleFive= _ => {
    dispatch(setProfileTap(5))
    type = null
    setActiveButton('Absences');

  }



  return Object.keys(Data).length > 0 ? (
    <>
      <Stack
        direction={'row'}
        overflowX='hidden'
        spacing={{ sm: 5, xs: 1 }}
        sx={{
          position: { sm: 'relative', xs: 'relative' },
          bottom: { sm: '-20px', xs: '8px' },
          left: { sm: '170px', xs: '99px' },
          zIndex: 1000,
          width: "30%"
        }}
      >
        <Button className={`button-tap ${activeButton === 'reports' ? 'active' : ''}`} sx={{ width: { xs: '10px', sm: '25px' }, fontSize: { xs: '12px', sm: '16px' } }} onClick={handleOne}> {t('Reports')}  </Button>
        <Button className={`button-tap ${activeButton === 'profile' ? 'active' : ''}`} sx={{ width: { xs: '10px', sm: '25px' }, fontSize: { xs: '12px', sm: '16px' } }} onClick={handleTwo}> {t('Profile')} </Button>
        <Button className={`button-tap ${activeButton === 'manage' ? 'active' : ''}`} sx={{ width: { xs: '10px', sm: '25px' }, fontSize: { xs: '12px', sm: '16px' } }} onClick={handleThree}>{t('Manage')} </Button>
        <Button className={`button-tap ${activeButton === 'review' ? 'active' : ''}`} sx={{ width: { xs: '10px', sm: '25px' }, fontSize: { xs: '12px', sm: '16px' } }} onClick={handleFoure}>{t('Review')} </Button>
        <Button className={`button-tap ${activeButton === 'review' ? 'active' : ''}`} sx={{ width: { xs: '10px', sm: '25px' }, fontSize: { xs: '12px', sm: '16px' } }} onClick={handleFive}>{t('Absences')} </Button>
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
            marginBottom: { sm: "10px", xs: "15px" }
          }}
          src={process.env.NEXT_PUBLIC_IMAGES + '/' + userData?.user_info?.image || '/broken-image.jpg'}
        />


        <Box>
          <Typography variant='h5' sx={{ mb: 2.5, marginTop: { xs: '-45px', sm: '0px' } }}>
            {ProfileData?.first_name} {ProfileData?.last_name}
          </Typography>
          <Typography color={'#8090A7'} fontSize={'14px'}>
            {userData?.specialization}
          </Typography>
          {

            ProfileData?.id &&
          <Link style={{ textDecoration:'none' }} href={`/employees/add?user_id=${ProfileData?.id}`}>
            <Box sx={{ position: 'absolute', right: '10px', top: '25px' }} >

              <EditNoteIcon />

            </Box>
          </Link>
        }
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
