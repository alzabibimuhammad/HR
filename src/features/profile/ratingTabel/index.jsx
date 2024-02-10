import React, { useEffect, useState } from 'react';
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography, Accordion, AccordionSummary, AccordionDetails, IconButton, Avatar, Button, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { RatingData } from '../ratingTabel/infrastructure';
import { Box } from '@mui/system';

import useUserColumns from './hooks/useRatingUser';
import {useGetRatingById} from './hooks/useGetRatingById';
import { CustomDatePickerSalary } from 'src/@core/components/customPickerSalary';
import { useGetDataByMonth } from 'src/features/salary/users/hooks/useGetDataByMonth';
import { CustomDatePicker } from 'src/@core/components/customPickerDate';
import { CustomDatePickerRating } from 'src/@core/components/customPickerRating';
import useGetRattingtype from './hooks/useGetRatingType';
import { useSelector } from 'react-redux';
import useGetAllContracts from 'src/features/Contracts/list/Hooks/useGetAllContracts';

const RatingTabel = ({rows}) => {
  const{data,isloading}=useGetRattingtype()
  const columns = useUserColumns();
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {data:rateData, isloading:isloadingData}= useGetRatingById()

const[ChoosedDate,setChooseDate]=useState()
const[RatingDate,setRatingData]=useState()

const store = useSelector(state => state.user)



  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
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

  const arr1 =data?.data?.data

const arr2 = store?.RatingUser?.data?.data?.user_rates

let output;


if (!arr1 || !arr2) {
  console.error("Arrays cannot be empty");

} else {
  // Map rate_type_id to id
  const map = arr1.reduce((acc, obj) => {
      acc[obj.id] = obj.rate_type;

      return acc;

  }, {});

  // Create output array
   output = arr2.map(obj => {
      const newObj = {
          date: obj.date,
          id: obj.id,
          f_name:obj.evaluators.first_name,
          l_name:obj.evaluators.last_name,
          ...arr1.reduce((acc, { id }) => {
              acc[`rate${id}`] = obj.rate_type_id === id ? obj.rate : 0;

              return acc;
          }, {})
      };

      return newObj;
  });


}




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



                  <Button sx={{border:"1px solid"}} fullWidth onClick={handleOpen}>Select Date</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <CustomDatePickerRating selectedDate={1} handleDateChoose={setChooseDate} />
        </Box>
      </Modal>
                  </Stack>

                  {output && <CustomDataGrid columns={columns} sx={gridStyles.root} rows={ RatingData(output)} />}

              </Stack>
              </CardContent>
              </Card>
          </>

};

export default RatingTabel;
