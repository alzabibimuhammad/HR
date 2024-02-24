import { useMemo, useState } from 'react'

import { Avatar,  IconButton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Box, Stack } from '@mui/system';
import Link from 'next/link';
import VisibilityIcon from '@mui/icons-material/Visibility';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import DrawerForm from '../components/DrawerForm';
import AlertDialogDeleteRieview from '../components/DeleteDialog';

const useRegistrationColumn = () => {

  const { t } = useTranslation()

  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);

  const [EditData, setEditData] = useState(null);

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);

  const [deleteId, setDeleteId] = useState(null);

  const handleEditClick = (row) => {
    setEditData(row);
    setIsDrawerOpenEdit(true);
  };

  const handleClickOpen = (id) => {
    setDeleteId(id);
    setIsDeletePopupOpen(true);
  };

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  };



  return useMemo(() => [

      {
        field: 'first_name',
        headerName: t("Name"),
        flex:2,
        renderCell:(params)=>{
          return(
            <Typography>#{params.row.first_name}</Typography>
          )
        }
    },
    {
      field: 'date',
      headerName: t('Date'),
      flex: 1.5

    },
    {
      field: 'employee',
      headerName: t('Employees'),
      flex: 5
    },
    {
      field: 'action',
      headerName: t("Actions"),
      flex:1,
      renderCell: (params) => {
        return (
          <>
          <Stack direction={{ sm:'row',xs:'row' }}  >

              <Link href={`/profile/${params.row.id}`} >
              <IconButton >
              <VisibilityIcon  variant="contained" sx={{ color:'#8090A7' }} size='small'/>
              </IconButton>
              </Link>
              <Box>
                <IconButton onClick={() => handleClickOpen(params?.row?.id)}>
                <DeleteOutlinedIcon  variant="contained" color="#8090A7" size='small'/>
                </IconButton>
              </Box>

          </Stack>
            {isDeletePopupOpen && <AlertDialogDeleteRieview id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}

            <Box>
              <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
          </>
        );
      },
    },
  ])


}

export default useRegistrationColumn
