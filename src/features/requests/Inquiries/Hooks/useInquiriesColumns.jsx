import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import { Avatar, Button, IconButton, Rating, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import DeleteIcon from '@mui/icons-material/Delete'
import { useTranslation } from 'react-i18next'
import PersonIcon from '@mui/icons-material/Person'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useDeleteRequest } from './useDeleteRequest'
import { useAccepteRequest } from './useAccepteRequest' // Import the new hook
import { useRejectRequest } from './useRejectRequest'
import { Stack } from '@mui/system'
import Link from 'next/link'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ITEM_HEIGHT = 162

const useInquiriesColumns = () => {
  const [openModal, setOpenModal] = useState(false)

  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [showMoreMap, setShowMoreMap] = useState({})
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [rowData, setrowData] = React.useState(null)
  const open = Boolean(anchorEl)

  const deleteContractMutation = useDeleteRequest()
  const { mutate: AccepteRequest, isLoading } = useAccepteRequest()

  const { mutate: RejectRequest } = useRejectRequest()

  const handleApproveClick = params => {
    AccepteRequest(params?.row?.id)
  }

  const handleRejectClick = params => {
    RejectRequest(params?.row?.id)
  }

  const handleClick = (event, params) => {
    setrowData(params)
    setAnchorEl(event.currentTarget)
  }

  const handleCloseAnchor = () => {
    setAnchorEl(null)
  }
  const { t } = useTranslation()

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  }

  const handleShowMoreClick = params => {
    const { id } = params.row
    setShowMoreMap(prevMap => ({
      ...prevMap,
      [id]: !prevMap[id]
    }))
  }

  const handleDeleteClick = () => {
    deleteContractMutation.mutate(rowData.id)
    handleCloseAnchor()
  }

  return useMemo(() => [
    {
      field: 'employee',
      headerName: t('Employee'),
      flex: 2.5,
      disableClickEventBubbling: true,
      renderCell: params => (
        <Box>
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.user_id}`}>
            <Stack direction={'row'} alignItems={'center'} >
              <Avatar
              src={process.env.NEXT_PUBLIC_IMAGES + '/'+params?.row?.user_info}
              />
            <Stack ml={'8px'}>
              <Typography  className='custome-data-grid-font'>{params?.row?.employee}</Typography>
              <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
            </Stack>
            </Stack>
          </Link>
        </Box>
      )
    },
    {
      field: 'Date',
      headerName: t('Date'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Stack direction={'column'}>
            <Box>
              <Typography className='custome-data-grid-font'>{params?.row?.Date}</Typography>
            </Box>
            <Box>
              <Typography className='custome-data-grid-font2'>{params?.row?.time}</Typography>
            </Box>
          </Stack>
        )
      }
    },

    {
      field: 'Title',
      headerName: t('Title'),
      flex: 1,
      disableClickEventBubbling: true,
      renderCell: params => {
        return (
          <Box>
            <Typography className='custome-data-grid-font'>{params?.row?.Title}</Typography>
          </Box>
        )
      }
    },
    {
      field: 'CONTENT',
      headerName: t('Content'),
      flex: 3,

      disableClickEventBubbling: true,
      renderCell: params => {
        const content = params.row.CONTENT
        const id = params.row.id
        const shouldShowMore = content?.length > 40

        return (
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <Typography className='custome-data-grid-font'>{content?.slice(0, 40) + '...'}</Typography>
            </div>
            {showMoreMap[id] && (
              <div>
                <Typography className='custome-data-grid-font'>{content?.slice(40)}</Typography>

              </div>
            )}

            {shouldShowMore && (
              <>
                <Typography
                  variant='span'
                  sx={{ cursor: 'pointer', width: '10px' }}
                  color='#8090A7'
                  onClick={() => handleShowMoreClick(params)}
                >
                  <p>
                    {showMoreMap[id] ? (
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography fontSize={'12px'} fontWeight={500} lineHeight={'25px'} color={'#8090A7'}>
                          {t('See Less')}
                        </Typography>
                        <KeyboardArrowUpIcon style={{ cursor: 'pointer', marginLeft: '8px' }} fontSize='10px' />{' '}
                      </Box>
                    ) : (
                      <Box display={'flex'} alignItems={'center'}>
                        <Typography fontSize={'12px'} fontWeight={500} lineHeight={'25px'} color={'#8090A7'}>
                          {t('See More')}
                        </Typography>
                        <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginLeft: '8px' }} fontSize='10px' />{' '}
                      </Box>
                    )}
                  </p>
                </Typography>
              </>
            )}
          </Box>
        )
      }
    },

    {
      field: 'actions',
      headerName: t('Actions'),
      headerAlign: 'center',
      flex: 2,
      renderCell: params => {
        return (
          <Stack direction={'column'} height={'100%'} width={'100%'}>
            <Box display={'flex'} justifyContent={'end'} pt={'12px'}>
              <IconButton
                aria-label='more'
                id='long-button'
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup='true'
                sx={{ padding: 0, margin: 0 }}
                onClick={event => handleClick(event, params.row)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id='long-menu'
                MenuListProps={{
                  'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseAnchor}
                PaperProps={{
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '208px',
                    boxShadow: 'none'
                  }
                }}
              >
                <MenuItem sx={{ padding: '0', color: '#3F4458' }} onClick={handleOpenModal}>
                  <Box style={{ textDecoration: 'none' }}>
                    <IconButton>
                      <PersonIcon variant='contained' sx={{ color: '#3F4458' }} size='small' />
                    </IconButton>
                    <span style={{ color: '#3F4458' }}>{t('View Request')}</span>
                  </Box>
                </MenuItem>
                <MenuItem sx={{ padding: '0', color: '#3F4458' }} onClick={handleDeleteClick}>
                  <Box style={{ textDecoration: 'none' }}>
                    <IconButton>
                      <DeleteIcon variant='contained' sx={{ color: '#3F4458' }} size='small' />
                    </IconButton>
                    <span style={{ color: '#3F4458' }}>{t('Delete')}</span>
                  </Box>
                </MenuItem>
              </Menu>

              <Dialog open={openModal} sx={{ overflowX: 'hidden' }} onClose={handleCloseModal}>
                <DialogTitle sx={{ fontSize: '20px', fontWeight: '600', color: '#3F4458', textAlign: 'center' }}>
                  {t('Request')}
                </DialogTitle>
                <DialogContent sx={{ overflowX: 'hidden', width: '100%', height: '100%' }}>
                  <h3>{t('Title Request')}</h3>
                  <p style={{ fontWeight: '400', fontSize: '14px', color: '#3e4458' }}>{rowData?.Title}</p>
                  <Divider component='' sx={{ width: '80%' }} />
                  <h3>{t('Date Request')}</h3>
                  <p style={{ fontWeight: '400', fontSize: '14px', color: '#3e4458' }}>{rowData?.Date}</p>
                  <Divider component='' sx={{ width: '80%' }} />
                  <h3>{t('Description Request')}</h3>
                  <p
                    style={{
                      fontWeight: '400',
                      fontSize: '14px',
                      color: '#3e4458',
                      width: '80%'
                    }}
                  >
                    {rowData?.CONTENT}
                  </p>
                </DialogContent>
              </Dialog>
            </Box>
            <Box display={'flex'} height={'100%'} justifyContent={'end'} pb={'12px'}>
              {params.row.status === 'waiting' ? (
                <Stack direction={'row'} alignItems={'end'} spacing={1}>
                  <Button
                    sx={{
                      display: 'flex',
                      padding: '4px 12px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      borderRadius: '4px',
                      background: 'rgba(145, 196, 131, 0.20)'
                    }}
                    onClick={() => handleApproveClick(params)}
                  >
                    <Typography
                      sx={{
                        color: 'var(--green, #91C483)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '130%' /* 18.2px */,
                        textTransform: 'capitalize'
                      }}
                    >
                      {t('Accept')}
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      display: 'flex',
                      padding: '4px 12px',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      borderRadius: '4px',
                      background: 'rgba(223, 46, 56, 0.20)'
                    }}
                    onClick={() => handleRejectClick(params)}
                  >
                    <Typography
                      sx={{
                        color: 'var(--red, #DF2E38)',
                        fontSize: '14px',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        lineHeight: '130%' /* 18.2px */,
                        textTransform: 'capitalize'
                      }}
                    >
                      {t('Reject')}
                    </Typography>
                  </Button>
                </Stack>
              ) : params.row.status === 'rejected' ? (
                <Box display={'flex'} height={'100%'} justifyContent={'end'} alignItems={'end'} pb={'12px'}>
                  <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#DF2E38' }}>
                    {t('Rejected')}
                  </Typography>
                </Box>
              ) : (
                <Box display={'flex'} height={'100%'} justifyContent={'end'} alignItems={'end'} pb={'12px'}>
                  <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#91C483' }}>
                    {t('Accepted')}
                  </Typography>
                </Box>
              )}
            </Box>
          </Stack>
        )
      }
    }
  ])
}

export default useInquiriesColumns
