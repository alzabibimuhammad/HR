import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';

import React, { forwardRef, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'

export default function Mange() {
  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const [startDate,setStartDate]=useState()

  const PickersComponent = forwardRef(({ ...props }, ref) => {
    return (
      <CustomTextField
        inputRef={ref}
        fullWidth
        {...props}
        label={props.label || ''}
        sx={{ width: '100%' }}
        error={props.error}
      />
    )
  })

  const TypoVal = styled(Typography)(() => ({
    fontSize:'14px',
    marginLeft:'3px'

  }))

  const TypoHeader = styled(Typography)(() => ({
    fontSize:'16px',
    marginLeft:'5px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const StackRow = styled(Stack)(({ direction }) => ({
    flexDirection: direction === 'column' ? 'column' : 'row',
  }));


  return (
  
    <Grid container spacing={2}>
  <Grid item xs={6}>
  <Card>
      <CardContent>
      <Stack direction="row"  justifyContent="space-between">
  <Box>
   <Typography>Warnings</Typography>
   <Typography sx={{mt:30}}>Total 2 Warnings</Typography>
  </Box>
  <Box>
  <DatePicker
       showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      icon="fa fa-calendar"
      isClearable
      placeholderText="Choose Calendar"
    />
    <Box sx={{mt:2}}>
    <Button>Add </Button>
    <Button>Select</Button>
    </Box>
    
  </Box>
</Stack>
      </CardContent>
 

   </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardContent>
      Daniel
      </CardContent>
 

   </Card>

  </Grid>
</Grid>
    
  )
}
