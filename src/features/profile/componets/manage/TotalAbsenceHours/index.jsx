import React, { useEffect } from 'react'
import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import {     Modal } from '@mui/material';
import { Box, Stack } from '@mui/system';
import  { useState } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import { useForm,Controller } from 'react-hook-form';
import { useAddDecision } from '../hook/useAddDecision';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEditDecision } from '../hook/useEditDecision';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { CustomPickerManage } from 'src/@core/components/customPickerManage';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import { useAddAbsence } from './hook/useAddAbsence';
// import useGetAbsence from './hook/useGetAbsence';
// import { useDeleteAbsence } from './hook/useDeleteAbsence';
// import { useEditAbsence } from './hook/useEditAbsence';
import { MenuItem } from '@mui/material'
import { useTranslation } from 'react-i18next';



export default function TotalAbsenceHours({id}) {
  const idUser =id
  const {t} = useTranslation()
  // const { mutate: DeleteAbsence, isLoading } = useDeleteAbsence();
  // const { mutate:getAbsenceDate, data: DataWarnings } = useGetAbsence();

  // const { mutate: AddAbsence} = useAddAbsence();
  // const {mutate : EditAbsence} = useEditAbsence()

  const [openAdd, setOpenAdd] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [Edit , setEdit] = useState({})
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [startDate,setStartDate]=useState(null)
  const [state, setstate] = useState(null);
  const [Data, setData] = useState(null);


  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));





  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChoose = (formattedDate) => {

    getAbsenceDate({idUser,formattedDate})
    setData({idUser,formattedDate})

  };


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


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
  };

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


    const handleDeleteAPI = (id) => {
      DeleteAbsence(id)
      handleDeleteClose()
      getAbsenceDate(Data)
    };


  const defaultValues = {
    dateTime: Edit.dateTime,
    type: Edit.type,
    user_id:idUser,
  };



   const onSubmit = async (data) => {

     const formData = new FormData();
     formData.append('startDate', data.startDate);
     formData.append('user_id', idUser);
     formData.append('type', data.type);

     AddAbsence(formData)
     reset()
     handleCloseAdd()
     getAbsenceDate(Data)


  };

  const onSubmit2 = async (data) => {

      const formData = new FormData();
      formData.append('startDate', data.startDate);
      formData.append('type', data.type);


      EditAbsence({id:Edit.id,formData:formData})
      getAbsenceDate(Data)

      reset()
      handleCloseEdit()


   };

   const {
    control,
    setError,
    handleSubmit,
    reset,
    setValue,

    formState: { errors },
  } = useForm({
    defaultValues: defaultValues ,
    mode: 'onBlur',
  });





  useEffect(() => {
    setValue('startDate', Edit?.startDate || '');
    setValue('type', Edit?.type || '');
  }, [Edit, setValue ]);

  useEffect(() => {

  }, [handleDeleteAPI ]);


  return (
    <Card >
    <CardContent >


      <Stack spacing={8} >


<StackRow >
  <Box>
 <TypoHeader sx={{color:"#131627",fontWeight:"500"}}>{t('Total Absence hours')} </TypoHeader>
  </Box>
  <Box>


  <Stack direction={'row'} justifyContent={'space-between'} spacing={2} >
            <Button sx={{ border: '1px solid', width: '100%',backgroundColor:'#6AB2DF',color:'#fff', '&:hover': {backgroundColor:'#6AB2DF',color:'#fff' } }}  onClick={handleOpen}>
              <Stack direction={'row'} spacing={2} >
                <InsertInvitationIcon/>
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
                <CustomPickerManage handleClose={handleClose} setstate={setstate} setStartDatee={setStartDate} state={state} startDate={startDate}  handleDateChoose={handleDateChoose}/>
              </Box>
            </Modal>



     </Box>
</StackRow>
<StackRow >
  <Box>

 <TypoHeader>{t('Total')} {"DataWarnings?.data?.data?.absences?.length"} {t('Total Absence hours')}</TypoHeader>
  </Box>
  <Box sx={{display:"flex",gap:"10px"}}>

<Button onClick={handleClickOpenAdd} sx={{borderRadius:"8px",padding:"8px 12px 8px 12px",backgroundColor:"#6ab2df",color:"#fff","&:hover": {backgroundColor: "#6ab2df"}}}>+ {t('Add')} </Button>

    <Dialog
      fullScreen={fullScreen}
      open={openAdd}
      onClose={handleCloseAdd}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle sx={{fontWeight:"600",fontSize:"20px",color:"#8090a7"}} id="responsive-dialog-title">
      {t('Add Total Absence hours')}
      </DialogTitle>
      <DialogContent sx={{width:"100vh"}}>
        <DialogContentText sx={{width:"80%",display:"flex",flexDirection:"column",gap:"16px"}}>
          <Stack width={"89%"} spacing={4}>

        <Controller
                name='startDate'
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
              name={`type`}
              control={control}
              render={({ field }) => (
                <CustomTextField
                select
                {...field}
                defaultValue=''
                SelectProps={{
                  displayEmpty: true,

                }}
                variant='outlined'
                fullWidth
                size='small'

                >
                  <MenuItem value=''>{t('Type')} </MenuItem>
                  <MenuItem value='justified'>{t('Justified')} </MenuItem>
                  <MenuItem value='unjustified'>{t('Unjustified')} </MenuItem>
                </CustomTextField>
              )}
              />

              </Stack>

        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{marginRight:{sm:"58px"}}}>
        <Button sx={{padding:"8px 24px 8px 24px",borderRadius:"4px",backgroundColor:"#dce1e6",color:"#8090a7",fontSize:"14px",fontWeight:"500","&:hover": {backgroundColor: "#dce1e6"}}} autoFocus onClick={handleCloseAdd}>
        {t('Cancel')}
        </Button>
        <Button sx={{backgroundColor:"#6ab2df",padding:"8px 34px 8px 34px",borderRadius:"4px",fontWeight:"500",color:"#fff",fontSize:"14px","&:hover": {backgroundColor: "#6ab2df"}}} onClick={handleSubmit(onSubmit)} autoFocus>
        {t('Add')}
        </Button>
      </DialogActions>
    </Dialog>
     </Box>
