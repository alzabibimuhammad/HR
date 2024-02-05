import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { FormateDate } from 'src/utiltis/DateFormate';
import { DateFormateOfMonth } from 'src/utiltis/DateFormateOfMonth';
import { DateFormateOfYear } from 'src/utiltis/DateFormateOfYear';

export  const CustomDatePickerSalary = ({ selectedDate, handleDateChoose }) => {
  const [view, setView] = useState('month');
  const [startDate, setStartDate] = useState(new Date());
  const [showMonthPicker, setShowMonthPicker] = useState('month');

  const toggleDatePickerMonth = () => {
    setStartDate(new Date());
    setShowMonthPicker('month');

  };



  const toggleDatePickerYear = () => {
    setStartDate(new Date());
    setShowMonthPicker('year');
  };

  const handleDateSend = (date) => {

    if(showMonthPicker==='year'){

      const formattedDate = DateFormateOfYear(date);
      setStartDate(date)
      handleDateChoose(formattedDate)
    }
    if(showMonthPicker==='month'){
      const formattedDate = DateFormateOfMonth(date);
      setStartDate(date)
      handleDateChoose(formattedDate)
    }

  };

  const handleDateSendMonth = (date) => {
    const formattedDate = DateFormateOfMonth(date);
    setStartDate(date)
    handleDateChoose(formattedDate)
  };

  const datePickerStyle = {
    width: '600px', // Set your desired width
  };



  return (
    <Card sx={{ width: '426px',
        height: '441px'}}>
        <CardContent>
        <Typography sx={{ fontSize:'20px',fontWeight:'600',color:'#8090A7' }}>
        Filter
            </Typography>
            <Box sx={{display:'flex', justifyContent:'center' }}>

      <Button variant='contained' color='secondary' onClick={toggleDatePickerMonth}  sx={{mr:2, backgroundColor: showMonthPicker === 'month' ? '#6AB2DF' : 'secondary'}}>
Month      </Button>
      <Button variant='contained' color='secondary'  onClick={toggleDatePickerYear} sx={{mr:2,backgroundColor: showMonthPicker === 'year' ? '#6AB2DF' : 'secondary'}}>
        Year
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

          <DatePicker inline selected={startDate}
            onChange={(date) => handleDateSend(date)}
            dateFormat={showMonthPicker ? 'MMM' : 'yyyy'}
            showMonthYearPicker={showMonthPicker==='month'}
            showYearPicker={showMonthPicker==='year'}
            fixedHeight
            calendarClassName="rasta-stripes"
            showFourColumnMonthYearPicker
            yearItemNumber={9}
            style={{
                fontSize: '16px', // Set the font size
                fontWeight: 'bold', // Set the font weight
                // Add any other inline styles as needed
              }}

          />
        </DatePickerWrapper>


  </Card>
  );
};

