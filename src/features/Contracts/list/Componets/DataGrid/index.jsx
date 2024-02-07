import React, { useState } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider } from '@mui/material'
import TextField from '@mui/material/TextField'
import useContractColumns from '../../Hooks/useContractColumns'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ContractsData } from '../../infrastructure'

const List = ({ rows }) => {
  const columns = useContractColumns()
  const { t } = useTranslation()
  const [role, setRole] = useState('')
  const [status, setStatus] = useState('')

  const handleRoleChange = e => {
    setRole(e.target.value)
  }

  const handleStatusChange = e => {
    setStatus(e.target.value)
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
    <Card>
      <CardHeader title={`${t('Filters')}`} />
      <CardContent>
        <Grid container spacing={2} justifyContent={'space-around'}>
          <Grid item xs={12} sm={5}>
            <TextField
              select
              fullWidth
              defaultValue='Select Role'
              SelectProps={{
                value: role,
                displayEmpty: true,
                onChange: handleRoleChange
              }}
            >
              <MenuItem value=''>{`${t('Select Role')}`}</MenuItem>
              <MenuItem value='admin'>{`${t('admin')}`}</MenuItem>
              <MenuItem value='customer'>{`${t('customer')}`}</MenuItem>
              <MenuItem value='employee'>{`${t('employee')}`}</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              select
              fullWidth
              defaultValue='Select Status'
              SelectProps={{
                value: status,
                displayEmpty: true,
                onChange: handleStatusChange
              }}
            >
              <MenuItem value=''>{`${t('Select Status')}`}</MenuItem>
              <MenuItem value='active'>{`${t('active')}`}</MenuItem>
              <MenuItem value='not-active'>{`${t('not active')}`}</MenuItem>
            </TextField>
          </Grid>
          <Grid item sm={12} xs={12}>
            <CustomDataGrid columns={columns} sx={gridStyles.root} rows={ContractsData(rows) || []} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default List
