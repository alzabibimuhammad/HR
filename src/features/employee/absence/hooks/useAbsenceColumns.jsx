// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar,IconButton } from '@mui/material';

import { useTranslation } from 'react-i18next';
import DrawerForm from '../componets/DrawerForm';

const useAbsenceColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);

  const [EditData, setEditData] = useState(null);


  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const { t } = useTranslation();






  const handleEditClick = (row) => {
    console.log("🚀 ~ handleEditClick ~ row:", row)
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
          <>
            <Avatar alt='' />
            <p style={{ marginLeft: '2px' }}>{params?.row?.name}</p>
          </>
        );
      },
    },
    {
      field: 'justified',
      headerName: t("Justified"),
      disableClickEventBubbling: true,
      flex: 1.1,
    },
    {
      field: 'unjustified',
      headerName: t("Unjustified"),
      disableClickEventBubbling: true,
      flex: 1.1,
    },
    {
      field: 'total',
      headerName: t("Total"),
      disableClickEventBubbling: true,
      flex: 4,
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
