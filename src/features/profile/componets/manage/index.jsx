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
import Advances from './absence';
import TotalAbsenceHours from './TotalAbsenceHours';

export default function Mange({id}) {


  const Warnings = dynamic(
    () => import('./warnings'),
    { ssr: false }
  )


  return (
    <Grid container spacing={8}>
    <Grid item xs={12} sx={{marginTop:"24px"}} md={6}>
      {/* Warnings section */}
      {/* End Warnings section */}
      <Box sx={{ marginTop: '24px' }}>
        <Rewards id={id} />
      </Box>
      {/* Alerts section */}
      <Box sx={{ marginTop: '24px' }}>
        <Advances id={id} />
      </Box>
      <Box sx={{ marginTop: '24px' }}>

      <Deductions id={id} />
      </Box>

      <Box sx={{ marginTop: '24px' }}>

<TotalAbsenceHours id={id} />
</Box>

    </Grid>

    <Grid item xs={12} sx={{marginTop:"24px"}} md={6}>
      {/* Deductions section */}
      <Box sx={{ marginTop: '24px' }}>

      <Warnings id={id} />
      </Box>

      {/* End Deductions section */}
      <Box sx={{ marginTop: '24px' }}>
        <Alerts id={id} />
      </Box>
      {/* Absence section */}

      {/* End Absence section */}
      <Box sx={{ marginTop: '24px' }}>
        <Penalties id={id} />
      </Box>
      {/* Rewards section */}

      {/* End Rewards section */}
    </Grid>
  </Grid>

  )
}

