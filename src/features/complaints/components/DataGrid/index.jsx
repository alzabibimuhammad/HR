import React, { useEffect, useState } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography, TextField } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PageHeader from 'src/@core/components/page-header'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ComplaintsData, RegistrationData, RegistrationsData } from '../../infrastructure'
import { Box, Stack } from '@mui/system'
import useComplaintsColumn from '../../Hook/useComplaintsColumn'
import { FormateDate } from 'src/utiltis/DateFormate'

const ComplaintsTable = ({ Data }) => {
  const columns = useComplaintsColumn()

  const [rows, setRows] = useState()

  useEffect(() => {
    setRows(ComplaintsData(Data))
  }, [Data])

  const { t } = useTranslation()

  const theme = useTheme()

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary
  }))
  const [searchText, setSearchText] = useState()
  const handelSearch = event => {
    const value = event.target.value
    if (value) setSearchText(value)
    else setRows(ComplaintsData(Data))
  }
  useEffect(() => {
    let searchData
    searchData = rows?.filter(element => {
      return (
        element?.first_name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
        element?.last_name?.toLowerCase()?.includes(searchText?.toLowerCase())
      )
    })

    if (searchData?.length) setRows(searchData)
    else setRows([])
  }, [searchText])

  const [FilterDate, setFilterDate] = useState()

  const handelDate = event => {
    setRows(ComplaintsData(Data))
    const value = event.target.value
    if (value) setFilterDate(value)
    else setRows(ComplaintsData(Data))
  }

  useEffect(() => {
    let date = rows?.filter(element => {
      return FilterDate == element?.date
    })
    if (date?.length) setRows(date)
    else setRows([])
  }, [FilterDate])

  return (
    <Stack height={'100%'}>
      <Card>
        <CardContent>
          <Typography variant='h4' paddingBottom={'10px'}>
            {t('Complaints List')}
          </Typography>
          <Stack direction={'column'} spacing={3}>
            <TextField
              placeholder={t('Search')}
              fullWidth
              onChange={handelSearch}
              InputProps={{
                startAdornment: (
                  <Box paddingRight={1}>
                    <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
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
              sx={{ backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}
              size='small'
            />
            <Stack
              alignItems={'center'}
              width={{ sm: '50%', xs: '100%' }}
              direction={{ sm: 'row', xs: 'row' }}
              spacing={6}
            >
              <Typography>{t('Filter')}</Typography>
              <TextField type='date' fullWidth size='small' onChange={handelDate} />
            </Stack>

            <CustomDataGrid columns={columns} rows={rows || []} />
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default ComplaintsTable