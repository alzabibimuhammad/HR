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


  return (
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
      {/* Warnings section */}
      <Warnings id={id} />
      {/* End Warnings section */}

      {/* Alerts section */}
      <Box sx={{ marginTop: '15px' }}>
        <Alerts id={id} />
      </Box>
      {/* End Alerts section */}

      {/* Penalties section */}
      <Box sx={{ marginTop: '15px' }}>
        <Penalties id={id} />
      </Box>
      {/* End Penalties section */}
    </Grid>

    <Grid item xs={12} md={6}>
      {/* Deductions section */}
      <Deductions id={id} />
      {/* End Deductions section */}

      {/* Absence section */}
      <Box sx={{ marginTop: '15px' }}>
        <Absence id={id} />
      </Box>
      {/* End Absence section */}

      {/* Rewards section */}
      <Box sx={{ marginTop: '15px' }}>
        <Rewards id={id} />
      </Box>
      {/* End Rewards section */}
    </Grid>
  </Grid>

  )
}

