import React, { useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import VisibilityIcon from '@mui/icons-material/Visibility'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import AlertDialogDeleteUser from '../componets/dialog'
import DrawerForm from '../Componets/DrawerForm/index'
import { useTranslation } from 'react-i18next'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useDispatch } from 'react-redux'
import { setProfileTap } from 'src/store/apps/user'

const useUserColumns = () => {
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false)
  const [EditData, setEditData] = useState(null)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()
  const isMobile = useMediaQuery('(max-width:600px)');

  const dispatch = useDispatch()

  const handleClickOpenn = params => {
    setIsMenuOpen(!isMenuOpen)
  }


  const handleEditClick = row => {
    setEditData(row)
    setIsDrawerOpenEdit(true)
    setIsMenuOpen(false)
  }

  const handleClickOpen = params => {
    setDeleteId(params)
    setIsDeletePopupOpen(true)
  }

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  }


const handleViewProfileTap=_=>{
  dispatch(setProfileTap(2))
}
  return useMemo(
    () => [
      {
        field: '',
        headerName: t('Employee'),
         disableClickEventBubbling: true,
        flex: 2.5,
        renderCell: params => {
          return (
            <Link
              href={`/profile/${params?.row?.id}`}
              style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}
            >
              <Avatar sx={{width:{sm:35,xs:20},height:{sm:35,xs:20}}} src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Typography sx={{ fontSize: {xs:'8px',sm:"14px"}, marginLeft: '2px' }}>{params?.row?.first_name}</Typography>
              <Typography sx={{ fontSize: {xs:'8px',sm:"14px"}, marginLeft: '3px' }}>{params?.row?.last_name}</Typography>
            </Link>
          )
        }
      },
      {
        field: 'role',
        headerName: t('Role'),
        disableClickEventBubbling: true,
        flex: 1.5,
        headerAlign: 'center',
        align: 'center',
        renderCell: params => {
          return <Typography sx={{ fontSize: {xs:'8px',sm:"14px"} }}>{params?.row?.role}</Typography>
        }
      },
      {
        field: 'specialization',
        headerName: t('Specialization'),
        disableClickEventBubbling: true,
        flex: 2.5,
        headerAlign: 'center',
        align: 'center',
        renderCell: params => {
          return <Typography sx={{ fontSize: {xs:'8px',sm:"14px"} }}>{params?.row?.specialization}</Typography>
        }
      },

      {
        field: 'action',
        headerName: t('Action'),
        flex: 2,
        headerAlign: 'center',
        align: 'center',
        renderCell: params => {
          return (
            <>
            <Stack direction={{ sm: 'row' }}>
              <Box >
                    <Link href={`/profile/${params.row.id}?type=profile`}>
                      <IconButton onClick={handleViewProfileTap}>
                        <VisibilityIcon variant="contained" sx={{ color: '#8090A7' }} size='small'>Details</VisibilityIcon>
                      </IconButton>
                    </Link>
                    <IconButton>
                      <BorderColorOutlinedIcon style={{ color: '#8090A7' }} variant="contained" color="primary" size='small' onClick={() => handleEditClick(params.row)}>Edit</BorderColorOutlinedIcon>
                    </IconButton>
                    <IconButton>
                      <DeleteOutlinedIcon onClick={() => handleClickOpen(params.row.id)} variant="contained" color="#8090A7" size='small'>  Delete   </DeleteOutlinedIcon>
                    </IconButton>


              </Box>
            </Stack>
            {isDeletePopupOpen && <AlertDialogDeleteUser id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
            <Box>
              <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
          </>
          )
        }
      }
    ],
    []
  )
}

export default useUserColumns
