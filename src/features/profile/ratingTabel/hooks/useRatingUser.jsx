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
  const { data, isLoading } = useGetRattingtype();
  const { t } = useTranslation();

  const columns = useMemo(() => {
    if (!data || !data.data || !data.data.data || data.data.data.length === 0) {
      return [
        {
          field: 'FirstName',
          headerName: t('Employee Name'),
          disableClickEventBubbling: true,
          flex: 1,
        },
        {
          field: 'date',
          headerName: t("Total"),
          flex: 1,
        },
      ];
    }

    return [
      {
        field: 'FirstName',
        headerName: t('Employee Name'),
        disableClickEventBubbling: true,
        flex: 1,
      },
      ...data.data.data.map((item, index) => ({
        field: `rate${index + 1}`,
        headerName: t(item.rate_type),
        disableClickEventBubbling: true,
        flex: 1,
      })),
      {
        field: 'date',
        headerName: t("Total"),
        flex: 1,
      },
    ];
  }, [data, t]);

  return columns;
};

export default useUserColumns;



