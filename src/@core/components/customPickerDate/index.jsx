import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';

export  const CustomDatePicker = ({ selectedDate, handleDateChoose }) => {
  const [view, setView] = useState('month');
  const [startDate, setStartDate] = useState(new Date());
  const [showMonthPicker, setShowMonthPicker] = useState('day');

  const toggleDatePickerMonth = () => {
    setStartDate(new Date());
    setShowMonthPicker('month');
  };

  const toggleDatePickerDay = () => {
    setStartDate(new Date());
    setShowMonthPicker('day');
  };
  
  const toggleDatePickerYear = () => {
    setStartDate(new Date());
    setShowMonthPicker('year');
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
            <Box sx={{display:'flex', justifyContent:'end' }}>
            <Button variant='contained' color='secondary'  sx={{mr:2 ,backgroundColor: showMonthPicker === 'day' ? '#6AB2DF' : 'secondary'}} onClick={toggleDatePickerDay}>
        Day
      </Button>
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
            onChange={(date) => setStartDate(date)}
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

