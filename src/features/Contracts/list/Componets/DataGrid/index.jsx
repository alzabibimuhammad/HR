import React, { useEffect, useState } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import useContractColumns from '../../Hooks/useContractColumns'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ContractsData } from '../../infrastructure'
import { Box } from '@mui/system'

const List = ({ rows }) => {
  const [data , setData] = useState(rows)
  const columns = useContractColumns()
  const { t } = useTranslation()
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('')
  const [searchText, setsearchText] = useState('')

  const handleRoleChange = e => {
    setRole(e.target.value)
  }

  const handleStatusChange = e => {
    setStatus(e.target.value)
  }

  const handelSearch = event => {
    if(event.target.value)
    setsearchText(event.target.value.trim().toLowerCase())
    else
      setData(rows)
  };

  useEffect(()=>{
    const searchData = data?.data?.data?.data?.filter(val => {
      return (
        val?.user?.first_name.toLowerCase().includes(searchText) ||
        val?.user?.last_name.toLowerCase().includes(searchText)
      );
    })
    setData({data:{data:searchData}})


  },[searchText])



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

  return (
    <Card>
      <CardContent>
        <Typography variant='h4' paddingBottom={'10px'}>
        {t("Contract List")}
        </Typography>

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
        <Grid marginTop={'1%'} container spacing={2} alignItems={'center'} justifyContent={'space-around'}>
          <Grid item sm={12} xs={12}>
            <CustomDataGrid columns={columns} sx={gridStyles.root} rows={ContractsData(data) || []}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default List
