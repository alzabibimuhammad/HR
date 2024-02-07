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

export default function Mange({DataDecision}) {
  const {data} = DataDecision?.data
  const {mutate:AddDecision}=useAddDecision()
  const { mutate: DeleteDecision, isLoading } = useDeleteDecision();
  const [startDate,setStartDate]=useState()
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


  const handleDeleteAPI = (id) => {
    DeleteDecision(id)
  };



  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
  };

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };





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



 ;

 const defaultValues = {
  dateTime: '',
  content: '',
  user_id:1,
  type:"reward"

};



 const onSubmit = async (data) => {

  try {
   const formData = new FormData();
   formData.append('dateTime', data.dateTime);
   formData.append('content', data.content);
   formData.append('user_id', data.user_id);
   formData.append('type', data.type);
   AddDecision(formData)
   reset()
   handleClose()
  } catch (error) {
  }
};

 const {
  control,
  setError,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  defaultValues,
  mode: 'onBlur',
});



  return (

    <Grid  container spacing={2}>
  <Grid   item xs={6}>
  {/* section  Warnings*/}


    <Card >
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

   <TypoHeader>Total {data?.warnings?.length} Warnings</TypoHeader>
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button onClick={handleClickOpenAdd} sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>

      <Dialog
        fullScreen={fullScreen}
        open={openAdd}
        onClose={handleCloseAdd}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{fontWeight:"600",fontSize:"20px",color:"#8090a7"}} id="responsive-dialog-title">
        Add Warning
        </DialogTitle>
        <DialogContent sx={{width:"100vh"}}>
          <DialogContentText sx={{width:"80%",display:"flex",flexDirection:"column",gap:"16px"}}>
          <Controller
                  name='dateTime'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      variant='outlined'
                      InputLabelProps={{ shrink: true }}
                      type='date'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
          <Controller
                  name='content'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      variant='outlined'
                      InputLabelProps={{ shrink: true }}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      label="description"
                      multiline
                      rows={7}
                      placeholder='Description ...'

                    />
                  )}
                />


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{padding:"8px 24px 8px 24px",borderRadius:"4px",backgroundColor:"#dce1e6",color:"#8090a7",fontSize:"14px",fontWeight:"500","&:hover": {backgroundColor: "#dce1e6"}}} autoFocus onClick={handleCloseAdd}>
          Cancel
          </Button>
          <Button sx={{backgroundColor:"#6ab2df",padding:"8px 34px 8px 34px",borderRadius:"4px",fontWeight:"500",color:"#fff",fontSize:"14px","&:hover": {backgroundColor: "#6ab2df"}}} onClick={handleSubmit(onSubmit)} autoFocus>
          Add
          </Button>
        </DialogActions>
      </Dialog>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  {data?.warnings?.map((val,index)=>{
    return (
  <StackRow key={val.id}>
    <Box>

   <Typography>{val.content} hours late</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal>{val.dateTime}</TypoVal>

 <TypoVal  onClick={()=>handleDeleteAPI(val.id)} sx={{cursor:"pointer"}}><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 <Dialog
        fullScreen={fullScreen}
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle sx={{fontWeight:"600",fontSize:"20px",color:"#8090a7"}} id="responsive-dialog-title">
        Edit Warning
        </DialogTitle>
        <DialogContent sx={{width:"100vh"}}>
          <DialogContentText sx={{width:"80%",display:"flex",flexDirection:"column",gap:"16px"}}>
          <Controller
                  name='dateTime'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      variant='outlined'
                      InputLabelProps={{ shrink: true }}
                      type='date'
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                    />
                  )}
                />
          <Controller
                  name='content'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <CustomTextField
                      fullWidth
                      autoFocus
                      variant='outlined'
                      InputLabelProps={{ shrink: true }}
                      value={value}
                      onBlur={onBlur}
                      onChange={onChange}
                      label="description"
                      multiline
                      rows={7}
                      placeholder='Description ...'

                    />
                  )}
                />


          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{padding:"8px 24px 8px 24px",borderRadius:"4px",backgroundColor:"#dce1e6",color:"#8090a7",fontSize:"14px",fontWeight:"500","&:hover": {backgroundColor: "#dce1e6"}}} autoFocus onClick={handleCloseAdd}>
          Cancel
          </Button>
          <Button sx={{backgroundColor:"#6ab2df",padding:"8px 34px 8px 34px",borderRadius:"4px",fontWeight:"500",color:"#fff",fontSize:"14px","&:hover": {backgroundColor: "#6ab2df"}}} onClick={handleSubmit(onSubmit)} autoFocus>
          Edit
          </Button>
        </DialogActions>
      </Dialog>
 </StackRow>


       </Box>
  </StackRow>
 )

})}

  </Stack>

      </CardContent>


   </Card>


   {/* End section Warnings */}

   {/* ******************************* */}
   {/* section  Alerts */}

  <Card  sx={{marginTop:"20px"}}>
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

{data?.alerts?.length > 0 && (
  <TypoHeader>Total {data?.alerts?.length} Alert</TypoHeader>
  )}    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  {data?.alerts?.map((val,index)=>{
   return (

  <StackRow key={val.id}>
    <Box>

   <Typography>{val.content}</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> {val.dateTime}</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>

       )
       })}

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

   {data?.penalty?.length > -1 && (
  <TypoHeader>Total {data?.penalty?.length} Penalties</TypoHeader>
)}
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  {data?.penalty?.map((val,index)=>{
   return (

  <StackRow key={val.id}>
    <Box>

   <Typography> {val.content} s.p deduction</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> {val.dateTime}</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
      )
  })}


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

   {data?.deductions?.length > -1 && (
  <TypoHeader>Total {data?.deductions?.length} Deduction</TypoHeader>
)}
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  {data?.deductions?.map((val,index)=>{
   return (

  <StackRow key={val.id}>
    <Box>

   <Typography> {val.content} s.p deduction</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> {val.dateTime}</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>

     )
  })}



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

   {data?.rewards?.length > -1 && (
  <TypoHeader>Total {data?.rewards?.length} Reward</TypoHeader>
)}
    </Box>
    <Box sx={{display:"flex",gap:"10px"}}>

 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ Add</Button>
 <Button sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>Select</Button>
       </Box>
  </StackRow>
  {data?.rewards?.map((val,index)=>{
   return (

  <StackRow key={val.id}>
    <Box>

   <Typography> {val.content} s.p</Typography>
    </Box>
    <Box>

 <StackRow >
 <TypoVal> {val.dateTime}</TypoVal>

 <TypoVal><DeleteOutlinedIcon/></TypoVal>
 <TypoVal><CreateOutlinedIcon/></TypoVal>
 </StackRow>


       </Box>
  </StackRow>
  )
  })}




  </Stack>

      </CardContent>


   </Card>
  </Grid>
</Grid>

  )
}

