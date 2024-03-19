import React, { useState } from 'react';
import { Card, CardContent, MenuItem, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAttendancePercentage } from 'src/pages/dashboard/store';
import useResignedColumns from '../../hooks/useResignedColumns';
import { ResignedData } from '../../infrastructure';
import Show10 from 'src/@core/components/show10';

const ResignedTable = ({ rows }) => {

  const [show, setShow] = React.useState(10);

  const columns = useResignedColumns();
  const [openParent, setOpenParent] = React.useState(false);
  const { t } = useTranslation()

  let roleData = new Set([]);
  rows?.forEach(element => {
    roleData.add(element?.department)
  });

  let specialization = new Set([]);
  rows?.forEach(element => {
    specialization.add(element?.specialization)
  });

  const handleDrawerOpen = () => {
    setOpenParent(true);
  };
const active =[
  'active',
  'former'
]

  const [fdata, setfdata] = useState({ rows });
  useEffect(() => { setfdata(rows) }, [rows])

  const [role, setRole] = useState('');
  const [status,setStatus]=useState()

  const [department, setDepartment] = useState('');


  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handledepartmentChange = (e) => {
    setDepartment(e.target.value);
  };

  useEffect(() => {
    let filteredData;
    if (role && department) {
      filteredData = rows?.filter((row) => {
        return row?.specialization === department && row.role === role;
      });
      setfdata(filteredData);

    }
    else if (role && department == '') {
      filteredData = rows?.filter((row) => {
        return row.role === role;
      });
      setfdata(filteredData);

    }
    else if (department && role == '') {
      filteredData = rows?.filter((row) => {
        return row?.specialization === department;
      });
      setfdata(filteredData);

    }
    else
      setfdata(rows);

  }, [role, department])


  const handelSearch = (event) => {
    const searchText = event.target.value;
    let searchData;
    if (!searchText) {
      setfdata(rows);
    }
    else {
      searchData = rows?.filter((element) => {
        if (element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase());
        }
        else if (element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase());
        }
        else if (element?.role?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.role?.toLowerCase()?.includes(searchText.toLowerCase());
        }
        else if (element?.specialization?.toLowerCase()?.includes(searchText.toLowerCase())) {
          return element?.specialization?.toLowerCase()?.includes(searchText.toLowerCase());
        }
      });


      setfdata(searchData);
    }
  };


  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000',
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0',
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000',
        },

      },

    },
  };

  const [percentageData, setpercentageData] = useState([])

  const dispatch = useDispatch()
  const store = useSelector(state => state.Dashboard)

  useEffect(() => {
    dispatch(getAttendancePercentage())
    setpercentageData(store?.AttendancePercentage)

  }, [dispatch, store?.AttendancePercentage?.length])




  return (

    <>
      <p className='Pagetitle' >
        {t("Resigned")}
      </p>

      <Card sx={{ marginTop: '24px' }} >
        <CardContent>

          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            spacing={3}
            alignContent={'center'}
            justifyContent={'center'}
          >
            <Stack direction={'row'} width={{ sm: '50%', xs: '100%' }} spacing={3} alignItems={'center'}>
              <Box mb={2} width={{ sm: '120px', xs: '100px' }} >
                <Show10 setShow={setShow} />
              </Box>
              <TextField
                placeholder={t("Search")}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <Box paddingRight={1} >
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="zoom-split">
                          <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z" fill="#8090A7" />
                        </g>
                      </svg>
                    </Box>
                  ),
                }}
                onChange={handelSearch}
                sx={{ backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none', width: { sm: '320px', xs: '100%' } }}
                size='small'


              />
            </Stack>
            <Stack
              direction={{ xs: 'column', sm: 'column' }}
              spacing={2}
            >

              <Stack direction={{ sm: 'row', xs: 'column' }} alignItems={'center'} spacing={2} >
                <Typography className='filterTitle' >{t("Filters")}</Typography>
                <TextField
                  select
                  sx={{ width: { sm: '320px', md: '320px', xs: '100%' } }}
                  defaultValue="Role"
                  SelectProps={{
                    value: role,
                    displayEmpty: true,
                    onChange: handleRoleChange,
                  }}
                  size='small'
                >

                  <MenuItem value=''>{`${t("Team")}`}</MenuItem>

                  {Array.from(roleData).map(element => (
                    <MenuItem key={element} value={element}>{t(element)}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  sx={{ width: { sm: '320px', md: '320px', xs: '100%' } }}
                  defaultValue="Status"
                  SelectProps={{
                    value: status,
                    displayEmpty: true,
                    onChange: handleStatusChange,
                  }}
                  size='small'
                >

                  <MenuItem value=''>{`${t("Status")}`}</MenuItem>

                  {active.map(element => (
                    <MenuItem key={element} value={element}>{t(element)}</MenuItem>
                  ))}
                </TextField>
              </Stack>
            </Stack>

            {rows ? <CustomDataGrid columns={columns} show={show} sx={gridStyles.root} rows={ResignedData(fdata) || []} /> : null}

          </Stack>
        </CardContent>
      </Card>
    </>
  )

};

export default ResignedTable;
