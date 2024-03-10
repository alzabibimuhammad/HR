// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';
import DrawerForm from '../componets/DrawerForm';
import Link from 'next/link';

const useAbsenceColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);

  const [EditData, setEditData] = useState(null);


  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { t } = useTranslation();






  const handleEditClick = (row) => {
    setEditData(row);
    setIsDrawerOpenEdit(true);

  };

  const handleClickOpen = (params) => {
    const { id } = params;
    setDeleteId(id);
    setIsDeletePopupOpen(true);


  };

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  };

  const columnStyles = {
    cell: {
      marginLeft: '10%',
    },
  };

  return useMemo(() => [
    {
      field: '',
      headerName: t("Employee"),
      disableClickEventBubbling: true,
      flex: 3,
      renderCell: (params) => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.user_info?.user_id}`}>
            <Stack direction={'row'} alignItems={'center'} >
              <Avatar alt='' src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info?.image} />
              <Stack direction={'column'} marginLeft={'8px'}>
                  <Typography className='custome-data-grid-font' >{params?.row?.name} {params?.row?.last_name}</Typography>
                <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>

              </Stack>
            </Stack>
          </Link>
        );
      },
    },
    {
      field: 'justified',
      headerName: t("Justified"),
      disableClickEventBubbling: true,
      flex: 1.1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.justified}</Typography>

      )
    },
    {
      field: 'unjustified',
      headerName: t("Unjustified"),
      disableClickEventBubbling: true,
      flex: 1.1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.unjustified}</Typography>

      )
    },
    {
      field: 'total',
      headerName: t("Total"),
      disableClickEventBubbling: true,
      flex: 4,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.total}</Typography>

      )
    },
    {
      field: 'action',
      headerName: t("Action"),
      flex: 1,

      renderCell: (params) => {
        return (
          <>
            <Stack direction={{ sm: 'row' }} style={{ ...columnStyles.cell }}>
              <Box>
                <IconButton>
                  <BorderColorOutlinedIcon
                    style={{
                      color: '#8090A7',
                    }}
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEditClick(params.row)}
                  >
                    Edit
                  </BorderColorOutlinedIcon>
                </IconButton>
              </Box>



            </Stack>
            {isDrawerOpenEdit && (
              <DrawerForm
                open={isDrawerOpenEdit}
                setOpenParent={setIsDrawerOpenEdit}
                Data={EditData}
              />
            )}

          </>
        );
      },
    },
  ]);
};

export default useAbsenceColumns;
