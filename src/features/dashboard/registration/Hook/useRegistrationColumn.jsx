import { useMemo, useState } from 'react'

import { Avatar, Button, Chip, IconButton, Rating, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box, Stack } from '@mui/system'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setProfileTap } from 'src/store/apps/user'

const useRegistrationColumn = () => {
  const { t } = useTranslation()

  const router = useRouter()

  const dispatch = useDispatch()

  const handleViewProfileTap=id=>{
    dispatch(setProfileTap(1))
    router.push(`/profile/${id}?type=profile`)
  }

  return useMemo(() => [

    {
      field: 'first_name',
      headerName: t('First Name'),
      flex: 3,
      renderCell: params =>(

        <Stack onClick={()=>handleViewProfileTap(params?.row?.id)} direction={'row'} sx={{ cursor:'pointer' }} spacing={1}>
          <Avatar sx={{ width:'36px',height:'36px' }} src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} />
          <Stack direction={'column'}>
            <Typography className='custome-data-grid-font' >{params?.row?.first_name} </Typography>
            <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
          </Stack>
        </Stack>
      )
    },
    {
      field: 'department',
      headerName: t('team'),
      flex: 2,
      renderCell: params =>(
        <Typography className='custome-data-grid-font' >{params?.row?.department}</Typography>
      )
    },
    {
      field: 'status',
      headerName: t('Status'),
      headerAlign: 'center',
      align: 'center',
      flex: 5,
      renderCell: params => {
        return (
          <Chip
            label={t(params?.row?.status)}
            sx={{
              backgroundColor:
                params?.row?.status === 'Arrived'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : params?.row?.status.includes('Late')
                  ? 'rgba(106, 178, 223, 0.20) opacity:0.8'
                  : params?.row?.status === 'Out'
                  ? 'rgba(106, 178, 223, 0.20)'
                  : params?.row?.status === 'Absent'
                  ? 'rgba(223, 46, 56, 0.20) opacity:0.8'
                  : 'rgba(223, 46, 56, 0.20)',
              color:
                params?.row?.status === 'Arrived'
                  ? '#91C483'
                  : params?.row?.status.includes('Late')
                  ? '#6AB2DF'
                  : params?.row?.status === 'Out'
                  ? '#6AB2DF'
                  : params?.row?.status === 'Absent'
                  ? '#DF2E38'
                  : '#DF2E38',
                
                  
              fontSize: '12px',
              height: '30px',
              width: 'auto',
              padding: '5px',
              borderRadius:'4px'
            }}
          />
        )
      }
    },

    {
      field: 'checkIn',
      headerName: t('Check in'),
      flex: 2,
      renderCell: params =>(
        <Typography className='custome-data-grid-font' sx={{ lineHeight:'25px',letterSpacing:'0.07px' }} >{params?.row?.checkIn}</Typography>
      )
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      flex: 2,
      renderCell: params =>(
        <Typography className='custome-data-grid-font' sx={{ lineHeight:'25px',letterSpacing:'0.07px' }} >{params?.row?.checkOut}</Typography>
      )
    }
  ])
}

export default useRegistrationColumn
