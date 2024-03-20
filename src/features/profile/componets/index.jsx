// ** React Imports
import { useState, useEffect, useMemo } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import AboutOverivew from './overView'
import UserProfileHeader from './header'
import { Box, Stack } from '@mui/system'
import PersonalInfo from './personalInformation'
import Skills from './skills'
import Employment from './employment'
import { useGetEmployeeById } from 'src/features/employee/hooks/useGetEmployeeById'
import { useDispatch, useSelector } from 'react-redux'
import { setUserId } from '../../../store/apps/user'
import RatingTabel from '../ratingTabel'
import Mange from './manage'
import ReviewsReport from './reviews'
import Download from './download'
import NoteReport from './notesReport'
import DatePacker from './datePacker'
import Absences from './absences'



const Profiles = ({ data, tab }) => {
  // ** State
  const [isLoading, setIsLoading] = useState(true)
  const [SelecetedDate, SetSelectedDate] = useState()

  const [userData, setuserData] = useState()


  const userDataClean = userData?.data?.data[0]
  const store = useSelector(state => state.user)

  const value = useMemo(() => store?.profileTab, [store?.profileTab]);

  const router = useRouter()
  const id = router.query.id


  const dispatch = useDispatch()

  useEffect(()=>{

  dispatch(setUserId(id))

  },[dispatch])

  const { mutate: getEmployee, data: DataEmployee } = useGetEmployeeById()


  const ProfileData = DataEmployee?.data?.data[0]

  useEffect(() => {
    if (data) {
      setIsLoading(false)
    }
      getEmployee(id)
  }, [data])










  return (
    <>
    <Stack overflowX='hidden' direction={'column'} container spacing={{ sm: 15, xs: 6 }}>
      <Box overflowX='hidden' item xs={12} sx={{ height: '120px', zIndex: 999 }} marginTop={{ sm: '0' }}>
        <UserProfileHeader
          userData={userDataClean}
          Data={data}
          ProfileData={ProfileData}
          values={value}
        />
      </Box>
      {value == 1 ? (
        <Stack   direction={{ sm: 'row', xs: 'column' }} width={'100%'} spacing={{  xs: 1 ,sm:1}}>
          <Stack
            direction={'column'}
            width={{ sm: '71.2%', xs: '100%' }}
            height={{ sm: '100%' }}
            spacing={{ sm: 0, xs: 1 }}
            sx={{marginRight:"32px",marginTop:"24px"}}
          >
            <Box>
              <AboutOverivew userDataClean={userDataClean} Data={data} />
            </Box>
            <Box>
              <ReviewsReport SelecetedDate={SelecetedDate}  />
            </Box>
          </Stack>
          <Stack  width={{ sm: '35%', xs: '100%' }}   direction={'column'}>
            <Box sx={{marginTop:"24px"}} width={'100%'}>



            <DatePacker setUserData={setuserData} SetSelectedDate={SetSelectedDate}/>


              {/* <CustomDatePicker setUserData={setuserData} SetSelectedDate={SetSelectedDate} /> */}

            </Box>
            <Box >
              <Download ProfileData={ProfileData} user={userData} />
            </Box>

            <Box sx={{marginTop:"24px"}} width={'100%'} height={'20% !important '}>
              <NoteReport user_id={id} />
            </Box>
          </Stack>
        </Stack>
      ) : null}
      {value == 2 ? (
        <Stack  direction={{ sm: 'row', xs: 'column' }} spacing={{ sm: 9, xs: 1 }}>
          <Stack
            sx={{ height: '100%' }}
            spacing={{ sm: 8, xs: 1 }}
            width={{ sm: '40%', xs: '100%' }}
            direction={'column'}
          >
            <PersonalInfo ProfileData={ProfileData} />
            <NoteReport user_id={id} />
          </Stack>

          <Stack width={{ sm: '60%', xs: '100%', height: '100%' }} spacing={{ sm: 8, xs: 1 }} direction={'column'}>
            <Skills ProfileData={ProfileData} />
            <Employment ProfileData={ProfileData} />
          </Stack>
        </Stack>
      ) : null}
      {value == 3 ? (
        <Box marginTop={{ sm: '12px' }}>
          <Mange id={id}  />
        </Box>
      ) : null}
      {value == 4 ? (
        <Stack>
          <RatingTabel />
        </Stack>
      ) : null}
      {value == 5 ? (
        <Stack>
          <Absences />
        </Stack>
      ) : null}
    </Stack>
    </>

  )
}

export default Profiles
