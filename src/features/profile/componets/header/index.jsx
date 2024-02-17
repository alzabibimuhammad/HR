
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { useTranslation } from 'react-i18next'
import { Tab, Tabs } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material'

const TabsProfile = styled(Tabs)(({ theme }) => ({

  position: "relative",
  left: "0px",
  bottom: "45px",



}));

const UserProfileHeader = ({Data,setValues,value,ProfileData,userData}) => {
  const {t} = useTranslation()

  const handleChange = (event, newValue) => {

    setValues(newValue);
  };

  return Object.keys(Data).length > 0 ? (
    < >


          <Stack direction={"row"} spacing={3} sx={{ marginTop:'3%',marginLeft:'3%',position:"relative" ,zIndex:"11",display:"flex",alignItems:"center"}} >
          <Avatar
  sx={{
    width: { xs: '80px', sm: '100px', md: '130px' },
    height: { xs: '100px', sm: '100px', md: '130px' },
    borderRadius: '5px',
    marginBottom: { xs: '16px', sm: '20px', md: '26px' },
  }}
  src={process.env.NEXT_PUBLIC_IMAGES + '/' + userData?.user_info?.image || "/broken-image.jpg"}
/>


            {/* <ProfilePicture src={ || "/broken-image.jpg"} alt='profile-picture' /> */}

            <Box>
<TabsProfile
        value={value}
          onChange={handleChange}
            sx={{
              width: { xs: '100%', sm: '100%', md: '100%' },
              marginTop: { xs: '-16px',sm:"0px"},
    borderRadius: '5px',
  }}

>
  <Tab value="1" label="Reports" />
  <Tab value="2" label="Profile" />
  <Tab value="3" label="Manage" />
  <Tab value="4" label="Reviews" />
</TabsProfile>
        <Typography variant='h5' sx={{ mb: 2.5,
         marginTop: { xs: '-45px',sm:"0px"},


        }}>
          {ProfileData?.first_name} {ProfileData?.last_name}
        </Typography>
        <Typography color={'#8090A7'} fontSize={'14px'} >
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

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: ['center', 'flex-start'],
        }}
      >
        <Box sx={{ mr: 4, display: 'flex', alignItems: 'center', '& svg': { mr: 1.5, color: 'text.secondary' } }}>
          <Typography sx={{ color: 'text.secondary' }}>{ProfileData?.address}</Typography>
        </Box>

      </Box>
    </Box>
  </Box>
</CardContent>



    </>
  ) : null
}

export default UserProfileHeader
