import React from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid'
import { columns, rows } from './data'
import { useTheme } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

export default function AddPlayersForm() {
  const theme = useTheme()

  const columns = [
    { field: 'id', headerName: 'ID', width: 33, align: 'center', headerAlign: 'center' },
    { field: 'name', headerName: 'Name', align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'email', headerName: 'Email', align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center', flex: 1 },
    { field: 'phone', headerName: 'Phone', align: 'center', headerAlign: 'center', flex: 0 },
    {
      field: 'access',
      headerName: 'Access',
      align: 'center',
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: '5px',
              width: '52%',
              borderRadius: '5px',
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'space-evenly',
              backgroundColor:
                access === 'Admin'
                  ? theme.palette.primary.dark
                  : access === 'coach'
                  ? theme.palette.secondary.dark
                  : 'a3da58a'
            }}
          >
            <Typography sx={{ fontSize: '17px' }}>{access}</Typography>
          </Box>
        )
      }
    }
  ]

  return (
    <>
      <Box sx={{ height: 600, width: '98%', mx: 'auto' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </>
  )
}
