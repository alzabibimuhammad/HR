// Import necessary components and libraries
import React, {  useMemo, useState } from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { Avatar,  Chip, IconButton, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useTranslation } from 'react-i18next'
import AlertDialog from '../Componets/dialog'
import Link from 'next/link'

const useContractColumns = () => {


  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(null)

  const { t } = useTranslation()


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
            <Typography sx={{ fontSize: '14px' }}>{params?.row?.id}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'employee',
      headerName: t('Employee'),
      flex: 2.2,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
        <Link style={{ textDecoration:'none' }} href={`/profile/${params?.row?.user_id}`}>
            <Box display={'flex'} alignItems={'center'}  >
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES+'/'+params?.row?.user_info} alt=''  />
              <Typography ml={1} sx={{ fontSize: '14px' }}>
                {params?.row?.employee} {params?.row?.employeeLastName}
              </Typography>
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
            <Typography sx={{ fontSize: '14px' }}>{params?.row?.startDate}</Typography>
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
            <Typography sx={{ fontSize: '14px' }}>{params?.row?.endDate}</Typography>
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
            <Stack>
              <Link href={`/contracts/view/${params.row.id}`}>
                <IconButton>
                  <VisibilityIcon variant='contained' sx={{ color: '#FF9F43' }} size='small'>
                    Details
                  </VisibilityIcon>
                </IconButton>
              </Link>
            </Stack>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
          </>
        )
      }
    }
  ])
}

export default useContractColumns
