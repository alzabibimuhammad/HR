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
import DeleteIcon from '../../../../../public/images/IconInput/delete'
import EditIcon from '../../../../../public/images/IconInput/edit'
import ViewIcon from '../../../../../public/images/IconInput/view'
import { Badge } from '@mui/material'

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
            <Link href={`/profile/${params?.row?.id}`} style={{ display: 'flex', textDecoration: 'none', alignItems: 'center' }}>
              <Badge color={params?.row?.status === '0'?'success':'error'} variant="dot" sx={{ marginX: '12px' }} size="large">
              </Badge>
              <Avatar sx={{ width: '36px', height: '36px' }} src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Stack marginLeft={'12px'} direction={'column'}>
                <Typography className='custome-data-grid-font'>{params?.row?.first_name} {params?.row?.last_name}</Typography>
                <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
              </Stack>
            </Link>
          );
        }
      },

      {
        field: 'role',
        headerName: t('Level'),
        disableClickEventBubbling: true,
        flex: 1.5,
        headerAlign: 'center',
        align: 'center',
        renderCell: params => {
          return <Typography  className='custome-data-grid-font' >{params?.row?.level}</Typography>
        }
      },

      {
        field: 'department',
        headerName: t('SPECIALIZATION'),
        flex: 2.5,
        renderCell: params => {
          return <Typography  className='custome-data-grid-font'>{params?.row?.department
            }</Typography>
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
                        <ViewIcon/>
                      </IconButton>
                    </Link>
                    <IconButton onClick={() => handleEditClick(params.row)}>
                    <EditIcon    />

                      <BorderColorOutlinedIcon style={{ color: '#8090A7' }} variant="contained" color="primary" size='small' onClick={() => handleEditClick(params.row)}>Edit</BorderColorOutlinedIcon>
                    </IconButton>
                    <IconButton onClick={() => handleClickOpen(params.row.id)} >
                      <DeleteIcon  >  Delete   </DeleteIcon>
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
    ]
  )
}

export default useUserColumns
