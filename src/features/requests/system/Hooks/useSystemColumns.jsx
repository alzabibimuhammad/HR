import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import { Avatar, Button, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Stack } from '@mui/system'
import Link from 'next/link'
import AlertDialogDeleteSystem from '../Componets/dialogDelete'
import AlertDialogAcceptSystem from '../Componets/dialogAccept'

const ITEM_HEIGHT = 162

const useInquiriesColumns = () => {
  const [DeleteOpen, setDeleteOpen] = useState(false)
  const [AcceptOpen, setAcceptOpen] = useState(false)
  const [SystemId, setSystemId] = useState()

  const { t } = useTranslation()

  const handleApproveClick = id => {
    setAcceptOpen(true)
    setSystemId(id)
  }
  const handleRejectClick = id => {
    setDeleteOpen(true)
    setSystemId(id)
  }
  const handleClose = _ => {
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
            <Stack>
              <Typography className='custome-data-grid-font'>{params?.row?.first_name} {params?.row?.last_name}</Typography>
              <Typography className='custome-data-grid-font2'>{params?.row?.department}</Typography>
            </Stack>
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
        return <Typography className='custome-data-grid-font' >{params?.row?.date}</Typography>
      }
    },

    {
      field: 'title',
      headerName: t('Title'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => {
        return <Typography className='custome-data-grid-font'>{params?.row?.title}</Typography>
      }
    },
    {
      field: 'content',
      headerName: t('hours'),
      flex: 1,
      renderCell: params => {
        return <Typography className='custome-data-grid-font'>{params?.row?.content}</Typography>
      }

    },

    {
      field: 'actions',
      headerName: t('Actions'),
      headerAlign: 'center',
      flex: 1,
      renderCell: params => {
        return (
          <Stack direction={{ sm: 'row', xs: 'column' }} width={'100%'} justifyContent={'center'}>
            <div
              onClick={() => handleRejectClick(params?.row?.id)}
              style={{
                width: '70px',
                height: '26px',
                cursor: 'pointer',
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 4,
                paddingBottom: 4,
                background: 'rgba(223, 46, 56, 0.20)',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'inline-flex'
              }}
            >
              <div
                style={{
                  color: '#DF2E38',
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  textTransform: 'capitalize',
                  lineHeight: 18.2,
                  wordWrap: 'break-word'
                }}
              >
                {t('Reject')}
              </div>
            </div>
            <div
              onClick={() => handleApproveClick(params?.row?.id)}
              style={{
                marginLeft:'8px',
                cursor:'pointer',
                width: '74px',
                height: '26px',
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 4,
                paddingBottom: 4,
                background: 'rgba(145, 196, 131, 0.20)',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                display: 'inline-flex'
              }}
            >
              <div
                style={{
                  color: '#91C483',
                  fontSize: 14,
                  fontFamily: 'Montserrat',
                  fontWeight: '500',
                  lineHeight: 18.2,
                  wordWrap: 'break-word'
                }}
              >
                {t('Accept')}
              </div>
            </div>
            {DeleteOpen ? <AlertDialogDeleteSystem id={SystemId} open={DeleteOpen} handleClose={handleClose} /> : null}
            {AcceptOpen ? <AlertDialogAcceptSystem id={SystemId} open={AcceptOpen} handleClose={handleClose} /> : null}
          </Stack>
        )
      }
    }
  ])
}

export default useInquiriesColumns
