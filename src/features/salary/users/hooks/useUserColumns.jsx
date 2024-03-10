// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, Button, IconButton, Rating, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

const useSalaryColumns = () => {

  const { t } = useTranslation();






  return useMemo(() => [

    {
      field: '',
      headerName: t("Employee"),
      disableClickEventBubbling: true,
      flex: 1.7,
      renderCell: (params) => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.id}`}>

            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Stack>
                <Typography className='custome-data-grid-font' >{params?.row?.first_name} {params?.row?.last_name}</Typography>
                <Typography className='custome-data-grid-font2' >{params?.row?.specialization} {params?.row?.last_name}</Typography>

              </Stack>
            </Stack>
          </Link>

        );
      },
    },
    {
      field: 'base',
      headerName: t("base"),
      disableClickEventBubbling: true,
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.base}</Typography>

      )

    },
    {
      field: 'overtime',
      headerName: t("overtime"),
      disableClickEventBubbling: true,
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.overtime}</Typography>

      )


    },
    {
      field: 'reward',
      headerName: t("reward"),
      disableClickEventBubbling: true,
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.reward}</Typography>

      )

    },



    {
      field: 'deducations',
      headerName: t("deducations"),
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.deducations}</Typography>

      )

    },
    {
      field: 'advances',
      headerName: t("advances"),
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.advances}</Typography>

      )

    },
    {
      field: 'total',
      headerName: t("total"),
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.total}</Typography>

      )

    },
  ]);
};

export default useSalaryColumns;
