import React, { useState } from 'react'
import { Card, CardContent, MenuItem, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { SalaryData } from '../../infrastructure'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttendancePercentage } from 'src/pages/dashboard/store'
import useSalaryColumns from '../../hooks/useUserColumns'
import { CustomDatePicker } from 'src/@core/components/customPickerDate'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import { CustomDatePickerSalary } from 'src/@core/components/customPickerSalary'
import { useGetDataByMonth } from '../../hooks/useGetDataByMonth'
import Show10 from 'src/@core/components/show10'

const SalaryDataGrid = ({ rows }) => {

  const totalSalaries = SalaryData(rows)?.reduce((sum, value) => sum + value.total, 0);

  let roleData = new Set([]);
  rows?.data?.data?.forEach(element => {
    roleData.add(element?.role)
  });

  const columns = useSalaryColumns()
  const { t } = useTranslation()

  const { data: GetDataByMonth, mutate: getData } = useGetDataByMonth()

  const [fdata, setfdata] = useState(rows)
  useEffect(() => { setfdata(rows) }, [rows])

  const [role, setRole] = useState('')

  const [department, setDepartment] = useState('')
  const [show, setShow] = React.useState(10)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24
  }

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const handleRoleChange = e => {
    setRole(e.target.value)
  }


  useEffect(() => {
    let filteredData
    if (role) {
      filteredData = rows?.data?.data?.filter(row => {
        return row.role === role
      })
      setfdata({ data: { data: filteredData } })
    } else
      setfdata(rows)


  }, [role])

  const handelSearch = event => {
    const searchText = event.target.value
    let searchData
    if (!searchText) {
      setfdata(rows)
    } else {
      searchData = rows?.data?.data?.filter(element => {
        if (element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())
        } else if (element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase())
        } else if (element?.role?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.role?.toLowerCase()?.includes(searchText.toLowerCase())
        } else if (element?.email?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.email?.toLowerCase()?.includes(searchText.toLowerCase())
        } else if (element?.department?.name?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.department?.name?.toLowerCase()?.includes(searchText.toLowerCase())
        }
      })

      setfdata({ data: { data: searchData } })
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


  return (
    <>
      <p className='Pagetitle' >
        {t('Salaries')}
      </p>
      <Box sx={{ margin: 0, marginTop: '24px', padding: 0 }}></Box>

      <Card>
        <CardContent>

          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={3}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Stack direction={{ sm: 'row', xs: 'column' }} justifyContent={'space-between'} alignItems={'center'} >
              <Stack direction={'row'} width={{ sm: '50%', xs: '100%' }} spacing={3} alignItems={'center'}>
                <Box mb={2} width={{ sm: '120px', xs: '100px' }} >
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
                  sx={{ backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none', width: { sm: '320px', xs: '100%' } }}
                  size='small'
                />
              </Stack>
              <Typography sx={{ fontSize: '16px', fontWeight: 500, color: '#8090A7' }} >{t('Total')}: {totalSalaries ? totalSalaries : 0} {t('L.S')}</Typography>

            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Typography sx={{ fontSize: '16px', marginTop: '5px' }}>{t('Filters')}</Typography>
              <TextField
                select
                sx={{ width: { sm: '320px', md: '320px', xs: '100%' } }}
                defaultValue='Role'
                SelectProps={{
                  value: role,
                  displayEmpty: true,
                  onChange: handleRoleChange
                }}
                size='small'
              >
                <MenuItem value=''>{`${t('Role')}`}</MenuItem>
                {Array.from(roleData).map(element => (
                  <MenuItem key={element} value={element}>{element}</MenuItem>
                ))}
              </TextField>

              <Button sx={{ display: 'flex', justifyContent: 'space-between', border: '1px solid #8090A7', width: { sm: '320px', md: '320px', xs: '100%' }, height: '38px', color: '#8090A7', ':hover': { backgroundColor: 'inherit' } }} fullWidth onClick={handleOpen}>

                <Typography >{t('Monthly')}</Typography>
                <img src='/images/pesonalProfile/date/icon.svg' />

              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='modal-modal-title'
                aria-describedby='modal-modal-description'
              >
                <Box sx={style}>
                  <CustomDatePickerSalary handleClose={handleClose} selectedDate={1} handleDateChoose={getData} />
                </Box>
              </Modal>
            </Stack>

            {rows ? (
              <CustomDataGrid columns={columns} show={show} sx={gridStyles.root} rows={SalaryData(fdata) || []} />
            ) : null}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default SalaryDataGrid
