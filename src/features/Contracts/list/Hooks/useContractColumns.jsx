// Import necessary components and libraries
import React, {  useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Avatar,  Chip, IconButton, Typography } from '@mui/material'
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useTranslation } from 'react-i18next'
import AlertDialog from '../Componets/dialog'
import Link from 'next/link'
import DrawerForm from '../DrawerForm';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import EditIcon from '../../../../../public/images/IconInput/edit'

const useContractColumns = () => {


  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const [isDrawerOpenEdit, setIsDrawerOpenEdit] = useState(false)
  const [EditData, setEditData] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { t } = useTranslation()

  const handleEditClick = row => {
    setEditData(row)
    setIsDrawerOpenEdit(true)
    setIsMenuOpen(false)
  }


  const handleClose = () => {
    setIsDeletePopupOpen(false)
  }





  return useMemo(() => [
    {
      field: 'id',
      headerName: t('ID'),
      flex: 0.5,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Box>
            <Typography className='custome-data-grid-font'>{params?.row?.id}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'employee',
      headerName: t('Employee'),
      flex: 2.5,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
        <Link style={{ textDecoration:'none' }} href={`/profile/${params?.row?.user_id}`}>
            <Box display={'flex'} alignItems={'center'}  >
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} alt=''  />
              <Stack marginLeft={'23px'} >
              <Typography className='custome-data-grid-font' sx={{ fontSize: '14px' }}>
                {params?.row?.employee} {params?.row?.employeeLastName}
              </Typography>
              <Typography className='custome-data-grid-font2' >{params?.row?.specialization}</Typography>
              </Stack>
            </Box>
        </Link>
        )
      }
    },
    {
      field: 'startDate',
      headerName: t('Start Date'),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Box>
            <Typography className='custome-data-grid-font' >{params?.row?.startDate}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'endDate',
      headerName: t('End Date'),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Box>
            <Typography className='custome-data-grid-font' >{params?.row?.endDate}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'status',
      headerName: t('Status'),
      flex: 2,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Box>
            <Chip
              label={t(params?.row?.status)}
              sx={{
                backgroundColor:
                  params?.row?.status === 'active' ? 'rgba(145, 196, 131, 0.20)' : 'rgba(223,46,56,0.20)',
                color: params?.row?.status === 'active' ? 'var(--green, #91C483)' : 'red',
                fontSize: '13px',
                width: '100%',
                height: '20px'
              }}
            />
          </Box>
        )
      }
    },

    {
      field: 'action',
      headerName: t('Action'),
      flex: 2,
      renderCell: params => {
        return (
          <>
            <Stack direction={{ sm: 'row' }}>
              <Link href={`/contracts/view/${params?.row?.user_id}`}>
                <IconButton>
                  <RemoveRedEyeOutlinedIcon variant='contained' sx={{ color: '#8090A7' }} size='small'>
                    Details
                  </VisibilityIcon>
                </IconButton>
              </Link>
              <IconButton onClick={() => handleEditClick(params.row)}>
                <EditIcon/>
                      {/* <BorderColorOutlinedIcon style={{ color: '#8090A7' }} variant="contained" color="primary" size='small' onClick={() => handleEditClick(params.row)}>Edit</BorderColorOutlinedIcon> */}
                    </IconButton>
            </Stack>
              <Box>
              <DrawerForm pdf={params?.row?.path} open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
            </Box>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
          </>
        )
      }
    }
  ])
}

export default useContractColumns
