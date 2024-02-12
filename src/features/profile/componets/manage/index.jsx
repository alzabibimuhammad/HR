import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';

import React, { forwardRef, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { useForm,Controller } from 'react-hook-form';
import { useAddDecision } from './hook/useAddDecision';
import { useDeleteDecision } from './hook/useDeleteDecision';
import Warnings from './warnings';
import Alerts from './alerts';
import Penalties from './penalties';
import Deductions from './deductions';
import Rewards from './rewards';
import Absence from './absence';

export default function Mange({DataDecision,id}) {

  const {data} = DataDecision?.data

  const [startDate,setStartDate]=useState()

  const theme = useTheme();





  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))







  const TypoVal = styled(Typography)(() => ({
    fontSize:'14px',
    marginLeft:'3px'

  }))

  const TypoHeader = styled(Typography)(() => ({
    fontSize:'16px',
    marginLeft:'5px',
    fontWeight:'600',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const StackRow = styled(Stack)(({ direction }) => ({
    flexDirection: direction === 'column' ? 'column' : 'row',
    justifyContent:"space-between",
    width:"100% ",
    alignItems:"center"
  }));








  return (

    <Grid  container spacing={2}>
  <Grid   item xs={6}>
  {/* section  Warnings*/}




<Warnings DataDecision={DataDecision} id={id}/>

   {/* End section Warnings */}

   {/* ******************************* */}
   {/* section  Alerts */}



   <Alerts DataDecision={DataDecision} id={id}/>

      {/* End section Alerts */}

   {/* ******************************* */}


   {/* section  Alerts */}

   <Penalties DataDecision={DataDecision} id={id}/>
      {/* End section Alerts */}

   {/* ******************************* */}

  </Grid>
  <Grid item xs={6}>

<Deductions DataDecision={DataDecision} id={id}/>




<Absence DataDecision={DataDecision} id={id} />



<Rewards DataDecision={DataDecision} id={id} />

  </Grid>
</Grid>

  )
}

