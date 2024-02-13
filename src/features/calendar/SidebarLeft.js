import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import DatePicker from 'react-datepicker'
import Icon from 'src/@core/components/icon'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { RequestPage } from '@mui/icons-material'
import { FormateDate } from 'src/utiltis/DateFormate'
import { useGetEventByDay } from './hooks/useGetEventByDay'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Stack, padding } from '@mui/system'

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
  const { t } = useTranslation()

  const colorsArr = calendarsColor ? Object.entries(calendarsColor) : []
  const { mutate: getEvent, isLoading, data: DataEventByDay } = useGetEventByDay()
  const [selectedDate, SetSelectedDate] = useState()

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

  const handleDateChoose = date => {
    SetSelectedDate(date)
    const formattedDate = FormateDate(date)
    let formattedAfterformatted = new Date(formattedDate)
    let d = formattedAfterformatted.getDate() + 1
    let m =
      (Number(formattedAfterformatted.getMonth() + 1) < 10 ? '0' : '') + Number(formattedAfterformatted.getMonth() + 1)
    let y = formattedAfterformatted.getFullYear()
    const FinalformattedDate = `${y}-${m}-${d}`
    getEvent(FinalformattedDate)
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
          <Typography sx={{ color: '#8090A7', width: '93px', height: '24px', marginLeft: '10px' }} variant='h3'>
            {t('Calendar')}
          </Typography>
        </Box>

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

        <Box sx={{ p: 4, width: '100%' }} height={'350px'} style={{ overflow: 'auto' }}>
          <Typography mb={2} sx={{ fontWeight: '600', fontSize: '20px', color: '#131627' }}>
            {t('Today Event')}
          </Typography>
          {Array.isArray(DataEventByDay?.data?.data) && DataEventByDay.data.data.length > 0 ? (
            <Stack sx={{ width: '100%' }} spacing={1}>
              {DataEventByDay.data.data.map(event => (
                <Stack
                  direction={'row'}
                  justifyContent={'start'}
                  sx={{ padding: 0, margin: 0, width: '100%', height: '60px', overflow: 'hidden' }}
                  className='parent'
                  key={event.id}
                >
                  <Stack direction={'column'}>
                    <span style={{ padding: 0, margin: 0 }} className='child'>
                      {event.day}
                    </span>

                    <Typography width={'54px'} p={0} ml={0} variant='p' fontSize={10}>
                      {event.start}
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      width: '130px',
                      height: '100%',
                      textAlign: 'start',
                      overflowWrap: 'break-word',
                      wordWrap: 'break-word',
                      lineHeight: '15px',
                      overflowY: 'auto',
                      '&::-webkit-scrollbar': {
                        width: '0px' /* This will hide the scrollbar on WebKit browsers (e.g., Chrome, Safari) */
                      },
                      scrollbarWidth: 'none' /* This will hide the scrollbar on Firefox */
                    }}
                  >
                    <Typography variant='p' fontSize={12} color={'#000'} style={{ padding: 0, margin: 0 }}>
                      {event.description}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          ) : (
            <Image width={250} height={200} src='/images/notRequest.svg' alt='Alternate Text' />
          )}
        </Box>
      </Drawer>
    )
  } else {
    return null
  }
}

export default SidebarLeft
