import { useMemo, useState } from 'react'

import { Avatar, Button, IconButton, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/system';


const useRegistrationColumn = () => {

  const { t } = useTranslation()





  return useMemo(() => [
    // {
    //   field: 'image',
    //    headerName: '',

    //     renderCell: (params)=>{

    //   return (
    //       <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/' + params.row?.image?.image} alt='' />

    //   )
    // } },
    {
      field: 'id',
      headerName: t("ID"),

      // disableClickEventBubbling: true,
      flex:0
    },

    {
      field: 'first_name',
      headerName: t("first Name"),
      flex: 3
    },

    {
      field: 'last_name',
      headerName: t("Last name"),
      flex: 3

    //   renderCell: (params) => {
    //     return (
    //       <Stack width={80}>
    //       <Chip
    //         label={params.value}
    //         color={params.value === 'paid' ? 'success' : 'primary'}

    //       />
    //     </Stack>
    //     );

    // },

  },
    {
      field: 'department',
      headerName: t('Department'),
      flex: 3

    },
    {
      field: 'status',
      headerName: t('Status '),
      flex: 3,
      renderCell: (params) => {
        return (
          <>
            {params?.row?.status === 'Arrived' ? (
              <Button
                sx={{
                  backgroundColor: 'rgba(145, 196, 131, 0.20)',
                  color: 'var(--green, #91C483)',
                  fontSize:'12px',
                  width:'100%',
                  height:'14px'
                }}
              >
                {params?.row?.status}
              </Button>
            ) : params?.row?.status === 'Late' ? (
              <Button
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',
                  fontSize:'12px',
                  width:'100%',
                  height:'14px'

                }}
              >
                {params?.row?.status}
              </Button>
            ) : params?.row?.status === 'Checked Out' ? (
              <Button
                sx={{
                  backgroundColor: 'rgba(106, 178, 223, 0.20)',
                  color: '#6AB2DF',

                  height:'14px',
                  fontSize:'10px',
                  width:'100%',
                }}
              >
                {params?.row?.status}
              </Button>
            ) :params?.row?.status === 'Absent' ? (
              <Button
                sx={{
                  backgroundColor: 'rgba(223, 46, 56, 0.20)',
                  color: '#DF2E38',
                  fontSize:'12px',
                  height:'14px',
                  width:'100%',
                }}
              >
                {params?.row?.status}
              </Button>)
              :null
            }
          </>
        );
      },
    },

    {
      field: 'checkIn',
      headerName: t('Check in'),
      flex: 3
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      flex: 3


    }
  ])


}

export default useRegistrationColumn
