import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { use } from 'i18next'
import { useTranslation } from 'react-i18next'
import Attendance from 'src/features/dashboard/attendance'
import AppCalendar from 'src/features/dashboard/calendar'
import Registration from 'src/features/dashboard/registration/components/DataGrid'
import Requests from 'src/features/dashboard/requests'



export default function Dashboard() {


  return <>
  <Stack  justifyContent={"center"}>




    <Stack width={"100%"}  direction={"row"} justifyContent={"space-between"}  spacing={4} >
    <Box width={"30%"}>
  <Attendance/>

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
