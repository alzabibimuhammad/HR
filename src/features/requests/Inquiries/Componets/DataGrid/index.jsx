import React, { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';
import useInquiriesColumns from '../../Hooks/useInquiriesColumns';
import Alert from '@mui/material/Alert';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InquiriesData } from '../../infrastructure';
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/system';

const Inquiries = ({ rows }) => {
  const columns = useInquiriesColumns();
  const [openParent, setOpenParent] = useState(false);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [cleared, setCleared] = useState(false);

  const {t} = useTranslation()

  const handleDrawerOpen = () => {
    setOpenParent(true);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleDateChange = (date) => {
  };

  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000',
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0',
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000',
        },
      },
    },
  };

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [cleared]);



  return (
    <>
      <Grid container spacing={4}>
        <Grid  item xs={12}>
          <Card>
            <CardContent>
            <Typography  variant='h4' paddingBottom={'10px'}>
        {t("Inquiries List")}
        </Typography>
              <Stack
                direction={{ sm:'row',xs:'column' }}
                width={'100%'}
                sx={{
                  gap: '10px',
                  width: '100%',
                  mb:"12px"
                }}
              >
                <TextField
                  select
                  value={role}
                  onChange={handleRoleChange}
                  label={t('Title')}
                  size='small'
                  fullWidth
                >
                  <MenuItem value="">{t('Select Role')}</MenuItem>
                  <MenuItem value="admin">{t('Admin')}</MenuItem>
                  <MenuItem value="customer">{t('Customer')}</MenuItem>
                  <MenuItem value="employee">{t('Employee')}</MenuItem>
                </TextField>

                <TextField
                  select
                  size='small'
                  fullWidth
                  value={status}
                  onChange={handleStatusChange}
                  label={t('Select Status')}

                >
                  <MenuItem value="">{t('Select Status')}</MenuItem>
                  <MenuItem value="active">{t('Active')}</MenuItem>
                  <MenuItem value="notActive">{t('Not Active')}</MenuItem>
                </TextField>
                <TextField
                type='date'
                size='small'
                fullWidth
                />

              </Stack>

              <Divider sx={{ m: '0 !important' }} />

              <DataGrid
                columns={columns}
                rows={InquiriesData(rows) || []}
                sx={gridStyles.root }
                rowHeight={120}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Inquiries;
