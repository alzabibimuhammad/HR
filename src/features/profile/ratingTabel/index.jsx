import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { RatingData } from '../ratingTabel/infrastructure';
import { Box } from '@mui/system';

import useUserColumns from './hooks/useRatingUser';
import useGetRatingById from './hooks/useGetRatingById';

const RatingTabel = ({rows}) => {
console.log("🚀 ~ RatingTabel ~ rows:", rows)

  const columns = useUserColumns();
  const { t } = useTranslation()







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






  return    <>




            <Card>
              <CardContent>
              <Stack
                direction={{ xs: 'column', sm: 'column' }}
                spacing={3}
                alignContent={'center'}
                justifyContent={'center'}
                my={"30px"}
              >

            <TextField
              placeholder={t("Search")}
              fullWidth

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
              sx={{ paddingLeft: '8px',backgroundColor:'#F5F7FA',border:"none",boxShadow:"none" }}
              size='small'


            />
          <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
              >
              <Typography sx={{ fontSize:'16px',marginTop:'5px' }} >{t("Filters")}</Typography>
                  <TextField
                    select
                    fullWidth
                    defaultValue="Role"
                    SelectProps={{
                      displayEmpty: true,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Role")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                  </TextField>

                  <TextField
                    select
                    fullWidth
                    defaultValue='Specialization'
                    SelectProps={{
                      displayEmpty: true,
                    }}
                    size='small'

                  >
                    <MenuItem value=''>{`${t("Specialization")}`}</MenuItem>
                    <MenuItem value='Front_End'>{`${t("Front End")}`}</MenuItem>
                    <MenuItem value='Back_End'>{`${t("Back End")}`}</MenuItem>
                  </TextField>
                  <TextField
                    select
                    fullWidth
                    defaultValue='Team'
                    SelectProps={{
                      // value: department,
                      displayEmpty: true,

                    }}
                    size='small'

                  >
                    <MenuItem value=''>{`${t("Team")}`}</MenuItem>
                    <MenuItem value='active'>{`${t("active")}`}</MenuItem>
                    <MenuItem value='not-active'>{`${t("not active")}`}</MenuItem>
                  </TextField>
                  </Stack>

                  {<CustomDataGrid columns={[]} sx={gridStyles.root} data={ RatingData(rows)} />}

              </Stack>
              </CardContent>
              </Card>
          </>

};

export default RatingTabel;
