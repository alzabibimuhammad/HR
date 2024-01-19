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
import { Button } from '@mui/material';
import DrawerForm from '../DrawerForm';
import { Stack } from '@mui/system';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Link from 'next/link';
import AlertDialog from '../dialog';
import { useState } from 'react';
function createData(name,id,user) {
  return {
    name,
    id,
    user,

  };
}



export default function CollapsibleTable(Data) {
  function Row(props) {
    const { row } = props;

    const [open, setOpen] = useState(false);


    const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleEditClick = (row) => {
      setEditData(row);
      setIsDrawerOpenEdit(true);
    };

    const handleClickOpen = (params) => {
      console.log('dssdds oiiii',params) ;
      setDeleteId(params);
      setIsDeletePopupOpen(true);


    };

    const handleClose = () => {
      setIsDeletePopupOpen(false)
    };


    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>

          <TableCell  component="th" >

            <Stack direction={'column'}  justifyContent={'start'} alignItems={'start'} sx={{ padding:'0',margin:'0' }}  >

            <Box>
              {row.name}
            </Box>

            <Box >
            <IconButton
              size="small"
              onClick={() => setOpen(!open)}
              sx={{ fontSize:'13px',   "&:hover": {
                background: 'none !important',
              },
              padding:0
            }}
              disableRipple
            >

              <Stack direction={'row'} >
                <Typography sx={{ fontSize:'13px',marginRight:'3px'  }} >{row?.user?.length}</Typography>
                <Typography sx={{ fontSize:'13px' }} >Members</Typography>
              </Stack>

              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>

            </Box>
            </Stack>

          </TableCell>
          <TableCell >{row.user.length}</TableCell>
          <TableCell sx={{ textAlign:'right' }}>
              <Box>
                <IconButton>
                  <BorderColorOutlinedIcon style={{ color:'#8090A7' }} variant="contained" color="primary" size='small' onClick={() => handleEditClick(params.row)}>Edit</BorderColorOutlinedIcon>
                </IconButton>

                <IconButton  onClick={() => handleClickOpen(row.id)}>
                <DeleteOutlinedIcon style={{ color:'#8090A7'  }} variant color="error" size='small'>Delete</DeleteOutlinedIcon>
                </IconButton>

              </Box>


              {/* <Box>
                <DrawerForm open={isDrawerOpenEdit} setOpenParent={setIsDrawerOpenEdit} Data={EditData} />
              </Box> */}
              {isDeletePopupOpen && <AlertDialog id={deleteId} open={isDeletePopupOpen} handleClose={handleClose} />}



          </TableCell>

        </TableRow>
         <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
           <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                 <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell align="right">Last Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>

                    {row?.user?.map((user) => (
                      <TableRow key={user.date}>
                        <TableCell component="th" scope="row">
                          {user.id}
                        </TableCell>
                        <TableCell>{user.first_name}</TableCell>
                        <TableCell align="right">{user.last_name}</TableCell>
                        <TableCell align="right">
                          {user.email}
                        </TableCell>
                      </TableRow>
                    ))}

                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>

        </TableRow>
      </React.Fragment>
    );
  }






  console.log(Data?.Data?.data?.data);
  const rows = Data?.Data?.data?.data?.map((item) => {
    return createData(item.name, item.id,item.user);
  });

  const [openParent, setOpenParent] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenParent(true);
  };


  return (
    <>
    <Button
    sx={{ marginLeft:'90%',fontSize:'13px',color:'white',backgroundColor:'#6AB2DF' ,     ":hover": {color:'#6D6B77'}, }}
    onClick={handleDrawerOpen}

     >+ ADD TEAM
     </Button>
     <Box sx={{ borderRadius:'15px' }} >
    <DrawerForm  open={openParent} setOpenParent={setOpenParent} />
    </Box>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>

          <TableRow>

            <TableCell sx={{ width:'20%',marginLeft:'10%' }} >TEAM NAME</TableCell>
            <TableCell sx={{ width:'10%' }} >TEAM ID</TableCell>
            <TableCell sx={{ left:0,width:'70%',textAlign:'right' }} >ACTION</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
