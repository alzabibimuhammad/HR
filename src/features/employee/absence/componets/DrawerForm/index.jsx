import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, MenuItem, TextField, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { getContractsData,addContract, EditContract } from 'src/pages/contracts/store'
import { useDispatch  } from 'react-redux'
import { Schema } from '../../validation'
import { Stack } from '@mui/system'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import useViewGetAbsence from '../../hooks/useGetAbsenceById'

const drawerWidth = 440



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))


export default function DrawerForm({ open, setOpenParent,Data }) {
  const id =Data?.id
  const theme = useTheme()
  const {t} = useTranslation()
const dispatch=useDispatch()
const { data, isLoading, isError } = useViewGetAbsence(id)
const [selectedType, setSelectedType] = useState('');
const [selectedDate, setSelectedDate] = useState('');
const [fdata, setfdata] = useState('');

  const handleDrawerClose = () => {
    dispatch(getContractsData())
    setOpenParent(false)
    open = false
    reset();
  }

  const defaultValues = {
    type:''
  }

  const handleDate = e => {
    const date = e.target.value

    let searchData
    if (!date) {
      setfdata(data?.data?.data?.unjustified)
    } else {
      searchData = data?.data?.data?.unjustified?.filter(element => {
        return element?.startDate == date
      })
      setfdata(searchData)
    }
  }

  const handleDateN = e => {
    const date = e.target.value

    let searchData
    if (!date) {
      setfndata(data?.data?.data?.justified)
    } else {
      searchData = data?.data?.data?.justified?.filter(element => {
        return element?.startDate == date
      })
      setfndata(searchData)
    }
  }

  useEffect(() => {
    reset(defaultValues);

  }, [Data]);

  const {
    control,
    handleSubmit,
    formState: { errors ,isDirty },
    reset
  } = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
    mode: 'onBlur'
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'absences',
  });


  const onSubmit =   data => {
      if(!Data)
      {
        dispatch(addContract(data));

               }
      else
      {
        const EditData = {
          data,
          Data
        };
        dispatch(EditContract(EditData));
      }
      handleDrawerClose()
      reset();

  }

  const handleDeleteAbsence=user_id=>{
  }


  return (

      <>
      <Drawer

      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth
        },
        overflow: 'visible',
        borderRadius: '15px',
      }}
      anchor='right'
      open={open}
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}

    >


      <Box sx={{ width: '100%', backgroundColor: '#DCE1E6', fontSize: '20px', gap: '10px', padding: '15px', borderRadius: '10px', fontFamily: 'Montserrat' }}>Edit Absence</Box>
      <Stack marginLeft={{ sm: '3%' }} marginTop={{ sm: '2%' }} direction={{ sm: 'column' }} spacing={3}>
        <Typography>UnJustified</Typography>
        <Box width={{ sm: '94%' }}>
          <TextField
            onChange={handleDateN}
            fullWidth
            type='date'
            size='small' />
        </Box>
      </Stack>


    <Stack marginLeft={{ sm: '3%' }} marginTop={{ sm: '2%' }} direction={{ sm: 'column' }} spacing={3}>
        <Typography>Justified</Typography>
        <Box width={{ sm: '94%' }}>

          <TextField
            fullWidth
            onChange={handleDate}
            type='date'
            size='small' />
        </Box>
      </Stack>

      <Stack direction={'column'} marginTop={'2%'} style={{ overflowY: 'scroll', maxHeight: '300px', padding: '15px' }}>

        {fdata && fdata?.map((date, index) => (
          <>
          <Typography>

            {date?.startDate}
          </Typography>
          <CloseIcon sx={{ color: '#df2e38' }} onClick={() => handleDeleteAbsence(date)} />
          </>
          ))}
      </Stack>




        <Box width={"90%"} marginLeft={'3%'}>
        {fields.map((absence, index) => ( <>

          <Box onClick={() => remove(index)}>

              <CloseIcon sx={{cursor:"pointer",'&:hover': { color: 'red' }}} onClick={() => remove(index)} />
            </Box>
          <Box key={absence.id}>
            <Controller
              name={`absences[${index}].type`}
              control={control}
              render={({ field }) => (
                <TextField
                select
                  {...field}
                  defaultValue=''
                  variant='outlined'
                  fullWidth
                  size='small'
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                  }}
                  >
                  <MenuItem value=''>Type</MenuItem>
                  <MenuItem value='justified'>Justified</MenuItem>
                  <MenuItem value='unjustified'>Unjustified</MenuItem>
                </TextField>
              )}
              />

            <Controller
              name={`absences[${index}].date`}
              control={control}
              render={({ field }) => (
                <TextField
                type='date'
                {...field}
                sx={{marginTop:"8px"}}
                variant='outlined'
                fullWidth
                size='small'
                onChange={(e) => {
                  setSelectedDate(e.target.value);
                }}
                />
                )}
                />

          </Box>
        </>

        ))}
          </Box>
        <Stack marginLeft={{ sm:'3%'  }} sx={{marginTop:"15px"}}>
          <Box  onClick={() => append({ type: '', date: '' })}sx={{ color: '#6AB2DF' ,cursor:"pointer"}} display={'flex'}> <AddIcon sx={{ color:'#6AB2DF' }} />  <Typography sx={{ color:'#6AB2DF' }}>Add Absence</Typography> </Box>
        </Stack>


      <Box sx={{ display:'flex', width:'100%',padding:'10px'}} >
          <Stack sx={{ marginLeft:'50%' }} direction={'row'} spacing={2} >

            <Button onClick={handleDrawerClose} sx={{ backgroundColor:'#DCE1E6',color:'#8090A7',borderRadius:'4px', padding: '8px 24px' }}>Cancle</Button>

            <Button /*onClick={handlerSendData}*/ sx={{ backgroundColor:'#6AB2DF',color:'#fff' ,borderRadius:'4px', padding: '8px 24px' ,   '&:hover': {
              backgroundColor: '#3F4458', },}} >Edit</Button>
          </Stack>

      </Box>

      </Drawer>
      </>
  )
}
