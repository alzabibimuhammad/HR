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
  import Alerts from './alerts';
import Penalties from './penalties';
import Deductions from './deductions';
import Rewards from './rewards';
import Absence from './absence';
import dynamic from 'next/dynamic'

export default function Mange({id}) {


  const Warnings = dynamic(
    () => import('./warnings'),
    { ssr: false }
  )

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




<Warnings id={id} />

   {/* End section Warnings */}

   {/* ******************************* */}
   {/* section  Alerts */}


<Box sx={{marginTop:"15px"}}>

   <Alerts  id={id}/>
</Box>

      {/* End section Alerts */}

   {/* ******************************* */}


   {/* section  Alerts */}
   <Box sx={{marginTop:"15px"}}>

    <Penalties id={id}/>

   </Box>

      {/* End section Alerts */}

   {/* ******************************* */}

  </Grid>
  <Grid item xs={6}>

 <Deductions  id={id}/>


 <Box sx={{marginTop:"15px"}}>


 <Absence  id={id} />
 </Box>

<Box sx={{marginTop:"15px"}}>


 <Rewards  id={id} />
</Box>

  </Grid>
</Grid>

  )
}

