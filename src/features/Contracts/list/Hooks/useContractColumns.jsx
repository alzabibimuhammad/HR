// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
<<<<<<< HEAD
import { Avatar, Button, IconButton, Rating, Typography } from '@mui/material';
=======
import { Avatar, Button, IconButton, Rating } from '@mui/material';
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
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
<<<<<<< HEAD
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
=======
      headerName: t("ID"),
      flex: 2,
      disableClickEventBubbling: true,
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    },
    {
      field: 'employee',
      headerName: t("Employee"),
      flex: 2,
      disableClickEventBubbling: true,
<<<<<<< HEAD
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.employee}
            </Typography>
          </Box>
        )
      }
=======
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    },
    {
      field: 'startDate',
      headerName: t("Start Date"),
      flex: 2,
      disableClickEventBubbling: true,
<<<<<<< HEAD
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.startDate}
            </Typography>
          </Box>
        )
      }

=======
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    },
    {
      field: 'endDate',
      headerName: t("End Date"),
      flex: 2,
      disableClickEventBubbling: true,
<<<<<<< HEAD
      renderCell:(params)=>{
        return (
          <Box>
            <Typography sx={{ fontSize:'14px' }} >
              {params?.row?.endDate}
            </Typography>
          </Box>
        )
      }
=======
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    },
    {
      field: 'status',
      headerName: t("Status"),
      flex: 2,
      disableClickEventBubbling: true,
<<<<<<< HEAD
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


=======
    },

>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    {
      field: 'action',
      headerName: t("Action"),
      flex: 2,
      renderCell: (params) => {
        return (
          <>
<<<<<<< HEAD
          <Stack >
              <Link href={`/contracts/view/${params.row.id}`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#FF9F43' }} size='small'>Details</VisibilityIcon>
              </IconButton>
              </Link>
=======
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
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
          </Stack>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}


          </>
        );
      },
    },
  ]);
};

export default useContractColumns;
