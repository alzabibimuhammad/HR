import React, { useEffect, useState } from 'react'
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  MenuItem,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Avatar,
  Button,
  Modal
} from '@mui/material'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { RatingData } from '../ratingTabel/infrastructure'
import { Box } from '@mui/system'

import useUserColumns from './hooks/useRatingUser';
import {useGetRatingById} from './hooks/useGetRatingById';
import { CustomDatePickerSalary } from 'src/@core/components/customPickerSalary';
import { useGetDataByMonth } from 'src/features/salary/users/hooks/useGetDataByMonth';
import { CustomDatePicker } from 'src/@core/components/customPickerDate';
import { CustomDatePickerRating } from 'src/@core/components/customPickerRating';
import useGetRattingtype from './hooks/useGetRatingType';
import { useSelector } from 'react-redux';
import useGetAllContracts from 'src/features/Contracts/list/Hooks/useGetAllContracts';
import useAbsenceColumns from './hooks/useRatingUser';

const RatingTabel = ({rows}) => {

  const{data,isloading}=useGetRattingtype()
  const columns = useAbsenceColumns();
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {setOpen(true)}
  const handleClose = () => {setOpen(false)}
  const { data: rateData, isloading: isloadingData } = useGetRatingById()
  const [show ,setShow]=useState(10)
  const [ChoosedDate, setChooseDate] = useState()



  const store = useSelector(state => state.user)

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24
  }

  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000'
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0'
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000'
        }
      }
    }
  }

  const arr1 = data?.data?.data

  const arr2 = store?.RatingUser?.data?.data?.user_rates

  let output

  if (!arr1 || !arr2) {
    console.error('Arrays cannot be empty')
  } else {

    const map = arr1.reduce((acc, obj) => {
      acc[obj.id] = obj.rate_type

      return acc
    }, {})

    // Create output array
    output = arr2.map(obj => {
      const newObj = {
        date: obj.date,
        id: obj.id,
        f_name: obj.evaluators.first_name,
        l_name: obj.evaluators.last_name,
        ...arr1.reduce((acc, { id }) => {
          acc[`rate${id}`] = obj.rate_type_id === id ? obj.rate : 0

          return acc
        }, {})
      }

      return newObj
    })
  }

  console.log(output);

  return (
    <>
      <Card>
        <CardContent>
          <Stack
            direction={{ xs: 'column', sm: 'column' }}
            alignContent={'center'}
            justifyContent={'center'}
            spacing={2}
          >

              <Stack direction={'row'} justifyContent={'space-between'} spacing={2} >
            <Typography sx={{ fontSize: '16px', marginTop: '5px' }}>{t('Filters')}</Typography>
            <Button sx={{ border: '1px solid', width: '20%',backgroundColor:'#6AB2DF',color:'#fff', '&:hover': {backgroundColor:'#6AB2DF',color:'#fff' } }}  onClick={handleOpen}>
              <Stack direction={'row'} spacing={2} >

              <Typography color={'#fff'} >
              {t('Select Date')}
    </Typography>
              </Stack>
            </Button>
            </Stack>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby='modal-modal-title'
              aria-describedby='modal-modal-description'
            >
              <Box sx={style}>
                <CustomDatePickerRating handleClose={handleClose} />
              </Box>
            </Modal>

         <CustomDataGrid  columns={columns} show={show} sx={gridStyles.root} rows={RatingData(output)} />
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}


export default RatingTabel
