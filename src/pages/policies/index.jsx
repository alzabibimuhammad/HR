import { Grid } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Logo from 'src/features/Contracts/view/logo'
import AbsencesManagement from 'src/features/policies/componets/absences'
import Annual from 'src/features/policies/componets/annual'
import Deductions from 'src/features/policies/componets/deductions'
import Reviews from 'src/features/policies/componets/reviews'
import Warnings from 'src/features/policies/componets/warnings'
import WorkTime from 'src/features/policies/componets/workTime'
import {  Button, Card, CardContent, Chip,  TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';




export default function Policies() {

  const defaultValues = {
    // work_time:[{
      // work_days:[],

    //   // start_time:"",
    //   // cut_off_time:"",
    //   // end_time:"",
      notes:[],

    // }],

    annual_salary_increase:{
      allow_advance_request:"",
      annual_salary_percentage:""

    }
 };



  const {
    control,
    setError,
    handleSubmit,
    getValues,
    setValue,
    register,
    formState: { errors, },
  } = useForm({
    defaultValues,
    mode: 'onBlur',

    //  resolver: yupResolver(Schema),
  });

  const handleDataSubmit =  (data) => {
    try {
      // const formData = new FormData();
      // formData.append('image',ProfileImage)

      // data.image = ProfileImage;
      // console.log("🚀 ~ handleDataSubmit ~ data:", data)
      // addUsers(data)
      console.log(data);
    } catch (error) {

    }


 };




  return (
    <>
    <Stack direction={"row"} justifyContent={"space-between"} padding={"20px"}>
    <Box>
      <Typography sx={{fontSize:"24px",fontWeight:"600",color:"#8090a7"}}>
      Policies & Procedures
      </Typography>
    </Box>
    <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
      <Box>
        <Button sx={{fontWeight:"500",backgroundColor:"#8090a7",color:"#fff"}}>
        Cancel
        </Button>
      </Box>
      <Box >
        <Button
         onClick={handleSubmit(handleDataSubmit)}
        sx={{color:"#fff",borderRadius:"8px",padding:"10px",backgroundColor:"#6ab2df",fontWeight:"600"}}>
        Save changes
        </Button>
      </Box>
    </Stack>
    </Stack>
    <Logo/>
    <Grid container spacing={6}>
    <Grid item sm={6} xs={12} marginTop={'24px'} >

        <Stack  spacing={6} direction={'column'}>
          <Box  >
            <WorkTime defaultValues={defaultValues} control={control} Controller={Controller}/>
          </Box>

          <Box >
            <Annual  defaultValues={defaultValues} control={control} Controller={Controller}/>
          </Box>
          <Box >
            <Reviews/>
          </Box>
        </Stack>
    </Grid>

    <Grid item sm={6}  xs={12} marginTop={'24px'}>

      <Stack spacing={6} direction={'column'}>
        <Warnings/>
        <AbsencesManagement/>
        <Deductions/>
      </Stack>

    </Grid>

    </Grid>
    </>

  )
}
