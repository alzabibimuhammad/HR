import React, { useState, useEffect } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import useContractColumns from '../../Hooks/useContractColumns';
import DrawerForm from '../DrawerForm';
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import PageHeader from 'src/@core/components/page-header';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ContractsData } from '../../infrastructure'

const List = ({ rows }) => {
  console.log("🚀 ~ List ~ data:", rows.data?.data?.data)
  const columns = useContractColumns();
  const [openParent, setOpenParent] = React.useState(false);
  const { t } = useTranslation()


  const handleDrawerOpen = () => {
    setOpenParent(true);
  };


  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary,
  }));

  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
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




  return (
    <>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={`${t("Filters")}`} />
            <CardContent>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ sm: 10, xs: 5 }}
                width={{ xs: '250%', sm: '97%' }}
                marginLeft={{ xs:'30px' }}
                marginBottom={"10px"}
                alignItems={{sm:"center",xs:"inherit"}}

              >
                <Item>
                  <TextField
                    select
                    fullWidth
                    defaultValue="Select Role"
                    SelectProps={{
                      value: role,
                      displayEmpty: true,
                      onChange: handleRoleChange,
                    }}
                  >
                    <MenuItem value=''>{`${t("Select Role")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                  </TextField>
                </Item>
                <Item>
                  <TextField
                    select
                    fullWidth
                    defaultValue='Select Status'
                    SelectProps={{
                      value: status,
                      displayEmpty: true,
                      onChange: handleStatusChange,
                    }}
                  >
                    <MenuItem value=''>{`${t("Select Status")}`}</MenuItem>
                    <MenuItem value='active'>{`${t("active")}`}</MenuItem>
                    <MenuItem value='not-active'>{`${t("not active")}`}</MenuItem>
                  </TextField>
                </Item>

                <Box>
                  <Typography
                    color='inherit'
                    aria-label='open drawer'
                    edge='end'
                    onClick={handleDrawerOpen}
                    sx={{ ...(open ? { width: '100%' } : {}) }}
                  >
                    <Item>
                      <Button
                        size='large'
                        disableElevation
                        fullWidth
                        className='cssbuttons-io-button'

                        sx={{
                          width: { xs: '100%', sm: '400px' },
                          border:' 1px solid #A20D29',



                        }}
                      >
                        {`${t("Add Contracts~")}`}
                        <div class="icon">
                            <svg
                              height="24"
                              width="24"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M0 0h24v24H0z" fill="none"></path>
                              <path
                                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                      </Button>
                    </Item>

                  </Typography>
                  <DrawerForm open={openParent} setOpenParent={setOpenParent} />
                </Box>

              </Stack>

              <Divider sx={{ m: '0 !important' }} />
              <CustomDataGrid columns={columns}  sx={gridStyles.root} rows={ContractsData(rows)|| []}  />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default List;
