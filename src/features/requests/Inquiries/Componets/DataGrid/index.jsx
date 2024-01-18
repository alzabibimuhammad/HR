import React, { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { DataGrid } from '@mui/x-data-grid';
import useInquiriesColumns from '../../Hooks/useInquiriesColumns';
import Alert from '@mui/material/Alert';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { InquiriesData } from '../../infrastructure';

const Inquiries = ({ rows }) => {
  const columns = useInquiriesColumns(rows);
  const [openParent, setOpenParent] = useState(false);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [cleared, setCleared] = useState(false);


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
    console.log('Selected Date:', date);
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
            <CardHeader title="Filters" />
            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  width: '100%',
                  mb:"12px"
                }}
              >
                <TextField
                  select
                  value={role}
                  onChange={handleRoleChange}
                  label="Title"
                  size='medium'
                  sx={{width:"25%"}}
                >
                  <MenuItem value="">Select Role</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="customer">Customer</MenuItem>
                  <MenuItem value="employee">Employee</MenuItem>
                </TextField>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    sx={{width:"25%" }}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Select Date"
                        helperText="Clearable"
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {cleared && (
                                <Alert
                                  sx={{ position: 'absolute', bottom: 0, right: 0 }}
                                  severity="success"
                                >
                                  Field cleared!
                                </Alert>
                              )}
                            </React.Fragment>
                          ),
                        }}
                      />
                    )}
                  />
                </LocalizationProvider>
                <TextField
                  select
                  value={status}
                  onChange={handleStatusChange}
                  label="Select Status"
                  size='medium'
                  sx={{width:"25%"}}

                >
                  <MenuItem value="">Select Status</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="not-active">Not Active</MenuItem>
                </TextField>

              </Box>

              <Divider sx={{ m: '0 !important' }} />

              <DataGrid
                columns={columns}
                rows={InquiriesData(rows) || []}
                sx={gridStyles.root}
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
