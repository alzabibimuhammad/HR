// ** React Imports
import { useEffect, useState } from 'react'
import { Box, Stack } from '@mui/system'

// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** FullCalendar & App Components Imports
import DatePicker from 'react-datepicker'


// ** Actions
import {
  fetchEvents,

} from 'src/store/apps/calendar'
import CalendarWrapper from 'src/@core/styles/libs/fullcalendar'
import SidebarLeft from './SidebarLeft.jsx'

import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next';

const calendarsColor = {
  Personal: 'error',
  Business: 'primary',
  Family: 'warning',
  Holiday: 'success',
  ETC: 'info'
}

const AppCalendar = () => {
  // ** States
  const [calendarApi, setCalendarApi] = useState(null)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [addEventSidebarOpen, setAddEventSidebarOpen] = useState(false)
  const { t } = useTranslation()

  // ** Hooks
  const { settings } = useSettings()
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // ** Vars

  const { skin, direction } = settings
  const mdAbove = useMediaQuery(theme => theme.breakpoints.up('md'))
  useEffect(() => {
    dispatch(fetchEvents(store?.selectedCalendars))
  }, [dispatch, store?.selectedCalendars])

  return (
    <CalendarWrapper
      className='app-calendar'
      sx={{
        boxShadow: skin === 'bordered' ? 0 : 6,
        ...(skin === 'bordered' && { border: theme => `1px solid ${theme.palette.divider}` })
      }}
    >


<Stack  direction={{sm: "row",xs:'column' }} justifyContent={"space-between"}>


      <Box sx={{   p: 6, pb: 0,  borderRadius: 1, height:"360px",width:"50%"}}>
        <Typography variant="body1" color="initial">{t('Calendar')}</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar/>
     </LocalizationProvider>
      </Box>
      <Box sx={{   p: 6, pb: 0,  borderRadius: 1,width:"100%",marginLeft:"30px" }} >
      <Typography variant="body1" color="initial">{t('Events')}</Typography>
         <SidebarLeft/>
      </Box>
      </Stack>

    </CalendarWrapper>
  )
}

export default AppCalendar
