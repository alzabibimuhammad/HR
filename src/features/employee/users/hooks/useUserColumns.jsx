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
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import AlertDialog from '../componets/dialog';

const useUserColumns = () => {
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
              <p style={{ marginLeft:'2px' }} >{params?.row?.first_name}</p>
              <p style={{ marginLeft:'3px' }} >{params?.row?.last_name}</p>
              </>
            );
          },
      },
    {
      field: 'role',
      headerName: t("Role"),
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'specialization',
      headerName: t("SPECIALIZATION"),
      disableClickEventBubbling: true,
      flex:1,

    },
    {
      field: 'specialization',
      headerName: t("Team"),
      disableClickEventBubbling: true,
      flex:1,

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
      flex:1,
      renderCell: (params) => {
        return (
          <>
          <Stack direction={{ sm:'row' }}  >

              <Link href={`/profile/id`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#8090A7' }} size='small'>Details</VisibilityIcon>
              </IconButton>
              </Link>
              <Box >
                <IconButton>
                <BorderColorOutlinedIcon style={{ color:'#8090A7' }} variant="contained" color="primary" size='small' onClick={()=>handleEditClick(params.row)} >Edit</BorderColorOutlinedIcon>
                </IconButton>
              </Box>
              <Box>
                <IconButton onClick={() => handleClickOpen(params?.row?.id)}>
                <DeleteOutlinedIcon  variant="contained" color="#8090A7" size='small'>  Delete   </DeleteOutlinedIcon>
                </IconButton>
              </Box>

          </Stack>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}


          </>
        );
      },
    },
  ]);
};

export default useUserColumns;
