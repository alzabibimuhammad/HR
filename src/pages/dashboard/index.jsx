import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Attendance from 'src/features/dashboard/attendance'
import AppCalendar from 'src/features/dashboard/calendar'
import Registration from 'src/features/dashboard/registration/components/DataGrid'
import Requests from 'src/features/dashboard/requests'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendancePercentage } from './store'
import { Grid } from '@mui/material'

export default function Dashboard() {

 const store = useSelector(state => state.Dashboard)

 const [percentageData,setpercentageData]=useState([])

 const dispatch = useDispatch()

 useEffect(() => {
    dispatch(getAttendancePercentage())
    setpercentageData(store?.AttendancePercentage)
 }, [dispatch,store?.AttendancePercentage.length])


 return <>
      <Stack spacing={5} sx={{ overflow:'hidden' }} >

      <Stack justifyContent={"center"}  spacing={5} direction={{sm:'row',xs:'column'}} >

          <Box width={{ sm:"30%",xs:'100%' }}>
            <Attendance Data={percentageData} />
          </Box>

          <Box width={{sm:'70%',xs:'100%'}}>
            <AppCalendar  />
          </Box>

      </Stack>

      <Stack justifyContent={"center"}  spacing={5} direction={{ xs:'column' , sm:'row'}} >

          <Box width={{sm:"65%",xs:'100%'}}  >
            <Registration/>
          </Box>
          <Box width={{sm:"35%",xs:'100%'}}>
            <Requests/>
          </Box>

      </Stack>

      </Stack>
 </>
}
