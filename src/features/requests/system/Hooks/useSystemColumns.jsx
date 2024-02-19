import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import { Avatar, Button,  Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mui/system'
import Link from 'next/link'
import AlertDialogDeleteSystem from '../Componets/dialogDelete'
import AlertDialogAcceptSystem from '../Componets/dialogAccept'

const ITEM_HEIGHT = 162

const useInquiriesColumns = () => {

  const [DeleteOpen , setDeleteOpen] = useState(false)
  const [AcceptOpen , setAcceptOpen] = useState(false)
  const [SystemId , setSystemId] = useState()

  const {t} = useTranslation()

  const handleApproveClick=id => {
    setAcceptOpen(true)
    setSystemId(id)
  }
  const handleRejectClick=id => {
    setDeleteOpen(true)
    setSystemId(id)
  }
  const handleClose=_=>{
    setDeleteOpen(false)
    setAcceptOpen(false)
  }
  return useMemo(() => [
    {
      field: 'first_name',
      headerName: t('Employee'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.user_id}`}>
        <Stack direction={'row'} alignItems={'center'} spacing={1}>

            <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
            <Typography sx={{ fontSize: { sm: '14px', xs: '8px' } }}>{params?.row?.first_name}</Typography>
            <Typography sx={{ fontSize: { sm: '14px', xs: '8px' } }}>{params?.row?.last_name}</Typography>
        </Stack>
          </Link>
      )
    },
    {
      field: 'date',
      headerName: t('Date'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => {
        return <Typography sx={{ fontSize: { sm: '14px', xs: '8px' } }}>{params?.row?.date}</Typography>
      }
    },

    {
      field: 'title',
      headerName: t('Title'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
            <Typography sx={{ fontSize: { sm: '14px', xs: '8px' } }}>{params?.row?.title}</Typography>
        )
      }
    },
    {
      field: 'content',
      headerName: t('Content'),
      flex: 1
    },

    {
      field: 'actions',
      headerName: t('Actions'),
      headerAlign: 'center',
      flex: 1,
      renderCell: params => {
        return (

            <Stack direction={{sm:'row',xs:'column'}} width={'100%'} spacing={{sm:3,xs:1}} justifyContent={'center'}>
            <Button
              sx={{
                width: '100%',
                color: '#91C483',
                fontWeight: '500',
                fontSize: '10px',
                backgroundColor: '#DDE6DA',
                borderRadius: '4px'
              }}
              onClick={() => handleApproveClick(params?.row?.id)}
            >
              {t('Approve')}
            </Button>
            <Button
              sx={{
                width: '100%',
                color: '#DF2E38',
                fontWeight: '500',
                fontSize: '10px',
                backgroundColor: '#F9D5D7',
                borderRadius: '4px'
              }}
              onClick={() => handleRejectClick(params?.row?.id)}
            >
              {t('Decline')}
            </Button>
            {DeleteOpen ? <AlertDialogDeleteSystem id={SystemId} open={DeleteOpen} handleClose={handleClose} />:null}
            {AcceptOpen ? <AlertDialogAcceptSystem id={SystemId} open={AcceptOpen} handleClose={handleClose} />:null}
            </Stack>
        )
      }
    }
  ])
}

export default useInquiriesColumns
