// Import necessary components and libraries
import React, { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import DrawerForm from '../Componets/DrawerForm/index'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import { Avatar, IconButton, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import AlertDialogDeleteSecretariats from '../componets/dialog'
import Link from 'next/link'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import useMediaQuery from '@mui/material/useMediaQuery';

const useSecretariatsColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false)
  const [EditData, setEditData] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const { t } = useTranslation()

  const handleEditClick = row => {
    setEditData(row)
    setIsDrawerOpenEdit(true)
    setIsMenuOpen(false)


  }

  const handleClickOpenn = params => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClickOpen = params => {
    setDeleteId(params)
    setIsDeletePopupOpen(true)
  }

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  }

  return useMemo(() => [
    {
      field: '',
      headerName: t('Employee'),
      disableClickEventBubbling: true,
      flex: 1.5,
      renderCell: params => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.user_id}`}>
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Stack direction={'column'}>
                <Stack direction={'row'}>
                  <Typography className='custome-data-grid-font' >{params?.row?.first_name}</Typography>
                  <Typography className='custome-data-grid-font'>{params?.row?.last_name}</Typography>
                </Stack>

                <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>

              </Stack>
            </Stack>
          </Link>
        )
      }
    },
    {
      field: 'name',
      headerName: t('Name'),
      disableClickEventBubbling: true,
      flex: 1,
      renderCell: params => ( <Stack direction={"row"}>
        <Typography className='custome-data-grid-font' >{params?.row?.name}</Typography>
        <Typography className='custome-data-grid-font' >{params?.row?.file}</Typography>
      </Stack>

      )
    },
    {
      field: 'date',
      headerName: t('Date'),
      disableClickEventBubbling: true,
      flex: 1,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.date}</Typography>

      )
    },
    {
      field: 'description',
      headerName: t('Description'),
      disableClickEventBubbling: true,
      flex: 4,
      renderCell: params => (
        <Typography className='custome-data-grid-font' >{params?.row?.description}</Typography>

      )
    },

    {
      field: 'action',
      headerName: t('Action'),
      flex: 1,
      renderCell: params => {
        return (
          <>
            <Stack direction={{ sm: 'row' }}  >
                    <Stack direction={"row"}>
                      <IconButton>
                        <BorderColorOutlinedIcon
                          style={{ color: '#8090A7' }}
                          variant='contained'
                          color='primary'
                          size='small'
                          onClick={() => handleEditClick(params.row)}
                        >
                          Edit
                        </BorderColorOutlinedIcon>
                      </IconButton>

                      <Box>
                        <IconButton onClick={() => handleClickOpen(params?.row?.id)}>
                          <DeleteOutlinedIcon variant='contained' color='#8090A7' size='small'>
                            {' '}
                            Delete{' '}
                          </DeleteOutlinedIcon>
                        </IconButton>
                      </Box>
                    </Stack>
            </Stack>
            {isDeletePopupOpen && (
              <AlertDialogDeleteSecretariats id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />
            )}

            <Box>
              <DrawerForm AllData={params?.row} open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
          </>
        )
      }
    }
  ])
}

export default useSecretariatsColumns
