//Collapsible table
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Button, Card, CardContent, MenuItem, TextField } from '@mui/material';
import DrawerForm from '../DrawerForm';
import { Stack } from '@mui/system';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Link from 'next/link';
import AlertDialog from '../dialog';
import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function createData(id,employee,role,spcialization,team,user) {
  return {
    employee,
    role,
    spcialization,
    team,
    id,
    user


  };
}


export default function CollapsibleTable(Data) {
  const {t} = useTranslation()
  function Row(props) {

    console.log('props',props.row);

    const [row, setrow] = useState(props.row);
    console.log('rossss',row);
    const [open, setOpen] = useState(false);
    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const {t} = useTranslation()

    const handleEditClick = (row) => {
      setEditData(row);
      setIsDrawerOpenEdit(true);
    };

    const handleClickOpen = (params) => {
      const { id } = params;
      setDeleteId(id);
      setIsDeletePopupOpen(true);


    };

    const handleClose = () => {
      setIsDeletePopupOpen(false)
    };
    return (
      <>

            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
              <TableCell component="th">
                <Stack direction={'column'} justifyContent={'start'} alignItems={'start'} sx={{ padding: '0', margin: '0' }}>
                  <Box>
                    <Typography sx={{ fontSize:'14px' }} >
                    {row.employee}
                    </Typography>
                    </Box>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => setOpen(!open)}
                      sx={{
                        fontSize: '13px',
                        '&:hover': {
                          background: 'none !important',
                        },
                        padding: 0,
                      }}
                      disableRipple
                    >
                      <Stack direction={'row'}>
                        <Typography sx={{ fontSize: '13px', marginRight: '3px' }}>{row?.user?.length}</Typography>
                        <Typography sx={{ fontSize: '14px' }}>{t('Daily Report')}</Typography>
                      </Stack>
                      {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </Box>
                </Stack>
              </TableCell>
              <TableCell>
              <Typography sx={{ fontSize:'14px' }} >

                {t(row.role)}
                </Typography>
                </TableCell>
              <TableCell>
              <Typography sx={{ fontSize:'14px' }} >

                {row.specialization}
                </Typography>
                </TableCell>
              <TableCell>
              <Typography sx={{ fontSize:'14px' }} >

                {row.team}
                </Typography>
                </TableCell>
              <TableCell>
                <Box>
                  <Link href={`/coach/coachProfile/${row.id}`}>
                    <IconButton>
                      <VisibilityIcon variant="contained" sx={{ color: '#8090A7' }} size="small">
                        Details
                      </VisibilityIcon>
                    </IconButton>
                  </Link>
                  <IconButton onClick={() => handleClickOpen(row.id)}>
                    <DeleteOutlinedIcon style={{ color: '#8090A7' }} variant="error" size="small">
                      Delete
                    </DeleteOutlinedIcon>
                  </IconButton>
                </Box>
                {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box sx={{ margin: 1 }}>

                    <Table size="small" aria-label="purchases">
                      <TableHead>
                        <TableRow>
                          <TableCell>{t('ID')}</TableCell>
                          <TableCell>{t('Name')}</TableCell>
                          <TableCell align="right">{t('Email')}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {row?.user?.map((user) => (
                          <TableRow key={user.date}>
                            <TableCell component="th" scope="row">
                              {user.id}
                            </TableCell>
                            <TableCell>
                              <Stack direction={'row'} spacing={2}>
                              <Typography>
                              {user.first_name}
                              </Typography>
                              <Typography>
                              {user.last_name}
                              </Typography>
                              </Stack>
                              </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Box>
                </Collapse>
              </TableCell>
            </TableRow>
      </>
    );

  }
  const rows = [
    createData(1,'muhammad','admin','sss','front',[{'id':1,'first_name':'dani','last_name':'dani','email':'muhammad@gmail.com'},{'id':2,'first_name':'dani','last_name':'dani','email':'muhammad@gmail.com'}]),
    createData(2,'muhammad','admin','sss','back'),
    createData(3,'muhammad','customer','sss','ui'),
    createData(4,'muhammad','employee','sss','ui',[{'id':1,'first_name':'dani','last_name':'dani','email':'muhammad@gmail.com'},{'id':2,'first_name':'dani','last_name':'dani','email':'muhammad@gmail.com'}])
    ];


  const [openParent, setOpenParent] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenParent(true);
  };

  const [originalData, setOriginalData] = useState(rows);
  const [teams, setTeams] = useState({ rows: rows });

  console.log('ttter',teams.rows);
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');


  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  useEffect(()=>{
    let filteredData;
    if(role && status){
      filteredData = originalData.filter((row) => {
        return row.team === status && row.role===role;
      });
    setTeams({ rows: filteredData });

    }
    else if(role && !status){
      filteredData = originalData.filter((row) => {
        return row.role===role;
      });
    setTeams({ rows: filteredData });

    }
    else if(status && !role){
      filteredData = originalData.filter((row) => {
        return row.team === status ;
      });
     setTeams({ rows: filteredData });

    }
    else
    setTeams({ rows: originalData });
},[role,status])

  return (


    <Card>
      <CardContent   >

            <Stack
                direction={{ xs: 'column', sm: 'column' }}
                marginBottom={"10px"}
                spacing={3}
              >
            <TextField
              placeholder='Search'

              InputProps={{
                startAdornment: (
                  <Box paddingRight={1} >
                  <svg width="14"  height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="zoom-split">
                      <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z" fill="#8090A7"/>
                    </g>
                  </svg>
                  </Box>
                ),
              }}
              sx={{ paddingLeft: '8px',backgroundColor:'#F5F7FA' }}
              size='small'


            />

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ sm: 10, xs: 5 }}
                width={{ xs: '250%', sm: '97%' }}
                marginLeft={{ xs:'30px' }}
                marginBottom={"10px"}
                alignItems={{sm:"center",xs:"inherit"}}

              >

                <Typography>{t('Filter')}</Typography>
                  <TextField
                    size='small'
                    select
                    fullWidth
                    defaultValue="Select Role"
                    SelectProps={{
                      value: role,
                      displayEmpty: true,
                      onChange: handleRoleChange,
                    }}
                  >
                    <MenuItem value=''>{t('Select Role')}</MenuItem>
                    <MenuItem value='admin'>{t('admin')}</MenuItem>
                    <MenuItem value='customer'>{t('customer')}</MenuItem>
                    <MenuItem value='employee'>{t('employee')}</MenuItem>
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    size='small'

                    defaultValue='Select Team'
                    SelectProps={{
                      value: status,
                      displayEmpty: true,
                      onChange: handleStatusChange,
                    }}
                  >
                    <MenuItem value=''>{t('Specialization')}</MenuItem>
                    <MenuItem value='back'>back</MenuItem>
                    <MenuItem value='front'>front</MenuItem>
                    <MenuItem value='ui'>UI/UX</MenuItem>
                  </TextField>
                  <TextField
                  fullWidth
                  type='date'
                  size='small'

                  />
                </Stack>
                </Stack>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table"  >
        <TableHead>

          <TableRow>

            <TableCell sx={{ width:'20%',marginLeft:'10%' }} >{t('Employee')}</TableCell>
            <TableCell sx={{ width:'10%' }} >{t('Role')}</TableCell>
            <TableCell sx={{ left:0,width:'10%' }} >{t('Specialization')}</TableCell>
            <TableCell sx={{ left:0,width:'10%' }} >{t('Team')}</TableCell>
            <TableCell sx={{ left:0,width:'10%' }} >{t('Action')}</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>


          {teams?
          teams?.rows?.map((row) => (
              <Row row={row} />
          ))
          :null
          }

        </TableBody>
      </Table>
    </TableContainer>
    </CardContent>

    </Card>
  );
}
