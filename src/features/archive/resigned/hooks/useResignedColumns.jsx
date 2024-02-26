// Import necessary components and libraries
import React, { useMemo, useState } from 'react';
import { Avatar, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setProfileTap } from 'src/store/apps/user';

const useResignedColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);

  const [EditData, setEditData] = useState(null);

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch()
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

  const handleProfileTap=_=>{
    dispatch(setProfileTap(2))
  }

  return useMemo(() => [

      {
        field: '',
        headerName: t("Employee"),
        disableClickEventBubbling: true,
        flex:1,
        renderCell: (params) => {
              return (
              <>
              <Avatar src={params?.row?.image}  />
              <Typography  style={{fontSize:'14px', marginLeft:'2px' }} >{params?.row?.first_name}</Typography>
              <Typography style={{ fontSize:'14px',marginLeft:'3px' }} >{params?.row?.last_name}</Typography>
              </>
            );
          },
      },
    {
      field: 'role',
      headerName: t("Role"),
      disableClickEventBubbling: true,
      flex:1,
      renderCell: (params) => {
        return (
        <Typography sx={{ fontSize:'14px' }} >
          {t(params?.row?.role)}
        </Typography>
      );
    },
    },
    {
      field: 'specialization',
      headerName: t("Specialization"),
      disableClickEventBubbling: true,
      flex:1,
      renderCell: (params) => {
        return (
          <Typography sx={{ fontSize:'14px' }} >
          {params?.row?.specialization}
        </Typography>
      );
    },

    },




    // {
    //   field: 'action',
    //   headerName: t("Action"),
    //   flex:1,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //       <Stack direction={{ sm:'row' }}  >

    //           <Link href={`/profile/${params.row.id}?type=profile`} >
    //           <IconButton onClick={handleProfileTap} >
    //           <VisibilityIcon  variant="contained" sx={{ color:'#8090A7' }} size='small'/>
    //           </IconButton>
    //           </Link>
    //           <Box >
    //             <IconButton>
    //             <BorderColorOutlinedIcon style={{ color:'#8090A7' }} variant="contained" color="primary" size='small' onClick={()=>handleEditClick(params.row)} />
    //             </IconButton>
    //           </Box>
    //           <Box>
    //             <IconButton onClick={() => handleClickOpen(params?.row?.id)}>
    //             <DeleteOutlinedIcon  variant="contained" color="#8090A7" size='small'/>
    //             </IconButton>
    //           </Box>

    //       </Stack>
    //         {isDeletePopupOpen && <AlertDialogDeleteUser id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}

    //         <Box>
    //           <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
    //         </Box>
    //       </>
    //     );
    //   },
    // },
  ]);
};

export default useResignedColumns;
