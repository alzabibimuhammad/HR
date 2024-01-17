import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider } from '@mui/material';
import TextField from '@mui/material/TextField';
import useContractColumns from '../../Hooks/useContractColumns';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ContractsData } from '../../infrastructure'

const List = ({ rows }) => {
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
                width={{ xs: '250%', sm: '100%' }}
                marginBottom={"10px"}
                alignItems={{sm:'center',xs:"inherit"}}
                justifyContent={{sm:'center'}}
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
