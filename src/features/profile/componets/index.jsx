// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList from '@mui/lab/TabList'

import AboutOverivew from './overView'
import ActivityTimeline from './timeLine'
import UserProfileHeader from './header'
import { Box, Stack } from '@mui/system'
import TeamLeader from './teamLeader'
import { Button, ButtonGroup, Card, CardContent, CardHeader, Tab, Tabs, Typography } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import { FormateDate } from 'src/utiltis/DateFormate'
import { date } from 'yup'
import { CustomDatePicker } from 'src/@core/components/customPickerDate'
import PersonalInfo from './personalInformation'
import Skills from './skills'
import Employment from './employment'
import { useGetEmployeeById } from 'src/features/employee/hooks/useGetEmployeeById'
import { useDispatch } from 'react-redux'
import { setUserId } from '../../../store/apps/user'
import RatingTabel from '../ratingTabel'
import Mange from './manage'
import useGetRatingById from '../ratingTabel/hooks/useGetRatingById'
import useGetDecision from './manage/hook/useGetDecision'
import ReviewsReport from './reviews'
import Download from './download'
import NoteReport from './notesReport'

const TabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const Profiles = ({ data,tab }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(true)
  const [SelecetedDate, SetSelectedDate] = useState()

  const [userData, setuserData] = useState()

  const userDataClean = userData?.data?.data[0]
  
  console.log("🚀 ~ Profiles ~ userDataClean:", userDataClean)

  const [value, setValues] = useState('1')

  // ** Hooks
  const router = useRouter()
 const id =router.query.id
 const dispatch = useDispatch();
 dispatch(setUserId(id));
  const {mutate:getEmployee,data:DataEmployee}=useGetEmployeeById()


  const {data:DataDecision}=useGetDecision(id);






  const ProfileData = DataEmployee?.data?.data[0]
  const hideText = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const handleDateChoose = date => {
    const formattedDate = FormateDate(date)
    SetSelectedDate(date)
  }

  useEffect(() => {
    if (data) {
      setIsLoading(false)
    }
    getEmployee(id)
  }, [data])
  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
  }, [tab])

  return (
    <TabContext value={value}>
      <Stack direction={'column'} container spacing={15}>
        <Box item xs={12} sx={{ height: '120px', zIndex: 999 }} marginTop={{ sm: '0', xs: '25px' }}>
          <UserProfileHeader
            userData={userDataClean}
            Data={data}
            ProfileData={ProfileData}
            setValues={setValues}
            values={value}
          />
        </Box>

        <TabPanel value='1'>

          <Stack direction={{ sm: 'row', xs: 'column' }}  width={'100%'} spacing={5}>

          <Stack direction={'column'}width={{ sm:'50%',xs:'100%' }} height="1000px" spacing={2} >
            <Box  >
              <AboutOverivew userDataClean={userDataClean} Data={data} />
            </Box>
            <Box>
            <ReviewsReport/>
            </Box>
            </Stack>
            <Stack width={{ sm:'50%',xs:'100%' }} spacing={2} direction={'column'}>

              <Box width={'100%'} >
                <CustomDatePicker setUserData={setuserData} selectedDate={SelecetedDate} />
              </Box>
              <Box>
                <Download user={userData} />
              </Box>

              <Box width={'100%'} height={'20% !important '}>
                <NoteReport user_id={id} />
              </Box>

            </Stack>
          </Stack>

        </TabPanel>

        <TabPanel value='2'>
          <Stack direction={{ sm: 'row', xs: 'column' }} spacing={6}>
            <Stack sx={{height:"5900vh"}} spacing={6} width={{ sm: '40%', xs: '100%' }} direction={'column'}>
              <PersonalInfo ProfileData={ProfileData} />
              <NoteReport user_id={id} />
            </Stack>

            <Stack width={{ sm: '60%', xs: '100%' }} spacing={6} direction={'column'}>
              <Skills ProfileData={ProfileData} />
              <Employment ProfileData={ProfileData} />
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value='3'>
          {DataDecision ? <Mange id={id} DataDecision={DataDecision} /> : null}
        </TabPanel>

    <TabPanel value="4">
   <RatingTabel />

      </TabPanel>

</Stack>
</TabContext>
  )
}

export default Profiles
