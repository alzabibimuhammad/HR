import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import useShowAllReviews from 'src/features/review/reviewMain/Hook/useGetAll'
import ReviewFeature from 'src/features/review/reviewMain/components/DataGrid'

export default function Review() {
  const {data}=useShowAllReviews()

  return (
    <>
    {data?<ReviewFeature Data={data}/>:<Box height={'100%'} display={'center'} justifyContent={'center'}  alignItems={'center'} >
    <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'70vh' }} >
    <CircularProgress/>
    </Box>
  </Box>}
  </>
  )
}


