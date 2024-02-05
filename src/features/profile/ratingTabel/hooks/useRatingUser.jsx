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

const useUserColumns = () => {


  const { t } = useTranslation();










  return useMemo(() => [


    {
      field: 'team',
      headerName: t("Team"),
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'technical',
      headerName: t("Technical"),
      disableClickEventBubbling: true,
      flex:1,


    },
    {
      field: 'communication',
      headerName: t("Communication"),
      disableClickEventBubbling: true,
      flex:1,

    },



    {
      field: 'creativity',
      headerName: t("Creativity"),
      flex:1,

    },
    {
      field: 'total',
      headerName: t("Total"),
      flex:1,

    },
  ]);
};

export default useUserColumns;
