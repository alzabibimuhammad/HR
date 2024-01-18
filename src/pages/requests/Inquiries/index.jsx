import React from 'react'
import Inquiries from 'src/features/requests/Inquiries/Componets/DataGrid'
import { Box, CircularProgress } from '@mui/material'
import useGetAllInquiries from 'src/features/requests/Inquiries/Hooks/useGetAllInquiries';

export default function RequestInquiries() {

  const {data}=useGetAllInquiries()

  return <>
    {data ? <Inquiries  rows={data}  /> :
    <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>
  }

  </>
}
