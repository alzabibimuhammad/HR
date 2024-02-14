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
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            {params?.row?.status === 'Arrived' ? (
              <Chip
                label={t(params?.row?.status)}
                sx={{
                  backgroundColor: 'rgba(145, 196, 131, 0.20)',
                  color: 'var(--green, #91C483)',
                  fontSize:'13px',
                  width:'100%',
                  height:'30px',
                  padding:'5px'
                }}

              />


            ) : params?.row?.status === 'Late' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',
                  fontSize:'13px',
                  width:'100%',
                  height:'30px',
                 
                }}
                label={t(params?.row?.status)}

              />
            ) : params?.row?.status === 'Checked Out' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',
                  height:'30px',
                  fontSize:'13px',
                  width:'100%',
                  padding:'5px'
                }}
                label={t('out')}
              />

            ) :params?.row?.status === 'Absent' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(223, 46, 56, 0.20)',
                  color: '#DF2E38',
                  fontSize:'13px',
                  height:'30px',
                  width:'100%',
                  padding:'5px'
                }}
                label={t(params?.row?.status)}

              />
              )
              :params?.row?.status === 'Wrong' ? (
                <Chip
                  sx={{
                    backgroundColor: 'rgba(223, 46, 56, 0.20)',
                    color: '#DF2E38',
                    fontSize:'13px',
                    height:'30px',
                    width:'100%',
                    padding:'5px'
                  }}
                  label={t(params?.row?.status)}

                />
                ):null
            }
          </>
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
