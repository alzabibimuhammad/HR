import React, { useState, useEffect } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { DataGrid } from '@mui/x-data-grid'
import useSystemColumns from '../../Hooks/useSystemColumns'
import Alert from '@mui/material/Alert'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mui/system'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { SystemData } from '../../infrastructure'
import Show10 from 'src/@core/components/show10'

const SystemTable = ({ rows }) => {
  const [show, setShow] = useState(10)
  const columns = useSystemColumns()
  const [title, setTitle] = useState()
  const [date, setDate] = useState()
  const [search, setSearch] = useState()
  const [fdata,setFdata] = useState(rows)


  let titleFilter = new Set([]);

  SystemData(rows)?.forEach(element => {
    titleFilter.add(element?.title)
  });


  const { t } = useTranslation()

  const handleTitleChange = e => {
    if(e.target.value)
      setTitle(e.target.value)
    else
      setTitle(null)

  }

  const handleDateChange = date => {
    if(date.target.value)
      setDate(date.target.value)
    else
      setDate(null)
  }
  const handelSearch = e => {
    if(e.target.value)
      setSearch(e.target.value)
    else
      setSearch(null)
  }

  useEffect(()=>{
    let FilterCon = SystemData(rows)
    if(date)FilterCon = FilterCon?.filter((value,index)=> date == value?.date)
    if(title)FilterCon =FilterCon?.filter((value,index)=>title == value?.title)
    if(search){
        FilterCon = FilterCon?.filter((value,index)=>{
        return (
          value.first_name.toLowerCase().includes(search.toLowerCase()) ||
          value.last_name.toLowerCase().includes(search.toLowerCase())
        )
      })
    }
    setFdata(FilterCon)
  },[rows,search,title,date])


  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Stack direction={'column'} spacing={3}>
                <Typography variant='h4'>{t('System')}</Typography>
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
                          <svg
                            width='14'
                            height='15'
                            viewBox='0 0 14 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g id='zoom-split'>
                              <path
                                id='Combined Shape'
                                fill-rule='evenodd'
                                clip-rule='evenodd'
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
                <Stack direction={{ sm: 'row', xs: 'column' }} width={'100%'} alignItems={{sm:'center',xs:'start'}} spacing={2}>
                  <Typography variant='h5'>{t('Filter')}</Typography>
                  <TextField type='date' size='small' fullWidth onChange={handleDateChange} />

                  <TextField select value={title} onChange={handleTitleChange} label={t('Title')} size='small' fullWidth>
                    <MenuItem value=''>{t('Title')}</MenuItem>
                    {Array.from(titleFilter).map(element => (
                      <MenuItem key={element} value={element}>{t(element)}</MenuItem>
                    ))}
                  </TextField>


                </Stack>

                <CustomDataGrid show={show} columns={columns} rows={fdata || []} rowHeight={70} />
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default SystemTable
