import React, { useState, useEffect } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { DataGrid } from '@mui/x-data-grid'
import useInquiriesColumns from '../../Hooks/useInquiriesColumns'
import Alert from '@mui/material/Alert'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { InquiriesData } from '../../infrastructure'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mui/system'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import Show10 from 'src/@core/components/show10'

const Inquiries = ({ rows }) => {
  const columns = useInquiriesColumns()
  const [status, setStatus] = useState('')
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [cleared, setCleared] = useState(false)
  const [show, setShow] = useState(10)


  const [fdata, setFdata] = useState(rows)
  useEffect(() => {
    setFdata(InquiriesData(rows))
  }, [rows])

  let titleData = new Set([]);
  InquiriesData(rows)?.forEach(element => {
    titleData.add(element?.Title)
  });

  const { t } = useTranslation()


  const handleStatusChange = e => {
    setStatus(e.target.value)
    if(e.target.value)
     setStatus(e.target.value)
    else
      setStatus(null)

  }
  useEffect(() => {
      let filteredData = InquiriesData(rows);

      if (status)filteredData = filteredData.filter((value,index) => value.status === status);
      if (title)filteredData = filteredData.filter((value,index) => value.Title === title);
      if (date)filteredData = filteredData.filter((value,index) => value.Date === date);
      setFdata(filteredData);

  }, [status, title, date, rows]);

  const handleTitleChange =e=>{
    const titleData = e.target.value


    if(titleData)
      setTitle(titleData)
    else
      setTitle(null)
    }

  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000'
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0'
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000'
        }
      }
    }
  }

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false)
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [cleared])

  const handelSearch = event => {
    const searchText = event.target.value
    if (searchText) {
      const filterdData = rows?.data?.data?.filter((value, index) => {
        return (
          value.user.first_name.toLowerCase().includes(searchText.toLowerCase()) ||
          value.user.last_name.toLowerCase().includes(searchText.toLowerCase())
        )
      })
      setFdata(InquiriesData({ data: { data: filterdData } }))
    } else setFdata(InquiriesData(rows))
  }

  const handleDate =e=>{
    const dateChange = e.target.value
    if(dateChange)
    setDate(dateChange)
  else
    setDate(null)

  }
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant='h4' paddingBottom={'10px'}>
                {t('Inquiries List')}
              </Typography>
              <Stack direction={'row'} width={{ sm: '50%', xs: '100%' }} spacing={3} alignItems={'center'}>
                <Box mb={2}>
                  <Show10 setShow={setShow} />
                </Box>
                <TextField
                  placeholder={t('Search')}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <Box paddingRight={1}>
                        <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <g id='zoom-split'>
                            <path
                              id='Combined Shape'
                              fillRule='evenodd'
                              clipRule='evenodd'
                              d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                              fill='#8090A7'
                            />
                          </g>
                        </svg>
                      </Box>
                    )
                  }}
                  onChange={handelSearch}
                  sx={{ paddingLeft: '8px', backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}
                  size='small'
                />
              </Stack>
              <Stack
                direction={{ sm: 'row', xs: 'column' }}
                width={'100%'}
                alignItems={'center'}
                sx={{
                  gap: '10px',
                  width: '100%',
                  mb: '12px'
                }}
              >
                <TextField type='date' size='small' fullWidth onChange={handleDate} />
                <TextField
                  select
                  size='small'
                  fullWidth
                  value={title}
                  onChange={handleTitleChange}
                  label={t('Title')}
                >
                  <MenuItem value=''>{t('Title')}</MenuItem>
                  {Array.from(titleData).map(element => (
                      <MenuItem key={element} value={element}>{t(element)}</MenuItem>
                    ))}
                </TextField>
                <TextField
                  select
                  size='small'
                  fullWidth
                  value={status}
                  onChange={handleStatusChange}
                  label={t('Action')}
                >
                  <MenuItem value=''>{t('Action')}</MenuItem>
                  <MenuItem value='accepted'>{t('Approved')}</MenuItem>
                  <MenuItem value='rejected'>{t('Declined')}</MenuItem>
                  <MenuItem value='waiting'>{t('Waiting')}</MenuItem>
                </TextField>
              </Stack>

              <Divider sx={{ m: '0 !important' }} />

              <CustomDataGrid show={show} columns={columns} rows={fdata || []} sx={gridStyles.root} rowHeight={120} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Inquiries
