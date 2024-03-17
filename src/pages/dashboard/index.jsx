import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Attendance from 'src/features/dashboard/attendance'
import AppCalendar from 'src/features/dashboard/calendar'
import Registration from 'src/features/dashboard/registration/components/DataGrid'
import Requests from 'src/features/dashboard/requests'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendancePercentage, getRegisteration, storeAttendanceLogs } from './store'
import { Grid } from '@mui/material'
import Loading from 'src/features/dashboard/loadingAttendance'
import { useTranslation } from 'react-i18next'

export default function Dashboard() {
  const store = useSelector(state => state.Dashboard)


  const [registration, setRegistration] = useState([])
  const [percentageData, setpercentageData] = useState([])

  const {t} = useTranslation()
  const dispatch = useDispatch()
  const date = new Date()

  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  const formattedDate = `${year}-${month}-${day}`

  useEffect(() => {
    dispatch(getAttendancePercentage())
    setpercentageData(store?.AttendancePercentage)

    dispatch(getRegisteration(formattedDate))
    setRegistration(store?.Registertion)

  }, [dispatch, store?.AttendancePercentage?.length, store?.Registertion?.length])

  return (
    <>
    {/* <Loading/> */}
    <Grid container spacing={6} sx={{ overflow: 'hidden' }}>
      <Grid item sm={8} xs={12}>

        <Box  sx={{ backgroundColor: '#fff',borderRadius:"12px" }}>
          <AppCalendar />
        </Box>

      </Grid>

      <Grid sx={{position:"relative",borderRadius:"12px"}} item sm={4} xs={12}>
        <Attendance  Data={percentageData} />
      </Grid>
<p className='Attendance' style={{position:"absolute",right:"18%",marginTop:"37px",fontSize:"20px",fontWeight:"600",color:"#8090a7"}}>{t('Attendance')}</p>

        <Grid item sm={8} xs={12} >
        <Registration Data={registration} />
        </Grid>

        <Grid item sm={4} xs={12} height={{sm:'634.5px',xs:'100%'}} >
        <Requests />


        </Grid>

    </Grid>
    </>
  )
}
