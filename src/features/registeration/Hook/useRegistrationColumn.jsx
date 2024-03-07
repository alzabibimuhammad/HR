import { useMemo } from 'react'

import { Avatar, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box, Stack } from '@mui/system'
import Link from 'next/link'

const useRegistrationColumn = () => {
  const { t } = useTranslation()

  return useMemo(() => [
    {
      field: 'first_name',
      headerName: t('Name'),
      flex: 2,
      renderCell: params => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.id}`}>
            <Stack spacing={1} direction={'row'} alignItems={'center'}>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Stack direction={'column'}>
                <Typography className='custome-data-grid-font'>
                  {params?.row?.first_name} {params?.row?.last_name}
                </Typography>
                <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
              </Stack>
            </Stack>
          </Link>
        )
      }
    },
    {
      field: 'department',
      headerName: t('Department'),

      flex: 1.5,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.department}</Typography>
    },
    {
      field: 'status',
      headerName: t('Status'),
      headerAlign: 'center',
      align: 'center',
      flex: 2,
      renderCell: params => {
        return (
          <Box
            sx={{
              backgroundColor:
                params?.row?.status === 'Arrived'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : Boolean(params?.row?.status?.includes('Late'))
                  ? 'rgba(106, 178, 223, 0.20)'
                  : params?.row?.status === 'out'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : params?.row?.status === 'Absent'
                  ? 'rgba(223, 46, 56, 0.20)'
                  : Boolean(params?.row?.status?.includes('Early'))
                  ? 'rgba(106, 178, 223, 0.20)'
                  : 'rgba(223, 46, 56, 0.20)',

              borderRadius: '4px',
              display: 'flex',
              padding: '4px 8px',
              alignItems: 'flex-start',
              gap: '10px'
            }}
          >
            {' '}
            <Typography
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '130%',
                color:
                  params?.row?.status === 'Arrived'
                    ? '#91C483'
                    : Boolean(params?.row?.status?.includes('Late'))
                    ? '#6AB2DF'
                    : params?.row?.status === 'out'
                    ? '#91C483'
                    : params?.row?.status === 'Absent'
                    ? '#DF2E38'
                    : Boolean(params?.row?.status?.includes('Early'))
                    ? '#6AB2DF'
                    : '#DF2E38'
              }}
            >

              {t(params?.row?.status)}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: 'checkIn',
      headerName: t('Check in'),
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.checkIn}</Typography>
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.checkOut}</Typography>
    }
  ])
}

export default useRegistrationColumn
