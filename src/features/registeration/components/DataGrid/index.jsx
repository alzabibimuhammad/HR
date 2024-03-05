import React, { useEffect, useState } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography, TextField, CircularProgress } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import PageHeader from 'src/@core/components/page-header'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { RegistrationData, RegistrationsData } from '../../infrastructure'
import { Box, Stack } from '@mui/system'
import useRegistrationColumn from '../../Hook/useRegistrationColumn'
import Show10 from 'src/@core/components/show10'
import useShowPolicies from 'src/features/policies/hook/useShowPolicies'

const Registration = ({ Data, setFilterDate,filterDate }) => {
  const columns = useRegistrationColumn()
  const [show, setShow] = React.useState(10);
  const [search,setSearch] = useState()
  const [status, setStatus] = useState('');

  let data  = Data?.data
  const {data:policy,isLoading}=useShowPolicies()
  const distructPolicy = policy?.data?.data?.policy?.work_time

  const [state , setState] = useState(false)

  const [rows, setRows] = useState()
  let StatusData = new Set([])
  useEffect(() => {
  let filterData  = RegistrationData(data,filterDate,{start:distructPolicy?.start_time,end:distructPolicy?.end_time})
    if(status)filterData = filterData?.filter((value,index)=> value?.status == status)
    if(search)filterData = filterData?.filter((value,index)=>(
        value?.first_name?.toLowerCase().includes(search.toLowerCase())||
        value?.last_name?.toLowerCase().includes(search.toLowerCase())
    ))
    setRows(filterData)
    setState(true)

  }, [Data,search,status,policy])

  const { t } = useTranslation()



  const handelSearch = event => {
    const searchData = event.target.value
    if(searchData)
      setSearch(searchData)
    else
      setSearch(null)
  }
  const handelDate = event=>{
    setFilterDate(event.target.value)
    setState(false)
  }

  const handleStatusChange = (e) => {
    if(e.target.value)
    setStatus(e.target.value);
    else
      setStatus('')
  };


  rows?.forEach(element => {
    StatusData?.add(element?.status)
  })

  return (
    <Stack height={'100%'}>
      <Typography className='Pagetitle' >{t('Registeration')}</Typography>
      <Card sx={{ marginTop:'24px' }} >
        <CardContent>

          <Stack direction={'column'} >
          <Stack direction={'row'} width={{sm:'100%',xs:'100%'}} spacing={3} alignItems={'center'}>
                <Box mb={2} width={{ sm:'120px',xs:'100px' }} >
                  <Show10 setShow={setShow}/>
                </Box>
            <TextField
              placeholder={t('Search')}

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
              sx={{ backgroundColor: '#F5F7FA',border:'none', boxShadow: 'none',width:{sm:'320px',xs:'100%'} }}
              size='small'
            />
            </Stack>
              <Stack direction={{sm:'row',xs:'column'}} spacing={3} marginTop={'10px'} alignItems={'center'} >
                  <Typography className='filterTitle' display={{ xs:'none',sm:'block',md:'block' }}>{t('Filter')}</Typography>
                  <TextField
                  type='date'
                  sx={{ width:{sm:'320px',xs:'100%'} }}
                  size='small'
                  onChange={handelDate}

                  />

                <TextField
                    select
                    fullWidth
                    defaultValue="Status"
                    sx={{ width:{sm:'320px',xs:'100%'} }}

                    SelectProps={{
                      value: status,
                      displayEmpty: true,
                      onChange: handleStatusChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Status")}`}</MenuItem>
                    {rows?.length&&
                    Array.from(StatusData).map(element => (
                  <MenuItem key={element} value={element}>
                    {t(element)}
                  </MenuItem>
                ))
                }
                </TextField>
              </Stack>

            {policy &&state ?
          <CustomDataGrid columns={columns} show={show} rows={rows || [] } />
          :<Box sx={{ height:'50vh',display:'flex',justifyContent:'center',alignItems:'center' }} ><CircularProgress/></Box>}
          </Stack>


        </CardContent>
      </Card>
    </Stack>
  )
}


export default Registration
