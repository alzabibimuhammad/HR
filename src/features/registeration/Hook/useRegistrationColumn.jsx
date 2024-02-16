  import { useMemo, useState } from 'react'

  import { Avatar, Button, Chip, IconButton, Rating, Typography } from '@mui/material';
  import { useTranslation } from 'react-i18next';
  import { Box, Stack } from '@mui/system';
  import Link from 'next/link';


  const useRegistrationColumn = () => {

    const { t } = useTranslation()





    return useMemo(() => [

      {
        field: 'first_name',
        headerName: t("Name"),
        flex:2,
          renderCell: (params)=>{
        return (
          <Link style={{ textDecoration:'none' }}  href={`/profile/${params?.row?.id}`}>

          <Stack spacing={1} direction={'row'}  alignItems={'center'} >
            <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} alt=''  />
              <Typography>
                {params.row.first_name} {params.row.last_name}
              </Typography>
          </Stack>
          </Link>
        )
      }
    },
      {
        field: 'department',
        headerName: t('Department'),

        flex: 1.5

      },
      {
        field: 'status',
        headerName: t('Status'),
        headerAlign: 'center',
        align: 'center',
        flex: 2,
        renderCell: (params) => {
          return (
            <Chip
              label={t(params?.row?.status)}
              sx={{
                backgroundColor:
                  params?.row?.status === 'Arrived'
                    ? 'rgba(145, 196, 131, 0.20)'
                    : params?.row?.status.includes('Late')
                    ? 'rgba(106, 178, 223, 0.20)'
                    : params?.row?.status==='Out'
                    ? 'rgba(106, 178, 223, 0.20)'
                    : params?.row?.status === 'Absent'
                    ? 'rgba(223, 46, 56, 0.20)'
                    : 'rgba(223, 46, 56, 0.20)',
                color:
                  params?.row?.status === 'Arrived'
                    ? '#91C483'
                    : params?.row?.status.includes('Late')
                    ? '#6AB2DF'
                    : params?.row?.status==='Out'
                    ? '#6AB2DF'
                    : params?.row?.status === 'Absent'
                    ? '#DF2E38'
                    : '#DF2E38',
                fontSize: '13px',
                height: '30px',
                width: 'auto',
                padding: '5px',
              }}
            />
          );
        },
      },
      {
        field: 'checkIn',
        headerName: t('Check in'),
        headerAlign: 'center',
        align: 'center',
        flex: 1
      },
      {
        field: 'checkOut',
        headerName: t('Check out'),
        headerAlign: 'center',
        align: 'center',
        flex: 1
      }
    ])


  }

  export default useRegistrationColumn
