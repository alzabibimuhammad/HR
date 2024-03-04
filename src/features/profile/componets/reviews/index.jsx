import { Card, CardContent, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState,useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { useRouter } from 'next/router'
import useGetAllReviews from './query'

export default function ReviewsReport(SelecetedDate) {
  const {t} = useTranslation()
  const router = useRouter()
  const id = router.query.id

  const [date , setDate] = useState(SelecetedDate)
  useEffect(()=>{setDate(SelecetedDate)},[SelecetedDate])

  const { data, isLoading } = useGetAllReviews(id,date )

  const total = data?.data?.data?.reduce((total , percentage)=>total + percentage?.percentage, 0)

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={1}>
        <Typography fontSize={'20px'} color={'#8090A7'}>
          {t('Reviews')}  ({data?.data?.data?.length} {t('Reviews')} )
          </Typography>

          <Typography fontSize={'14px'} color='#3F4458'>
          {t('Total')} ({isNaN(total/data?.data?.data?.length)?0:total/data?.data?.data?.length})
          </Typography>
          {data?.data?.data.map((ele,index)=>(
          <Box key={index}>

          <Stack spacing={1} direction={'row'} alignItems={'center'}>
            <Box width={'10px'} height={'10px'} sx={{ backgroundColor: '#6AB2DF' }}></Box>
            <Typography fontSize={'12px'} color='#131627'>
            {ele?.rate_type} {ele?.percentage}%
            </Typography>
          </Stack>

          </Box>
        ))}
        </Stack>
      </CardContent>
    </Card>
  )
}
