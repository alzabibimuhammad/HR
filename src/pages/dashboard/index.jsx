import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Attendance from 'src/features/dashboard/attendance'
import AppCalendar from 'src/features/dashboard/calendar'
import Registration from 'src/features/dashboard/registration/components/DataGrid'
import Requests from 'src/features/dashboard/requests'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendancePercentage } from './store'



export default function Dashboard() {


  const store = useSelector(state => state.Dashboard)

  const [percentageData,setpercentageData]=useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAttendancePercentage())
    setpercentageData(store?.AttendancePercentage)
  }, [dispatch,store?.AttendancePercentage.length])



  return <>

  <Stack  justifyContent={"center"}>




    <Stack width={"100%"}  direction={"row"} justifyContent={"space-between"}  spacing={4} >
    <Box width={"30%"}>
      <Attendance Data={percentageData} />

    </Box>

    <Box flex={1}>
      <AppCalendar/>
    </Box>
    </Stack>

    <Stack width={"100%"}  direction={"row"} justifyContent={"space-between"}  spacing={4} marginTop={"12px"} >

    <Box width={"70%"}>

<Registration/>
</Box>
    <Box width={"30%"}>

<Requests/>
</Box>

</Stack>



  </Stack>


  </>
}
