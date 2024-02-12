import React, { useEffect } from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system';

import  { forwardRef, useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field';
import DatePicker from 'react-datepicker'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { useForm,Controller } from 'react-hook-form';
import { useDeleteDecision } from '../hook/useDeleteDecision';
import { useAddDecision } from '../hook/useAddDecision';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEditDecision } from '../hook/useEditDecision';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useAddAbsence } from '../hook/useAddAbsence';
import useGetAbsence from '../hook/useGetAbsence';

export default function Absence({DataDecision,id}) {

  const idUser =id
  const {data} = DataDecision?.data

  const {mutate:AddAbsence}=useAddAbsence()




  const { mutate: DeleteDecision, isLoading } = useDeleteDecision();



  const {mutate : EditDecision} = useEditDecision()

  const [startDate,setStartDate]=useState()
  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [Edit , setEdit] = useState({})
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));




  const handleDeleteAPI = (id) => {
    DeleteDecision(id)
    handleDeleteClose()
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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const StackRow = styled(Stack)(({ direction }) => ({
    flexDirection: direction === 'column' ? 'column' : 'row',
    justifyContent:"space-between",
    width:"100% ",
    alignItems:"center"
  }));

  const handleClickOpenEdit = (dataRow) => {
    setOpenEdit(true);
    setEdit(dataRow)
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


  const handleDeleteOpen = () => {
    setOpenDelete(true)
    };

  const handleDeleteClose = () => {
    setOpenDelete(false)
    };




  const defaultValues = {
    startDate: Edit.startDate,
    dayOfWeek: Edit.dayOfWeek,
    user_id:idUser,

  };



   const onSubmit = async (data) => {

    try {
     const formData = new FormData();
     formData.append('startDate', data.startDate);
     formData.append('dayOfWeek', data.dayOfWeek);
     formData.append('user_id', data.user_id);
     AddAbsence(formData)
     reset()
     handleCloseAdd()
    } catch (error) {
    }


  };


  const onSubmit2 = async (data) => {

      const formData = new FormData();
      formData.append('startDate', data.startDate);
      formData.append('dayOfWeek', data.dayOfWeek);
      formData.append('user_id', data.user_id);

      EditDecision({id:Edit.id,formData:formData})
      reset()
      handleCloseEdit()

   };

   const {
    control,
    setError,
    handleSubmit,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  });

  const handleButtonClick =  (event) => {
    event.preventDefault();

    try {
      const response =  EditDecision({
        id: idUser,
        data: {
          startDate: event.target[0].value,
          dayOfWeek: event.target[1].value,
          user_id: idUser,
        },
      });

    } catch (error) {
      console.error('API Error:', error);
    }
  };



  useEffect(() => {
    setValue('dateTime', Edit?.dateTime || '');
    setValue('content', Edit?.content || '');
  }, [Edit, setValue]);



  return (
    <Card sx={{marginTop:"12px"}}>
    <CardContent >


      <Stack spacing={8} >


<StackRow >
  <Box>
 <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>Absence</TypoHeader>
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

 <TypoHeader>Total {data?.absences?.length} Absence</TypoHeader>
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
      Add Absence
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
                rules={{ required: true ,minLength:8}}
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
                    error={Boolean(errors?.content)}
                    helperText={errors?.content?.message}
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
{data?.absences?.map((val,index)=>{
  return (
<StackRow key={val.id}>
  <Box>
 <Typography>{val.dayOfWeek} </Typography>
  </Box>
  <Box>

<StackRow >
<TypoVal>{val.startDate}</TypoVal>
<Button sx={{padding:"0"}}>

<TypoVal onClick={handleDeleteOpen}  sx={{cursor:"pointer"}}><DeleteOutlinedIcon/></TypoVal>
</Button>
<Dialog
      onClose={handleDeleteClose}
      open={openDelete}
      >
      <Grid item xs={12}>
        <Item>
        <DialogContent sx={{height:"99px",width:"100%",borderRadius:"10px",position:"relative",overflow:"visible"}}>
        <DialogContentText sx={{}}>
          <CancelRoundedIcon  style={{ backgroundColor:"#FFFFFF",color: '#A20D29' ,fontSize: 160,position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -90%)",borderRadius:"50%" }} />

        </DialogContentText>
      </DialogContent>
      <Typography  sx={{fontWeight:"600",fontSize:"16px",color:"#131627"}}>Delete</Typography>


        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
        {"Are you sure you want to delete Deductions?"}
      </DialogTitle>


        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Button onClick={handleDeleteClose} style={{ color: '#B4B4B3' }}>Cancel</Button>
        <Button  sx={{color:"#DF2E38"}}  onClick={()=>handleDeleteAPI(val.id)} autoFocus>
          Delete
        </Button>
      </DialogActions>
      </Item>
      </Grid>
    </Dialog>
<Button sx={{padding:"0"}}>
<TypoVal onClick={() => handleClickOpenEdit(val)}   sx={{cursor:"pointer"}}><CreateOutlinedIcon/></TypoVal>
</Button>
<Dialog
      fullScreen={fullScreen}
      open={openEdit}
      onClose={handleCloseEdit}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle sx={{fontWeight:"600",fontSize:"20px",color:"#8090a7"}} id="responsive-dialog-title">
      Edit Deductions
      </DialogTitle>
          <form onSubmit={handleButtonClick} >
      <DialogContent sx={{width:"100vh"}}>
        <DialogContentText sx={{width:"80%",display:"flex",flexDirection:"column",gap:"16px"}}>
       <Controller
  name='dateTime'
  control={control}
  defaultValue={defaultValues.dateTime} // Provide your default date value here

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
                defaultValue={defaultValues.content} // Provide your default date value here

                rules={{ required: true,minLength:8 }}
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
                    error={Boolean(errors?.content)}
                    helperText={errors?.content?.message}

                  />
                )}
              />


        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button  sx={{padding:"8px 24px 8px 24px",borderRadius:"4px",backgroundColor:"#dce1e6",color:"#8090a7",fontSize:"14px",fontWeight:"500","&:hover": {backgroundColor: "#dce1e6"}}} autoFocus onClick={handleCloseEdit}>
        Cancel
        </Button>
        <Button type='submit' sx={{backgroundColor:"#6ab2df",padding:"8px 34px 8px 34px",borderRadius:"4px",fontWeight:"500",color:"#fff",fontSize:"14px","&:hover": {backgroundColor: "#6ab2df"}}} autoFocus onClick={handleSubmit(onSubmit2)}>
        Edit
        </Button>
      </DialogActions>
        </form>
    </Dialog>
</StackRow>


     </Box>
</StackRow>
)

})}

</Stack>

    </CardContent>


 </Card>
  )
}
