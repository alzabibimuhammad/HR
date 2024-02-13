import { Card} from '@mui/material';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { DateFormateOfMonth } from 'src/utiltis/DateFormateOfMonth';

export  const CustomPickerManage = ({ selectedDate,setstate ,state }) => {
  const [startDate, setStartDate] = useState();
  const [showMonthPicker, setShowMonthPicker] = useState('month');


  const handelSendReport = (date) => {
    const formattedDate = DateFormateOfMonth(date);
    setStartDate(date)
    setstate(formattedDate)
    console.log("DateFormateOfMonth",date);

  };

  return (
    <Card sx={{ width: '400px',
        height: '400px',
        display:"flex",
        alignItems:"center"
        }}>


          <DatePickerWrapper
          sx={{
            width: '100%',
              height:"100%",
              marginTop:"50px",
            display: 'flex',
            justifyContent: 'center',
            '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' }
          }}
        >

          <DatePicker inline selected={startDate}
            onChange={(date) => handelSendReport(date)}
            dateFormat={showMonthPicker ? 'MMM' : 'yyyy'}
            showMonthYearPicker={showMonthPicker==='month'}
            showYearPicker={showMonthPicker==='year'}
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

