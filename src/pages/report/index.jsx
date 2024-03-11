import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'
import CollapsibleTable from 'src/features/Report/componets/table'

import { useReports } from 'src/features/Report/hooks/useGetAllReports'
import { useEffect } from 'react'

const ReportPage = () => {
  const {mutate:report,data} =  useReports()

  useEffect(()=>{
    report('2024-02-12')
  },[])

  return(
    <>
    {data ? <CollapsibleTable   Data={data?.data?.data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>}
    </>
  )
}

export default ReportPage
