import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useReportByDay } from 'src/features/Report/hooks/useReportByDay'
import { FormateDate } from 'src/utiltis/DateFormate'
import { DateFormateOfMonth } from 'src/utiltis/DateFormateOfMonth'
import { DateFormateOfYear } from 'src/utiltis/DateFormateOfYear'
import { ProfilteDate } from 'src/utiltis/profileDatePicker'

export const CustomDatePicker = ({ setUserData, selectedDate, handleDateChoose }) => {
  const {t} = useTranslation()
  const [view, setView] = useState('month')
  const [startDate, setStartDate] = useState(new Date())
  const store = useSelector(state => state.user)

  const [showMonthPicker, setShowMonthPicker] = useState('day')
  const [id, setUserId] = useState(store?.id)

  const { mutate: ReportDay, data, isloading } = useReportByDay()
  console.log("🚀 ~ CustomDatePicker ~ data:", data)

  const DayDate = new Date()
  const Currentday = DayDate.getDate()
  const CurrentMonth = DayDate.getMonth()
  const CurrentYear = DayDate.getFullYear()

  const FormateDayDate = CurrentYear + '-' + ( Number(CurrentMonth+1) < 10 ? '0' : '') + Number(CurrentMonth+1) + '-' + Currentday +'';

  useEffect(() => {
    const formData = new FormData()

    formData.append('user_id', store.userId)

    formData.append('date', FormateDayDate)


    setUserId(store?.user_id)

    ReportDay({data:formData,date:FormateDayDate})

  }, [store])

  useEffect(() => {
    setUserData(data)
  }, [data])

  const toggleDatePickerMonth = () => {
    setStartDate(new Date())

    setShowMonthPicker('month')
  }

  const handelSendReport = date => {
    let formattedDate
    if(showMonthPicker=='day')
    {
      formattedDate=ProfilteDate(date)
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

    ReportDay({data:formData,date:formattedDate})

  }

  const toggleDatePickerDay = () => {
    setStartDate(new Date())
    setShowMonthPicker('day')
  }

  const toggleDatePickerYear = () => {
    setStartDate(new Date())
    setShowMonthPicker('year')
  }

  const datePickerStyle = {
    width: '600px' // Set your desired width
  }

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#8090A7' }}>{t('Filter')} </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
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
            sx={{ mr: 2, backgroundColor: showMonthPicker === 'year' ? '#6AB2DF' : 'secondary' }}
          >
            {t('Year')}
          </Button>
        </Box>
      </CardContent>

      <DatePickerWrapper
        sx={{
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' }
        }}
      >
        <DatePicker
          inline
          selected={startDate}
          onChange={date => handelSendReport(date)}
          dateFormat={showMonthPicker ? 'MMM' : 'yyyy'}
          showMonthYearPicker={showMonthPicker === 'month'}
          showYearPicker={showMonthPicker === 'year'}
          fixedHeight
          calendarClassName='rasta-stripes'
          showFourColumnMonthYearPicker
          yearItemNumber={9}
          style={{
            fontSize: '16px', // Set the font size
            fontWeight: 'bold' // Set the font weight
            // Add any other inline styles as needed
          }}
        />
      </DatePickerWrapper>
    </Card>
  )
}
