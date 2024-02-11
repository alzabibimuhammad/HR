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


export default function CollapsibleTable({ Data }) {
  const { t } = useTranslation();
  const [openParent, setOpenParent] = React.useState(false);
  const [originalData, setOriginalData] = useState([]);
  const [teams, setTeams] = useState({ rows: [] });
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false); // Add this line

  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOriginalData(Data);
    setTeams({ rows: Data });
  }, [Data]);

  function Row({ row }) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={handleToggle}>
          <TableCell component="th">
            <Stack direction={'column'} justifyContent={'start'} alignItems={'start'} sx={{ padding: '0', margin: '0' }}>
              <Box>
                <Typography sx={{ fontSize:'14px' }} >
                  {row.first_name}
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
              {row.department_id}
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
                      <TableRow >
                        <TableCell>
                          <Stack direction={'row'} spacing={2}>
                            <Typography>{row.id}</Typography>
                          </Stack>
                        </TableCell>
                            <Typography>{row.last_name}</Typography>
                        <TableCell align="right">{row.email}</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    );
  }

  return (
    <Card>
      <CardContent>
      <Typography variant='h4' paddingBottom={'10px'}>
        {t("Reports List")}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
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
           {teams?.rows?.map((row) => (
  <React.Fragment key={row.id}>
    <Row row={row} />
  </React.Fragment>
))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}
