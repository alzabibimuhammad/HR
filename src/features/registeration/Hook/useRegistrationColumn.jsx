import { useMemo, useState } from 'react'

import { Avatar, Button, Chip, IconButton, Rating, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@mui/system';


const useRegistrationColumn = () => {

  const { t } = useTranslation()





  return useMemo(() => [

    {
      field: 'first_name',
      headerName: t("Name"),
      flex:2.5,
        renderCell: (params)=>{
      return (
        <Stack spacing={1} direction={'row'}  alignItems={'center'} >
          <Box>
          <Avatar src={'sdsd'} alt='' />
          </Box>
          <Stack spacing={2} direction={'row'}>
            <Typography>
              {params.row.first_name}
            </Typography>
            <Typography>
              {params.row.last_name}
            </Typography>
          </Stack>
        </Stack>
      )
    }
  },
    {
      field: 'department',
      headerName: t('Department'),
      flex: 2

    },
    {
      field: 'status',
      headerName: t('Status'),
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
                  height:'14px'
                }}

              />


            ) : params?.row?.status === 'Late' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',
                  fontSize:'13px',
                  width:'100%',
                  height:'14px'

                }}
                label={t(params?.row?.status)}

              />
            ) : params?.row?.status === 'Checked Out' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',
                  height:'15px',
                  fontSize:'13px',
                  width:'100%',
                }}
                label={t('out')}
              />

            ) :params?.row?.status === 'Absent' ? (
              <Chip
                sx={{
                  backgroundColor: 'rgba(223, 46, 56, 0.20)',
                  color: '#DF2E38',
                  fontSize:'13px',
                  height:'14px',
                  width:'100%',
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
                    height:'14px',
                    width:'100%',
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
      flex: 2
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      flex: 2
    }
  ])


}

export default useRegistrationColumn
