// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar,  IconButton, Rating, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import useGetRattingtype from './useGetRatingType';

const useUserColumns = () => {

const{data,isloading}=useGetRattingtype()
  
  const { t } = useTranslation();










  return useMemo(() => [

    {
      field: 'FirstName',
      headerName: 'Employee Name',
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'rate1',
      headerName: data?.data?.data[0]?.rate_type,
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'rate2',
      headerName: data?.data?.data[1]?.rate_type,
      disableClickEventBubbling: true,
      flex:1,


    },
    {
      field: 'rate3',
      headerName: data?.data?.data[2]?.rate_type,
      disableClickEventBubbling: true,
      flex:1,


    },
    


    {
      field: 'date',
      headerName: t("Total"),
      flex:1,

    },
  ]);
};

export default useUserColumns;
