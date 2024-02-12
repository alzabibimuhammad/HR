// Import necessary components and libraries
import React, { useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import DrawerForm from '../Componets/DrawerForm/index';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import AlertDialogDeleteSecretariats from '../componets/dialog';

const useSecretariatsColumns = () => {
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
    setDeleteId(params);
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
        flex:1.5,
        renderCell: (params) => {
              return (
              <>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} alt=''  />
              <Typography  style={{fontSize:'14px', marginLeft:'2px' }} >{params?.row?.first_name}</Typography>
              <Typography style={{ fontSize:'14px',marginLeft:'3px' }} >{params?.row?.last_name}</Typography>
              </>
            );
          },
      },
    {
      field: 'date',
      headerName: t("Date"),
      disableClickEventBubbling: true,
      flex:1,
    },
    {
      field: 'description',
      headerName: t("Description"),
      disableClickEventBubbling: true,
      flex:4,
    },




    {
      field: 'action',
      headerName: t("Action"),
      flex:1,
      renderCell: (params) => {
        return (
          <>
          <Stack direction={{ sm:'row' }}  >
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
            {isDeletePopupOpen && <AlertDialogDeleteSecretariats id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}

            <Box>
              <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
          </>
        );
      },
    },
  ]);
};

export default useSecretariatsColumns;
