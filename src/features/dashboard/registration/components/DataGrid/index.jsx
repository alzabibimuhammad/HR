import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import PageHeader from 'src/@core/components/page-header';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import {  RegistrationData, RegistrationsData } from '../../infrastructure'
import useRegistrationColumn from '../../Hook/useRegistrationColumn';
import { Box, Stack } from '@mui/system'

const Registration = Data => {
  const columns = useRegistrationColumn();

  const {data} = Data?.Data

  const { t } = useTranslation()



  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width: '30%',
    color: theme.palette.text.secondary,
  }));







  return (
          <Stack height={'100%'} >
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
                <CustomDataGrid   columns={columns}   rows={RegistrationData(data)||[]}/>
              </CardContent>
            </Card>
          </Stack>
  );
};

export default Registration;
