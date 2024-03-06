// Import necessary components and libraries
import React, { useMemo, useState } from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { setProfileTap } from 'src/store/apps/user';
import Link from 'next/link';

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

  const handleProfileTap = _ => {
    dispatch(setProfileTap(2))
  }

  return useMemo(() => [

    {
      field: '',
      headerName: t('Employee'),
      disableClickEventBubbling: true,
      flex: 2,
      renderCell: params => {
        return (
          <Link href={`/profile/${params?.row?.id}`} style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}>
            <Avatar sx={{ width: '36px', height: '36px' }} src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
            <Stack marginLeft={'12px'} direction={'column'}>
              <Typography className='custome-data-grid-font' >{params?.row?.first_name} {params?.row?.last_name}</Typography>
              <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
            </Stack>
          </Link>
        )
      }
    },
    {
      field: 'role',
      headerName: t("Role"),
      disableClickEventBubbling: true,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Typography className='custome-data-grid-font' >
            {t(params?.row?.role)}
          </Typography>
        );
      },
    },
    {
      field: 'department',
      headerName: t("Department"),
      disableClickEventBubbling: true,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Typography className='custome-data-grid-font' >
            {t(params?.row?.department)}
          </Typography>
        );
      },
    },
    {
      field: 'date',
      headerName: t("Date"),
      disableClickEventBubbling: true,
      flex: 1.5,
      renderCell: (params) => {
        return (
          <Stack>
            <Typography className='custome-data-grid-font' >
              {t(params?.row?.date)}
            </Typography>
            <Typography className='custome-data-grid-font2' >
              {params?.row?.time}
            </Typography>
        </Stack>
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
