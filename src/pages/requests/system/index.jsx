import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import SystemTable from 'src/features/requests/system/Componets/DataGrid'
import useGetAllSystem from 'src/features/requests/system/Hooks/useGetAllSystem'

export default function System() {
  const {data}=useGetAllSystem()

  return (<>
    {data ? <SystemTable  rows={data}  /> :
    <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'100%' }} ><CircularProgress /></Box>
  }
  </>
  )
}
