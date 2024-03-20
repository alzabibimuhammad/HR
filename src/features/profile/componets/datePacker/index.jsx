/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { useState, useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useSelector } from 'react-redux'
import { Box, Stack } from '@mui/system'
import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { useReportByDay } from 'src/features/Report/hooks/useReportByDay'
import { ProfilteDate } from 'src/utiltis/profileDatePicker'
import { useTranslation } from 'react-i18next'
import { DateFormateOfMonth } from 'src/utiltis/DateFormateOfMonth'
import { DateFormateOfYear } from 'src/utiltis/DateFormateOfYear'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function DatePacker({ setUserData, SetSelectedDate }) {
  const {t} = useTranslation()

  const [startDate, setStartDate] = useState(new Date())
  const store = useSelector(state => state.user)

  const [showMonthPicker, setShowMonthPicker] = useState('day')
  const [id, setUserId] = useState(store?.id)

  const { mutate: ReportDay, data, isloading } = useReportByDay()

  const DayDate = new Date()
  const Currentday = DayDate.getDate()
  const CurrentMonth = DayDate.getMonth()
  const CurrentYear = DayDate.getFullYear()

  const FormateDayDate = CurrentYear + '-' + ( Number(CurrentMonth+1) < 10 ? '0' : '') + Number(CurrentMonth+1) + '-' + Currentday +'';

  useEffect(() => {
    const formData = new FormData()

    formData.append('user_id', store.userId)

    formData.append('date', FormateDayDate)

    SetSelectedDate(FormateDayDate)
    setUserId(store?.user_id)

    ReportDay({data:formData,date:FormateDayDate})

  }, [store])

  useEffect(() => {
    setUserData(data)
  }, [data])

  let dateViews = [];
  if (showMonthPicker === 'day') {
    dateViews = ['day'];
  } else if (showMonthPicker === 'month') {
    dateViews = ['month'];
  } else if (showMonthPicker === 'year') {
    dateViews = ['year'];
  }


  const handelSendReport = date => {
    let formattedDate
    if(showMonthPicker=='day')
    {
      formattedDate=ProfilteDate(date) + 1
    }
    if(showMonthPicker=='month')
    {
      formattedDate=DateFormateOfMonth(date)
    }
    if(showMonthPicker=='year')
    {
      formattedDate=DateFormateOfYear(date)
    }


    setStartDate(date)

    const formData = new FormData()

    formData.append('user_id', store.userId)

    formData.append('date', formattedDate)
    SetSelectedDate(formattedDate)

    ReportDay({data:formData,date:formattedDate})

  }

  const toggleDatePickerDay = () => {
    setShowMonthPicker('day');
  };

  const toggleDatePickerMonth = () => {
    setShowMonthPicker('month');
  };

  const toggleDatePickerYear = () => {
    setShowMonthPicker('year');
  };



  return (

    <Card sx={{width:"100%",borderRadius:"12px",height:"94%"}}>
        <CardContent>
        <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#8090A7' }}>{t('Filter')} </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end',marginBottom:"10px" }}>
          <Button
            variant='contained'
            color='secondary'
            sx={{ mr: 2, backgroundColor: showMonthPicker === 'day' ? '#6AB2DF' : 'secondary' }}
            onClick={toggleDatePickerDay}
          >
            {t('Day')}
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={toggleDatePickerMonth}
            sx={{ mr: 2, backgroundColor: showMonthPicker === 'month' ? '#6AB2DF' : 'secondary' }}
          >
            {t('Month')} {' '}
          </Button>
          <Button
            variant='contained'
            color='secondary'
            onClick={toggleDatePickerYear}
            sx={{mr: 2, backgroundColor: showMonthPicker === 'year' ? '#6AB2DF' : 'secondary' }}
          >
            {t('Year')}
          </Button>
        </Box>


            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
              views={dateViews}
              onChange={handelSendReport}
              sx={{position:"relative"}}
              />
            </LocalizationProvider>
        </CardContent>
    </Card>

  )
}

export default DatePacker
