import { Button, ButtonGroup, Card, CardContent, CardHeader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { useReportByDay } from 'src/features/Report/hooks/useReportByDay';
import { useGetRatingById } from 'src/features/profile/ratingTabel/hooks/useGetRatingById';
import { setRatingUser } from 'src/store/apps/user';


import { FormateDate } from 'src/utiltis/DateFormate';

export  const CustomDatePickerRating = ({handleClose }) => {
  const [view, setView] = useState('month');
  const [startDate, setStartDate] = useState(new Date());
  const [showMonthPicker, setShowMonthPicker] = useState('day');
  const {mutate:getData ,data:rateData, isloading}= useGetRatingById()
  const store = useSelector(state => state.user)
  const CloseRef = useRef(null);
  const [open, setOpen] = React.useState(false);

  const {t} = useTranslation()

  function Close() {
    handleClose(true)
  }

  const handleClickOutside = (event) => {

    if (CloseRef.current && !CloseRef.current.contains(event.target)) {

      handleClose(true);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [CloseRef, handleClickOutside]);

  const toggleDatePickerMonth = () => {
    setStartDate(new Date());

    setShowMonthPicker('month');
  };


  const handelSendReport = (date) => {
    const formattedDate = FormateDate(date);
    const formData = new FormData()
    formData.append('user_id',store.userId)
    formData.append('date',formattedDate)
    setStartDate(date)


    getData({user_id:store.userId,date:formattedDate})

    handleClose(true);


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
    <Card
    ref={CloseRef}
    sx={{ width: '426px',
        height: '441px'}}>
        <CardContent>
        <Typography sx={{ fontSize:'20px',fontWeight:'600',color:'#8090A7' }}>
        {t('Filter')}
            </Typography>
            <Box sx={{display:'flex', justifyContent:'end' }}>
            <Button variant='contained' color='secondary'  sx={{mr:2 ,backgroundColor: showMonthPicker === 'day' ? '#6AB2DF' : 'secondary'}} onClick={toggleDatePickerDay}>
            {t('Day')}
      </Button>
      <Button variant='contained' color='secondary' onClick={toggleDatePickerMonth}  sx={{mr:2, backgroundColor: showMonthPicker === 'month' ? '#6AB2DF' : 'secondary'}}>
      {t('Month')}       </Button>
      <Button variant='contained' color='secondary'  onClick={toggleDatePickerYear} sx={{mr:2,backgroundColor: showMonthPicker === 'year' ? '#6AB2DF' : 'secondary'}}>
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

          <DatePicker inline selected={startDate}
            onChange={(date) => handelSendReport(date)}
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

