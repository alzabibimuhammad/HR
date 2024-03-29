//Collapsible table
import * as React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Avatar, Button, TextField } from '@mui/material'
import DrawerForm from '../DrawerForm'
import { Stack } from '@mui/system'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import Link from 'next/link'
import AlertDialog from '../dialog'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AlertDialogMember from '../dialogTeamUser'
import EditeForm from '../EditeForm'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useDispatch } from 'react-redux'
import { setProfileTap } from 'src/store/apps/user'
import DeleteIcon from '../../../../../../public/images/IconInput/delete'
import EditIcon from '../../../../../../public/images/IconInput/edit'
import AddIcon from '@mui/icons-material/Add';
import useGetAllTeams from '../../hooks/useGetAllTeams'

function createData(id, name, user) {
  return {
    id,
    name,
    user
  }
}

export default function CollapsibleTable(Data, setEditData) {
  function Row(props) {
    const { row } = props

    const sortedRows = row?.user.sort((a, b) => {
      const roleA = a.role === 'team_leader' ? -1 : 1;
      const roleB = b.role === 'team_leader' ? -1 : 1;
      if (roleA === roleB) {
        return 0;
      } else {
        return roleA - roleB;
      }
    });

    // const { data } = useGetAllTeams();


    const [open, setOpen] = useState(false)

    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
    const [deleteId, setDeleteId] = useState(null)

    const [SelectedRow, setSelectedRow] = useState('')
    const [openParentEdit, setOpenParentEdit] = useState(false)

    const [isMemberPopupOpen, setIsMemberPopupOpen] = useState(false)
    const [memberdeleteId, setMemberDeleteId] = useState(null)

    const dispatch = useDispatch()

    const handleEditClick = row => {

      setSelectedRow(row)

      setOpenParentEdit(true)
    }

    const handleClickOpen = params => {
      setDeleteId(params)
      setIsDeletePopupOpen(true)
    }

    const handleClose = () => {
      setIsDeletePopupOpen(false)
    }

    const handleMemberOpen = params => {
      setMemberDeleteId(params)
      setIsMemberPopupOpen(true)


    }

    const handleMemberClose = () => {
      setIsMemberPopupOpen(false)
    }

    const handleProfileTap=_=>{
      dispatch(setProfileTap(2))
    }

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell component='th'>
            <Stack
              direction={'column'}
              justifyContent={'start'}
              alignItems={'start'}
              sx={{ padding: '0', margin: '0' }}
            >
              <Box>
                <Typography sx={{ fontSize: '16px' }}>{row.name}</Typography>
              </Box>

              <Box sx={{marginTop:'8px'}}>
                <IconButton
                  size='small'
                  onClick={() => setOpen(!open)}
                  sx={{
                    fontSize: '13px',
                    '&:hover': {
                      background: 'none !important'
                    },

                    padding: 0
                  }}
                  disableRipple
                >
                  <Stack direction={'row'}>
                    <Typography sx={{ fontSize: '13px', marginRight: '3px' }}>{row?.user?.length}</Typography>
                    <Typography sx={{ fontSize: '13px' }}>{t('Members')}</Typography>
                  </Stack>

                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </Box>
            </Stack>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: '14px' }}>#{row.id}</Typography>
          </TableCell>
          <TableCell sx={{ textAlign: 'right' }}>
            <Box>
              <IconButton  onClick={() => handleEditClick(row)}>
                <EditIcon/>
              </IconButton>

              {SelectedRow && (
                <EditeForm open={openParentEdit} setOpenParent={setOpenParentEdit} SelectedRow={SelectedRow} data={Data}/>
              )}


              <IconButton onClick={() => handleClickOpen(row.id)}>
                <DeleteIcon/>
              </IconButton>
            </Box>

            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
            {isMemberPopupOpen && <AlertDialogMember id={memberdeleteId} open={isMemberPopupOpen} handleClose={handleMemberClose} />}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Stack spacing={3} sx={{ margin: 1 }}>
                {sortedRows?.map((user,index) => (

                  <Stack direction={'row'} justifyContent={'space-between'}>
                    <Link style={{ textDecoration: 'none' }} href={`/profile/${user.id}`}>
                      <Stack direction={'row'} alignItems={'center'} >
                        <Avatar
                          src={process.env.NEXT_PUBLIC_IMAGES + '/' + user?.user_info?.image}
                          sx={{ width: 46, height: 46 }}
                        />
                        <Stack marginLeft={'8px'} direction={'column'}>
                          <>
                        {index == 0 && user?.role == 'team_leader' ?

                        <>
                          <Typography className='custome-data-grid-font'>
                            {user.first_name} {user.last_name}
                          </Typography>
                          <Typography className='custome-data-grid-font2'>
                            {user.role}
                          </Typography>
                          </>
                          :
                          <Typography className='custome-data-grid-font'>
                            {user.first_name} {user.last_name}
                          </Typography>

                          }

                          </>
                        </Stack>
                      </Stack>
                    </Link>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                      <IconButton  onClick={() => handleMemberOpen(user.id)}>
                        <HighlightOffIcon  style={{ color: '#8090A7' }} variant color='error' size='small' />
                      </IconButton>
                      <Link href={`/profile/${user.id}?type=profile`}>
                        <IconButton onClick={handleProfileTap}>
                          <VisibilityIcon variant='contained' size='small' />
                        </IconButton>
                      </Link>
                    </Stack>
                  </Stack>

                ))}
              </Stack>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }

  const rows = Data?.Data?.data?.data?.map(item => {
    return createData(item.id, item.name, item.user)
  })

  const [fdata, setFdata] = useState()

  const [openParent, setOpenParent] = useState(false)

  const handleDrawerOpen = () => {
    setOpenParent(true)
  }

  const handelSearch = event => {
    if (event.target.value) {
      const searchFilter = rows?.filter(row => {
        if (row?.name.toLowerCase()?.includes(event.target.value.toLowerCase()))
          return row?.name.toLowerCase()?.includes(event.target.value.toLowerCase())
        else if (row?.id == event.target.value) return row?.id == event.target.value
      })

      setFdata(searchFilter)
    } else setFdata(null)
  }
  const { t } = useTranslation()

  return (
    <>

      <Stack
        spacing={{ xs: 2 }}
        direction={{ sm: 'row', xs: 'column' }}
        width={'100%'}
        justifyContent={'space-between'}

      >
        <Box width={{ sm: '50%', xs: '100%' }}>
          <TextField
            placeholder={t('Search')}
            fullWidth
            InputProps={{
              startAdornment: (
                <Box marginRight={'1%'}>
                  <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='zoom-split'>
                      <path
                        id='Combined Shape'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                        fill='#8090A7'
                      />
                    </g>
                  </svg>
                </Box>
              )
            }}
            onChange={handelSearch}
            sx={{ backgroundColor: '#F5F7FA',border:'none', boxShadow: 'none',width:{sm:'320px',xs:'100%'} }}
            size='small'
          />
        </Box>
        <Button
          width={{ xs: '100%' }}
          sx={{
            fontSize: '14px',
            color: 'white',
            borderRadius:'8px',
            fontWeight:'600px',

            backgroundColor: '#6AB2DF',
            ':hover': { color: '#6D6B77' }
          }}
          onClick={handleDrawerOpen}
        >
          <AddIcon sx={{ fontSize: 20, marginX:'8px'}}/>
          {t('Add Department')}
        </Button>
      </Stack>

      <Box >
        <DrawerForm data={Data} open={openParent} setOpenParent={setOpenParent} />
      </Box>

      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell className='css-sbn3f9-MuiDataGrid-columnHeaderTitle' >{t('Department Name')}</TableCell>
              <TableCell className='css-sbn3f9-MuiDataGrid-columnHeaderTitle' >{t('Department ID')}</TableCell>
              <TableCell className='css-sbn3f9-MuiDataGrid-columnHeaderTitle' sx={{ left: 0, width: '62%', textAlign: 'right' }}>{t('Action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fdata
              ? fdata.map(row => <Row key={row.id} row={row} />)
              : rows?.map(row => <Row key={row.id} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
