// Import necessary components and libraries
import React, { useEffect, useMemo, useState } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Avatar, ListItem, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse'
import ListItemIcon from '@mui/material/ListItemIcon'
import TableCell from '@mui/material/TableCell'

import { useTranslation } from 'react-i18next';
import DrawerForm from '../componets/DrawerForm';
import Link from 'next/link';
import EditIcon from '../../../../../public/images/IconInput/edit'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'


import MuiListItem from '@mui/material/ListItem'

const useAbsenceColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false);

  const [EditData, setEditData] = useState(null);
  const [openRows, setOpenRows] = useState({});

  const [open, setOpen] = useState(false)

  const handleToggle = (id) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [id]: !prevOpenRows[id],
    }));
  };



  const { t } = useTranslation();



  const handleOpenClick = ()=>{
    setIsDrawerOpenEdit(true)

  }


  const handleEditClick = (row) => {
    setEditData(row);
    setIsDrawerOpenEdit(true);
    console.log('done');

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

    // {
    //   field: 'level',
    //   headerName: t("Level"),
    //   disableClickEventBubbling: true,
    //   flex: 1.1,

    // },
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
        <>
        <Typography className='custome-data-grid-font' >{params?.row?.unjustified}</Typography>

        <Box onClick={() => handleToggle(params.row.id)}>
                <IconButton
                  onClick={() => setOpen(!openRows)}
                  sx={{
                    fontSize: '13px',
                    color:'#8090A7',
                    '&:hover': {
                      background: 'none !important'
                    },
                    padding: 0
                  }}
                  disableRipple
                >

                  {openRows[params.row.id]? <Stack  direction={'column'} >
                    <Box>
                   <KeyboardArrowUpIcon  sx={{marginTop:'53px'}} />
                    </Box>

                    <Box>
                      <Typography sx={{ fontSize: '14px' }}>{params?.row?.unjustified}</Typography>
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '14px' }}>{params?.row?.unjustified}</Typography>
                    </Box>

                  </Stack>



                  : <KeyboardArrowDownIcon sx={{marginTop:'3px'}} />}
                </IconButton>
              </Box>

        </>
      )
    },
    {
      field: 'sick',
      headerName: t("SICK"),
      disableClickEventBubbling: true,
      flex: 4,
      renderCell: params => (

        <>
        <Typography className='custome-data-grid-font' >{params?.row?.sick}</Typography>

        </>

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
              <Box sx={{cursor:"pointer"}} onClick={handleOpenClick}>
                  <EditIcon
                    style={{
                      color: '#8090A7',
                    }}
                    variant="contained"
                    color="primary"
                    size="small"

                  />

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
