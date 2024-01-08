// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, Button, IconButton, Rating } from '@mui/material';
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
      headerName: t("ID"),
      flex: 2,
      disableClickEventBubbling: true,
    },
    {
      field: 'employee',
      headerName: t("Employee"),
      flex: 2,
      disableClickEventBubbling: true,
    },
    {
      field: 'startDate',
      headerName: t("Start Date"),
      flex: 2,
      disableClickEventBubbling: true,
    },
    {
      field: 'endDate',
      headerName: t("End Date"),
      flex: 2,
      disableClickEventBubbling: true,
    },
    {
      field: 'status',
      headerName: t("Status"),
      flex: 2,
      disableClickEventBubbling: true,
    },
    // {
    //   field: 'image',
    //   headerName: '',
    //   renderCell: (params) => {
    //     return (
    //       <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params.row?.image?.image} alt='' />
    //     );
    //   },
    // },
    // {
    //   field: 'rate',
    //   headerName: t("Rate"),
    //   flex: 2,
    //   renderCell: (params) => {
    //     return (
    //       <Rating name="read-only" value={params.row.rate} readOnly />
    //     );
    //   },
    // },
    {
      field: 'action',
      headerName: t("Action"),
      flex: 2,
      renderCell: (params) => {
        return (
          <>
          <Stack direction={"row"} spacing={2} justifyContent={"center"} marginTop={"10px"}>
            <Box>
              <IconButton>
                <BorderColorOutlinedIcon style={{ color:'#B4B4B6' }} variant="contained" color="primary" size='small' onClick={() => handleEditClick(params.row)}>Edit</BorderColorOutlinedIcon>
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={() => handleClickOpen(params)}>
              <DeleteOutlinedIcon variant="contained" color="error" size='small'>Delete</DeleteOutlinedIcon>
              </IconButton>
            </Box>


              <Link href={`/contract/contractProfile/${params.row.id}`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#FF9F43' }} size='small'>Details</VisibilityIcon>
              </IconButton>

              </Link>

            <Box>
              <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
          </Stack>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}


          </>
        );
      },
    },
  ]);
};

export default useContractColumns;
