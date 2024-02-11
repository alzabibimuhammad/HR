import React, { useState } from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import useSecretariatsColumns from '../../hooks/useSecretariatsColumns'
import { SecretariatsData } from '../../infrastructure'
import AddIcon from '@mui/icons-material/Add'
import DrawerFormAdd from '../DrawerAdd'
const SecretariatsTable = ({ rows }) => {
  const columns = useSecretariatsColumns()

  const [openAdd, setOpenAdd] = React.useState(false)

  const { t } = useTranslation()

  const [fdata, setfdata] = useState(rows)
  useEffect(() => {
    setfdata(rows)
  }, [rows])

  const handleDate = e => {
    const date = e.target.value

    let searchData
    if (!date) {
      setfdata(rows)
    } else {
      searchData = rows?.filter(element => {
        return element?.received_date == date
      })
      setfdata(searchData)
    }
  }

  const handelSearch = event => {
    const searchText = event.target.value
    let searchData
    if (!searchText) {
      setfdata(rows)
    } else {
      searchData = rows?.filter(element => {
        return (
          element?.user?.first_name?.toLowerCase()?.includes(searchText?.toLowerCase()) ||
          element?.user?.last_name?.toLowerCase()?.includes(searchText?.toLowerCase())
        )
      })
      setfdata(searchData)
    }
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
  const handleAdd=_=>{
    setOpenAdd(true)
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant='h4' paddingBottom={'10px'}>
            {t('Secretariats List')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={3}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Stack direction={{ sm: 'row', xs: 'row' }} justifyContent={'space-between'}>
              <TextField
                placeholder={t('Search')}
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
                sx={{ width: '50%', paddingLeft: '8px', backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}
                size='small'
              />
              <Button
                sx={{
                  backgroundColor: '#6AB2DF',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#6ab2df', color: '#fff' }
                }}

                onClick={handleAdd}
              >
                <Stack  direction={'row'}>
                  <AddIcon />
                  <Typography color={'#fff' }>{t('Add')}</Typography>
                </Stack>
              </Button>
              {openAdd?<DrawerFormAdd open={openAdd} setOpenParent={setOpenAdd}  />:null}
            </Stack>
            <Stack direction={{ xs: 'column', sm: 'column' }} spacing={2} width={{ sm: '40%', xs: '100%' }}>
              <Typography sx={{ fontSize: '16px', marginTop: '5px' }}>{t('Filters')}</Typography>

              <TextField
                fullWidth
                type='date'
                onChange={handleDate}
                SelectProps={{
                  displayEmpty: true
                }}
                size='small'
              />
            </Stack>

            {rows ? (
              <CustomDataGrid columns={columns} sx={gridStyles.root} rows={SecretariatsData(fdata) || []} />
            ) : null}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default SecretariatsTable