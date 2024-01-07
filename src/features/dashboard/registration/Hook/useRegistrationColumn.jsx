import { useMemo, useState } from 'react'

import { Avatar, IconButton, Rating } from '@mui/material';
import { useTranslation } from 'react-i18next';


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
      field: 'ID',
      headerName: t("ID"),

      // disableClickEventBubbling: true,
      flex:0
    },

    {
      field: 'first Name',
      headerName: t("first Name"),
      flex: 3
    },

    {
      field: 'Last name',
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
      field: 'Department',
      headerName: t('Department'),
      flex: 3

    },
    {
      field: 'Status',
      headerName: t('Status '),
      flex: 3
    },
    {
      field: 'Check in',
      headerName: t('Check in'),
      flex: 3

    //   renderCell: (params) => {
    //     return(
    //       <>
    //       <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"} >




    //     </Stack>
    //   </>
    //   );
    // }
    },
    {
      field: 'Check out',
      headerName: t('Check out'),
      flex: 3


    }
  ])


}

export default useRegistrationColumn