</StackRow>
<>
      {/* {DataWarnings?.data?.data?.absences?.map((val, index) => (
        <StackRow key={index}>
          <Box>
            <Typography>{`${val.type}`}</Typography>
          </Box>
          <Box>
            <StackRow>
              <Typography>{val.startDate}</Typography>
              <Button sx={{ padding: '0' }}>
                <Typography onClick={handleDeleteOpen} sx={{ cursor: 'pointer' }}>
                  <DeleteOutlinedIcon />
                </Typography>
              </Button>
              <Dialog
      onClose={handleDeleteClose}
      open={openDelete}
      >
      <Grid item xs={12}>
        <Item>
        <DialogContent sx={{height:"99px",width:"100%",borderRadius:"10px",position:"relative",overflow:"visible"}}>
        <DialogContentText sx={{}}>
          <CancelRoundedIcon  style={{ backgroundColor:"#FFFFFF",color: '#A20D29' ,fontSize: 160,position:"fixed",top: "50%", left: "50%", transform: "translate(-50%, -90%)",borderRadius:"50%" }} />

        </DialogContentText>
      </DialogContent>
      <Typography  sx={{fontWeight:"600",fontSize:"16px",color:"#131627"}}>{t('Delete')} </Typography>


        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
        {t("Are you sure you want to delete")+t("Advances")+"?"}
      </DialogTitle>


        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Button onClick={handleDeleteClose} style={{ color: '#B4B4B3' }}>{t('Cancel')} </Button>
        <Button  sx={{color:"#DF2E38"}}  onClick={()=>handleDeleteAPI(val.id)} autoFocus>
        {t('Delete')}
        </Button>
      </DialogActions>
      </Item>
      </Grid>
    </Dialog>
              <Button sx={{ padding: '0' }}>
                <Typography onClick={() => handleClickOpenEdit(val)} sx={{ cursor: 'pointer' }}>
                  <CreateOutlinedIcon />
                </Typography>
              </Button>
              <Dialog fullScreen={fullScreen} open={openEdit} onClose={handleCloseEdit} aria-labelledby="responsive-dialog-title">
                <DialogTitle sx={{ fontWeight: '600', fontSize: '20px', color: '#8090a7' }}>
                {t('Edit Total Absence hours')}
                </DialogTitle>
                <DialogContent sx={{ width: '100vh' }}>
                  <DialogContentText sx={{ width: '80%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <Stack width={"89%"} spacing={4}>

                  <Controller
                name='startDate'
                control={control}
                defaultValue={defaultValues.startDate} // Provide your default date value here

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
              name={`dateTime`}
              defaultValue={defaultValues.dateTime} // Provide your default date value here

              control={control}
              render={({ field }) => (
                <CustomTextField
                select
                {...field}
                defaultValue=''
                variant='outlined'
                fullWidth
                size='small'

                >
                  <MenuItem value=''>{t('Type')} </MenuItem>
                  <MenuItem value='justified'>{t('Justified')} </MenuItem>
                  <MenuItem value='unjustified'>{t('Unjustified')} </MenuItem>
                </CustomTextField>
              )}
              />
</Stack>
                  </DialogContentText>
                </DialogContent>
                <DialogActions sx={{marginRight:{sm:"58px"}}}>
                  <Button sx={{ padding: '8px 24px 8px 24px', borderRadius: '4px', backgroundColor: '#dce1e6', color: '#8090a7', fontSize: '14px', fontWeight: '500', '&:hover': { backgroundColor: '#dce1e6' } }} autoFocus onClick={handleCloseEdit}>
                  {t('Cancel')}
                  </Button>
                  <Button type="submit" sx={{ backgroundColor: '#6ab2df', padding: '8px 34px 8px 34px', borderRadius: '4px', fontWeight: '500', color: '#fff', fontSize: '14px', '&:hover': { backgroundColor: '#6ab2df' } }} autoFocus onClick={handleSubmit(onSubmit2)}>
                  {t('Edit')}
                  </Button>
                </DialogActions>
              </Dialog>
            </StackRow>
          </Box>
        </StackRow>
      ))} */}
    </>

</Stack>

    </CardContent>


 </Card>
  )
}
