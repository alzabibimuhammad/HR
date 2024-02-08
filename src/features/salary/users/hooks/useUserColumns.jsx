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
        flex:1,
        renderCell: (params) => {
              return (
              <>
              <Avatar alt=''  />
              <Typography  style={{fontSize:'14px', marginLeft:'2px' }} >{params?.row?.first_name}</Typography>
              <Typography style={{ fontSize:'14px',marginLeft:'3px' }} >{params?.row?.last_name}</Typography>
              </>

            );
          },
      },
    {
      field: 'base',
      headerName: t("base"),
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'overtime',
      headerName: t("base"),
      disableClickEventBubbling: true,
      flex:1,


    },
    {
      field: 'reward',
      headerName: t("reward"),
      disableClickEventBubbling: true,
      flex:1,

    },



    {
      field: 'deducations',
      headerName: t("deducations"),
      flex:1,

    },
    {
      field: 'advances',
      headerName: t("advances"),
      flex:1,

    },
    {
      field: 'total',
      headerName: t("total"),
      flex:1,

    },
  ]);
};

export default useSalaryColumns;
