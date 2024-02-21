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
import { Avatar, Button, Card, CardContent, MenuItem, TextField } from '@mui/material'
import DrawerForm from '../DrawerForm'
import { Stack } from '@mui/system'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import Link from 'next/link'
import AlertDialog from '../dialog'
import { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function createData(id, employee, role, spcialization, team, user) {
  return {
    employee,
    role,
    spcialization,
    team,
    id,
    user
  }
}

export default function CollapsibleTable({ Data }) {
  const { t } = useTranslation()
  const [users, setUsers] = useState({ rows: [] })
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false) // Add this line
  const [deleteId, setDeleteId] = useState()
  const [search , setSearch] = useState(null)
  const [department,setDepartment] = useState('')
  const [role, setRole] = useState('')

  useEffect(() => {
     let filterData =  Data
      if(role)filterData = filterData?.filter((value,index)=>value?.role == role)
      if(department)filterData = filterData?.filter((value,index)=>value?.specialization == department)
      if(search)filterData = filterData?.filter((value,index)=>(
       value?.first_name?.toLowerCase()?.includes(search.toLowerCase())||
       value?.last_name?.toLowerCase()?.includes(search.toLowerCase())
      ))
      setUsers({rows:filterData})
  }, [Data,search,role,department])

  const handleClickOpen = id => {
    setIsDeletePopupOpen(true)
    setDeleteId(id)
  }
  const handleClose = _ => {
    setIsDeletePopupOpen(false)
  }
  function Row({ row }) {
    const [open, setOpen] = useState(false)

    const handleToggle = () => {
      setOpen(!open)
    }






    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={handleToggle}>
          <TableCell component='th'>
            <Stack direction={'column'} justifyContent={'start'} alignItems={'start'} spacing={2}>
              <Box display={'flex'} alignItems={'center'}>

                <Avatar
                  sx={{ width: { sm: 35, xs: 20 }, height: { sm: 35, xs: 20 } }}
                  src={process.env.NEXT_PUBLIC_IMAGES + '/' + row?.user_info?.image}
                  alt=''
                />
                <Typography sx={{ marginLeft: '2px', fontSize: '14px' }}>
                  {row?.first_name} {row?.last_name}
                </Typography>

              </Box>
              <Box>
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
                    <Typography sx={{ fontSize: '14px' }}>{t('Daily Report')}</Typography>
                  </Stack>
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
              </Box>
            </Stack>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: '14px' }}>{t(row.role)}</Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: '14px' }}>{row.specialization}</Typography>
          </TableCell>
          <TableCell>
            <Typography sx={{ fontSize: '14px' }}>{row.department.name}</Typography>
          </TableCell>
          <TableCell>
            <Box>
              <Link href={`/profile/${row.id}`}>
                <IconButton>
                  <VisibilityIcon variant='contained' sx={{ color: '#8090A7' }} size='small'>
                    Details
                  </VisibilityIcon>
                </IconButton>
              </Link>
              <IconButton onClick={() => handleClickOpen(row.id)}>
                <DeleteOutlinedIcon style={{ color: '#8090A7' }} variant='error' size='small'>
                  Delete
                </DeleteOutlinedIcon>
              </IconButton>
            </Box>
            {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout='auto' unmountOnExit>
              <Box sx={{ margin: 1 }}>
                  <Stack direction={'column'}>
                    {row?.late !=0?
                    <>
                    <Typography>{t('Late')} {row?.late} {t('Hours')}</Typography>
                    <Typography sx={{ fontSize:'14px',color:'#DF2E38' }}>{t('Warning because of delay')}</Typography>
                    </>
                    :
                    <Typography>{t('No Updates')}</Typography>
                  }
                    </Stack>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    )
  }
  const handelSearch = e => {
    if(e.target.value)setSearch(e.target.value)
    else setSearch(null)
  }

  const handleRoleChange = e => {
    if (e.target.value) setRole(e.target.value)
    else setRole(null)
  }

  const handledepartmentChange = e => {
    if(e.target.value)setDepartment(e.target.value)
    else setDepartment(null)
  }

  let specialization = new Set([])
  Data?.forEach(element => {
    specialization.add(element?.specialization)
  })

  let roleData = new Set([])
  Data?.forEach(element => {
    roleData.add(element?.role)
  })

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2} >
          <Typography variant='h4' paddingBottom={'10px'}>
            {t('Reports List')}
          </Typography>
          <TextField
                placeholder={t('Search')}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <Box paddingRight={1}>
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
                sx={{ paddingLeft: '8px', backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}
                size='small'
              />
              <Stack direction={'row'} alignItems={'center'} spacing={2}>
                <Typography variant='h5' >{t('Filter')}</Typography>
              <TextField
                select
                fullWidth
                value={role}
                label='Role'
                defaultValue={role}
                onChange={handleRoleChange}
                size='small'
              >
                <MenuItem value=''>{`${t('Role')}`}</MenuItem>

                {Array.from(roleData).map(element => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                fullWidth
                defaultValue={department}
                value={department}
                label='Specialization'
                onChange={handledepartmentChange}
                size='small'
              >
                <MenuItem value=''>{`${t('Specialization')}`}</MenuItem>
                {Array.from(specialization).map(element => (
                  <MenuItem key={element} value={element}>
                    {element}
                  </MenuItem>
                ))}
              </TextField>

              </Stack>

          <TableContainer component={Paper}>
            <Table aria-label='collapsible table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: '20%', marginLeft: '10%' }}>{t('Employee')}</TableCell>
                  <TableCell sx={{ width: '10%' }}>{t('Role')}</TableCell>
                  <TableCell sx={{ left: 0, width: '10%' }}>{t('Specialization')}</TableCell>
                  <TableCell sx={{ left: 0, width: '10%' }}>{t('Team')}</TableCell>
                  <TableCell sx={{ left: 0, width: '10%' }}>{t('Action')}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.rows?.map(row => (
                  <React.Fragment key={row.id}>
                    <Row row={row} />
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </CardContent>
    </Card>
  )
}
