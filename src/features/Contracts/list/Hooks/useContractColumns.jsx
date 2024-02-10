// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, Button, IconButton, Rating, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { useTranslation } from 'react-i18next';
import AlertDialog from '../Componets/dialog';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveContracts } from 'src/pages/contracts/store';
import Link from 'next/link';

const useContractColumns = () => {
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
    const { id } = params.row;
    setDeleteId(id);
    setIsDeletePopupOpen(true);


  };

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  };



  return useMemo(() => [
    {
      field: 'id',
      headerName: 'ID',
      flex: 2,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.id}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: 'employee',
      headerName: t("Employee"),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.employee} {params?.row?.employeeLastName}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: 'startDate',
      headerName: t("Start Date"),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.startDate}
            </Typography>
          </Box>
        )
      }

    },
    {
      field: 'endDate',
      headerName: t("End Date"),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.endDate}
            </Typography>
          </Box>
        )
      }
    },
    {
      field: 'status',
      headerName: t("Status"),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {t(params?.row?.status)}
            </Typography>
          </Box>
        )
      }
    },


    {
      field: 'action',
      headerName: t("Action"),
      flex: 2,
      renderCell: (params) => {
        return (
          <>
          <Stack >
              <Link href={`/contracts/view/${params.row.id}`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#FF9F43' }} size='small'>Details</VisibilityIcon>
              </IconButton>
              </Link>
          </Stack>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}


          </>
        );
      },
    },
  ]);
};

export default useContractColumns;
