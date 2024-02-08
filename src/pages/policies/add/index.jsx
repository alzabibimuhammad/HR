import { Grid } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import Logo from 'src/features/Contracts/view/logo'

import {  Button, Card, CardContent, Chip,  TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAddPolicies } from '../hook/useAddPolicies'
import WorkTime from 'src/features/policies/add/componets/workTime';
import Annual from 'src/features/policies/add/componets/annual';
import Reviews from 'src/features/policies/add/componets/reviews';
import Warnings from 'src/features/policies/add/componets/warnings';
import AbsencesManagement from 'src/features/policies/add/componets/absences';
import Deductions from 'src/features/policies/add/componets/deductions';
import { useTranslation } from 'react-i18next';




export default function Policies() {
  const { mutate: AddPolicies, isLoading } = useAddPolicies();
  const [days, setDays] = React.useState([]);
  const [alert , setAlert] = useState(0);
  const [warningsto , setWarningsto] = useState(0);
  const [Paid  , setPaid ] = useState(0);
  const [Unpaid  , setUnpaid ] = useState(0);
  const [Sick , setSick] = useState(0);
  const {t} = useTranslation()



  const defaultValues = {
    // work_time:[{
      // work_days:[],

      //   // start_time:"",
      //   // cut_off_time:"",
      //   // end_time:"",
      // }],
      // notes:[],


    // annual_salary_increase:{
    //   allow_advance_request:"",
    //   annual_salary_percentage:""

    // }
    warnings:{
      alerts_to_warnings:0,
      warningsto_dismissal:0,
      notes:[]
    },

 };

 const handleDataSubmit =  (data) => {
   try {
     // const formData = new FormData();
     // formData.append('image',ProfileImage)

     // data.image = ProfileImage;

     data.warnings.alerts_to_warnings=alert
     data.warnings.warningsto_dismissal=warningsto
     data.absence_management.paid_absence_days.count=Paid
     data.absence_management.unpaid_absence_days.count=Unpaid
     data.absence_management.sick_absence_days.count=Sick
     data.work_time.work_days=days

      AddPolicies(data)
   } catch (error) {

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





  return (
    <>
    <Stack direction={"row"} justifyContent={"space-between"} padding={"20px"}>
    <Box>
      <Typography sx={{fontSize:"24px",fontWeight:"600",color:"#8090a7"}}>
      {t("Policies & Procedures")}
      </Typography>
    </Box>
    <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
      <Box>
        <Button sx={{fontWeight:"500",backgroundColor:"#8090a7",color:"#fff",':hover': { color: '#fff', backgroundColor: '#2A4759' }}}>
        {t("Cancel")}
        </Button>
      </Box>
      <Box >
        <Button
         onClick={handleSubmit(handleDataSubmit)}
        sx={{color:"#fff",borderRadius:"8px",padding:"10px",backgroundColor:"#6ab2df",fontWeight:"600" ,':hover': { color: 'inhert', backgroundColor: '#2A4759' }      }}>
        {t("Save changes")}
        </Button>
      </Box>
    </Stack>
    </Stack>
    <Logo/>
    <Grid container spacing={6}>
    <Grid item sm={6} xs={12} marginTop={'24px'} >

        <Stack  spacing={6} direction={'column'}>
          <Box  >
            <WorkTime defaultValues={defaultValues} control={control} Controller={Controller} setDays={setDays} days={days}/>
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
        <Warnings defaultValues={defaultValues} control={control} Controller={Controller} setAlert={setAlert} alert={alert} setWarningsto={setWarningsto} warningsto={warningsto}/>
        <AbsencesManagement control={control} Controller={Controller} setPaid={setPaid} Paid={Paid} Unpaid={Unpaid} setUnpaid={setUnpaid} setSick={setSick} Sick={Sick}/>
        <Deductions/>
      </Stack>

    </Grid>

    </Grid>
    </>

  )
}
