import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PageHeader from 'src/@core/components/page-header';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import {  RegistrationsData } from '../../infrastructure'
import useRegistrationColumn from '../../Hook/useRegistrationColumn';
import { Box, Stack } from '@mui/system'

const Registration = ({  }) => {
  const columns = useRegistrationColumn();




  const { t } = useTranslation()



  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary,
  }));



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
            <CardContent>

              <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} m={"14px 0"}>
                <Box>
                  <Typography sx={{color:"#8090A7"}} variant="h3" color="initial"> Registration</Typography>

                </Box>
                <Box>
                          search
                </Box>
              </Stack>





              <CustomDataGrid  columns={columns}  sx={gridStyles.root} rows={""}/>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Registration;
