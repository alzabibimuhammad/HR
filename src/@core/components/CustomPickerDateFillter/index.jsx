import React, { useEffect, useRef, useState } from 'react';
import { Modal, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker';
import { DateFormateOfMonth, DateFormateOfYear } from 'src/utiltis/DateFormate';

export const CustomDatePickerFillter = ({ selectedDate, handleDateChoose, handleClose }) => {
  const [view, setView] = useState('month');
  const [startDate, setStartDate] = useState(new Date());
  const [showMonthPicker, setShowMonthPicker] = useState('month');

  const { t } = useTranslation();

  const toggleDatePickerMonth = () => {
    setStartDate(new Date());
    setShowMonthPicker('month');
  };

  const toggleDatePickerYear = () => {
    setStartDate(new Date());
    setShowMonthPicker('year');
  };

  const handleDateSend = (date) => {
    const formattedDate = showMonthPicker === 'year' ? DateFormateOfYear(date) : DateFormateOfMonth(date);
    setStartDate(date);
    handleDateChoose(formattedDate);
    handleClose();
  };

  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4, maxWidth: '600px' }}>
        <Typography sx={{ fontSize: '20px', fontWeight: '600', color: '#8090A7', mb: 2 }}>
          {t('Filter')}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button variant='contained' color='secondary' onClick={toggleDatePickerMonth} sx={{ mr: 2, bgcolor: showMonthPicker === 'month' ? '#6AB2DF' : 'secondary' }}>
            {t('Month')}
          </Button>
          <Button variant='contained' color='secondary' onClick={toggleDatePickerYear} sx={{ mr: 2, bgcolor: showMonthPicker === 'year' ? '#6AB2DF' : 'secondary' }}>
            {t('Year')}
          </Button>
        </Box>
        <DatePickerWrapper     sx={{
          width: '100%',

          display: 'flex',
          justifyContent: 'center',
          '& .react-datepicker': { boxShadow: 'none !important', border: 'none !important' }
        }}>
          <DatePicker
            inline
            selected={startDate}
            onChange={handleDateSend}
            dateFormat={showMonthPicker ? 'MMM' : 'yyyy'}
            showMonthYearPicker={showMonthPicker === 'month'}
            showYearPicker={showMonthPicker === 'year'}
            fixedHeight
            calendarClassName='rasta-stripes'
            showFourColumnMonthYearPicker
            yearItemNumber={9}
            style={{
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          />
        </DatePickerWrapper >
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Button variant="outlined" onClick={handleClose} sx={{ mr: 2 }}>
            {t('Cancel')}
          </Button>
          <Button variant="contained" onClick={handleDateSend}>
            {t('Send')}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
