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
import { Button, ButtonGroup, Card, CardContent, Tab, Tabs, Typography } from '@mui/material'
import { TabContext, TabPanel } from '@mui/lab'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import DatePicker from 'react-datepicker'
import { FormateDate } from 'src/utiltis/DateFormate'
import { date } from 'yup'
import { CustomDatePicker } from 'src/@core/components/customPickerDate'
import PersonalInfo from './personalInformation'
import Skills from './skills'
import Employment from './employment'
import Notes from './notes'
import { useGetEmployeeById } from 'src/features/employee/hooks/useGetEmployeeById'

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

const Profiles = ({ tab, data }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(true)
  const [SelecetedDate,SetSelectedDate]=useState()
const [value,setValues]=useState('1')
console.log("🚀 ~ Profiles ~ values:", value)

  // ** Hooks
  const router = useRouter()
 const id =router.query.id
  console.log("🚀 ~ Profiles ~ router:", router.query.id)
  const {mutate:getEmployee,data:DataEmployee}=useGetEmployeeById()
  console.log("🚀 ~ Profiles ~ DataEmployee:", DataEmployee?.data?.data[0])
  const ProfileData = DataEmployee?.data?.data[0]
  const hideText = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const handleDateChoose = (date) => {
    console.log("🚀 ~ handleDateChoose ~ date:", date)
    const formattedDate = FormateDate(date);
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


  const  Data = {

    "success": true,
    "message": "success",
    "teamLeader": [
        {
          'total_employees':7,
          'present_employees':6
        },

      ],

    }

    const  Data2 = {

      "success": true,
      "message": "success",

        "projectManeger": [
          {
            'total_employees':20,
            'present_employees':19
          },

        ]

      }

  return(
    <TabContext value={value}>
  <Stack direction={'column'} container spacing={15}>


    <Box item xs={12} sx={{ height:'120px',zIndex:999 }} marginTop={{sm:'0' ,xs:'25px' }}>

     <UserProfileHeader  Data={data} ProfileData={ProfileData} setValues={setValues} values={value}  />
    </Box>
    <TabPanel value="1">
    <Stack direction={{sm:'row',xs:'column'}} spacing={5} >
    <Box sx={{ flex:1 }}>
      <AboutOverivew Data={data}  />
    </Box>
      <Box sx={{ flex:0 }}>

     <CustomDatePicker selectedDate={SelecetedDate} />

      </Box>

    </Stack>
    </TabPanel>

    <TabPanel value="2">

    <Stack direction={{ sm:'row',xs:'column' }} spacing={6}>

    <Stack spacing={6} width={{sm:'40%',xs:'100%'}} direction={'column'}>
      <PersonalInfo ProfileData={ProfileData}/>
      <Notes/>
    </Stack>

    <Stack width={{sm:'60%',xs:'100%'}} spacing={6} direction={'column'}>

      <Skills ProfileData={ProfileData}/>
      <Employment/>
    </Stack>
    </Stack>

    </TabPanel>



    <TabPanel value="3">

    <Stack direction={{sm:'row',xs:'column'}} spacing={5} >
    <Box sx={{ flex:1 }}>
      <AboutOverivew Data={data} />
    </Box>
      <Box sx={{ flex:0 }}>

     <CustomDatePicker selectedDate={SelecetedDate} />

      </Box>

    </Stack>
    </TabPanel>


</Stack>
</TabContext>
  )
}

export default Profiles
