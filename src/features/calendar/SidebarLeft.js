// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icons Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { RequestPage } from '@mui/icons-material'
import { FormateDate } from 'src/utiltis/DateFormate'
import { useGetEventByDay } from './hooks/useGetEventByDay'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState } from 'react'


const SidebarLeft = props => {
  const {
    store,
    mdAbove,
    dispatch,
    calendarApi,
    calendarsColor,
    leftSidebarOpen,
    leftSidebarWidth,
    handleSelectEvent,
    handleAllCalendars,
    handleCalendarsUpdate,
    handleLeftSidebarToggle,
    handleAddEventSidebarToggle

  } = props
  const {t} = useTranslation()

  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []
const {mutate:getEvent,isLoading,data:DataEventByDay}=useGetEventByDay()
const[selectedDate,SetSelectedDate]=useState()

  const renderFilters = colorsArr.length
    ? colorsArr.map(([key, value]) => {
        return (
          <FormControlLabel
            key={key}
            label={key}
            sx={{ '& .MuiFormControlLabel-label': { color: 'text.secondary' } }}
            control={
              <Checkbox
                color={value}
                checked={store?.selectedCalendars.includes(key)}
                onChange={() => dispatch(handleCalendarsUpdate(key))}
              />
            }
          />
        )
      })
    : null

  const handleSidebarToggleSidebar = () => {
    handleAddEventSidebarToggle()
    dispatch(handleSelectEvent(null))
  }

  const handleDateChoose = (date) => {
    SetSelectedDate(date)
    const formattedDate = FormateDate(date);
    getEvent(formattedDate)
    calendarApi.gotoDate(date)


}
  if (renderFilters) {
    return (
      <Drawer
        open={leftSidebarOpen}
        onClose={handleLeftSidebarToggle}
        variant={mdAbove ? 'permanent' : 'temporary'}
        ModalProps={{
          disablePortal: true,
          disableAutoFocus: true,
          disableScrollLock: true,
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          zIndex: 3,
          display: 'block',
          position: mdAbove ? 'static' : 'absolute',
          '& .MuiDrawer-paper': {
            borderRadius: 1,
            boxShadow: 'none',
            width: leftSidebarWidth,
            borderTopRightRadius: 0,
            alignItems: 'flex-start',
            borderBottomRightRadius: 0,
            zIndex: mdAbove ? 2 : 'drawer',
            position: mdAbove ? 'static' : 'absolute'
          },
          '& .MuiBackdrop-root': {
            borderRadius: 1,
            position: 'absolute'
          }
        }}
      >

        <Box sx={{ p: 6, width: '100%' }}>
        <Typography sx={{color:"#8090A7",width:"93px",height:"24px",marginLeft:"10px"}} variant='h3'>{t('Calendar')}</Typography>
        </Box>

        {/* calender show data <Divider sx={{ width: '100%', m: '0 !important' }} /> */}

        <DatePickerWrapper
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' }
          }}
        >
          <DatePicker selected={selectedDate} inline onChange={date => handleDateChoose(date)} />
        </DatePickerWrapper>
        <Box sx={{ p: 7, width: '100%' }}>
          <Button fullWidth variant='contained' sx={{ '& svg': { mr: 2 } }} onClick={handleSidebarToggleSidebar}>
            <Icon icon='tabler:plus' fontSize='1.125rem' />
            {t('Add Event')}
          </Button>
        </Box>
        <Divider sx={{ width: '100%', m: '0 !important' }} />
        <Box sx={{ p: 7, width: '100%' }}>


        <Typography sx={{fontWeight:"600",fontSize:"20px",color:"#131627"}}>{t('Today Event')}</Typography>
        <Box sx={{width:"100%"}}>

        {Array.isArray(DataEventByDay?.data?.data) && DataEventByDay.data.data.length > 0 ? (
      DataEventByDay.data.data.map(event => (
        <div className="parent" key={event.id}>
          <div>
            <p><span className="child">{event.day}</span>{event.start}</p>
            {/* <p>{event.time}</p> */}
          </div>
          <div>
            <p className='description'>
              {event.description}
            </p>
          </div>
        </div>
      ))
    ) : (
      <Image
        width={250}
        height={200}
        src="/images/notRequest.svg"
        alt="Alternate Text"
      />
    )}
        </Box>
        </Box>
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
