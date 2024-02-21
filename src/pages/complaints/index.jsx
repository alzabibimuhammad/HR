import React from 'react'
import useGetAllComplaints from 'src/features/complaints/Hook/useGetAllComplaints'
import ComplaintsTable from 'src/features/complaints/components/DataGrid'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

export default function Complaints() {
  const {data} = useGetAllComplaints()

  return <>

{data?
<ComplaintsTable Data={data?.data?.data}/>:

<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box>
}


  </>

}
