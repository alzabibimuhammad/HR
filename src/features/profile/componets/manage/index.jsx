import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';

import React, { forwardRef, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field';
import styled from 'styled-components';
import DatePicker from 'react-datepicker'
import { ST } from 'next/dist/shared/lib/utils';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

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
  <Card>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>
   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Warnings</TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 2 Warnings</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography>2 hours late</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography>2 hours late</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>

  </Stack>

      </CardContent>


   </Card>
   {/* End section Warnings */}

   {/* ******************************* */}
   {/* section  Alerts */}
  <Card sx={{marginTop:"20px"}}>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>

   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Alerts</TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 2 Alert</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography>For not cleaning</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography>For not cleaning</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>

  </Stack>

      </CardContent>


   </Card>
      {/* End section Alerts */}

   {/* ******************************* */}
   {/* section  Alerts */}
   <Card sx={{marginTop:"20px"}}>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>

   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Penalties</TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 2 Penalties</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography> 50.000 s.p deduction</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography> 50.000 s.p deduction</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>

  </Stack>

      </CardContent>


   </Card>
      {/* End section Alerts */}

   {/* ******************************* */}

  </Grid>
  <Grid item xs={6}>
  <Card>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>

   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Deductions</TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 2 Deduction</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography> 50.000 s.p deduction</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>


  </Stack>

      </CardContent>


   </Card>
  <Card sx={{marginTop:"20px"}}>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>

   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}> Absence </TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 2 Absence</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography sx={{fontWeight:"400",fontSize:"14px",color:"#131627"}}> 2 hours</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography sx={{fontWeight:"400",fontSize:"14px",color:"#131627"}}> 3 hours</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography sx={{fontWeight:"400",fontSize:"14px",color:"#131627"}}> 4 hours</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>



  </Stack>

      </CardContent>


   </Card>
   <Card sx={{marginTop:"20px"}}>
      <CardContent >
        <Stack spacing={8} >

  <StackRow >
    <Box>

   <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Rewards</TypoHeader>
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
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <TypoHeader>Total 1 Reward</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  <StackRow >
    <Box>

   <Typography> 50.000 s.p</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> 3/ 6 / 2020</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>


  </Stack>

      </CardContent>


   </Card>
  </Grid>
</Grid>

  )
}
