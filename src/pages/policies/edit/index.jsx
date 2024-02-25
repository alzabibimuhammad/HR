import { Grid } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Logo from 'src/features/Contracts/view/logo'

import {  Button, Card, CardContent, Chip,  TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useAddPolicies } from '../hook/useAddPolicies'
import WorkTime from 'src/features/policies/edit/componets/workTime';
import Annual from 'src/features/policies/edit/componets/annual';
import Reviews from 'src/features/policies/edit/componets/reviews';
import Warnings from 'src/features/policies/edit/componets/warnings';
import AbsencesManagement from 'src/features/policies/edit/componets/absences';
import Deductions from 'src/features/policies/edit/componets/deductions';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from '../validation';
import useShowPolicies from 'src/features/policies/hook/useShowPolicies';




export default function EditPolicies() {
  const {data}=useShowPolicies()
  const Data = data?.data?.data


  const [days, setDays] = React.useState([]);

  const [alert , setAlert] = useState(0);
  const [warningsto , setWarningsto] = useState(0);
  const [Paid  , setPaid ] = useState();
  const [Unpaid  , setUnpaid ] = useState(0);
  const [Sick , setSick] = useState(0);
  const [annualSalarypercentage,setAnnualSalarypercentage] = useState()


  const {t} = useTranslation()

  useEffect(()=>{
    setPaid(Data?.policy?.absence_management?.paid_absence_days?.count)
    setUnpaid(Data?.policy?.absence_management?.unpaid_absence_days?.count)
    setSick(Data?.policy?.absence_management?.sick_absence_days?.count)
    setAlert(Data?.policy?.warnings?.alerts_to_warnings)
    setWarningsto(Data?.policy?.warnings?.warnings_to_dismissal)
    setDays([Data?.policy?.work_time?.work_days])
    setAnnualSalarypercentage(Data?.policy.annual_salary_increase?.annual_salary_percentage)

  },[data])





 const handleDataSubmit =  (data) => {
  //  try {

  //    data.warnings.alerts_to_warnings=alert
  //    data.warnings.warningsto_dismissal=warningsto
  //    data.absence_management.paid_absence_days.count=Paid
  //    data.absence_management.unpaid_absence_days.count=Unpaid
  //    data.absence_management.sick_absence_days.count=Sick
  //    data.work_time.work_days=days

  //     AddPolicies(data)
  //  } catch (error) {

  //  }


};


  const {
    control,
    setError,
    handleSubmit,
    getValues,
    setValue,
    register,
    reset,
    formState: { errors, },
  } = useForm({
    mode: 'onBlur',

      resolver: yupResolver(Schema),
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

            <WorkTime EditData={Data} errors={errors} control={control} Controller={Controller} setDays={setDays} days={days}/>

          </Box>

          <Box >
            <Annual EditData={Data} errors={errors}  control={control} annualSalarypercentage={annualSalarypercentage} setAnnualSalarypercentage={setAnnualSalarypercentage} Controller={Controller}/>
          </Box>
          <Box >
            <Reviews EditData={Data}  errors={errors}   control={control} Controller={Controller}/>
          </Box>
        </Stack>
    </Grid>

    <Grid item sm={6}  xs={12} marginTop={'24px'}>

      <Stack spacing={6} direction={'column'}>
        <Warnings EditData={Data} errors={errors}  control={control} Controller={Controller} setAlert={setAlert} alert={alert} setWarningsto={setWarningsto} warningsto={warningsto}/>
        <AbsencesManagement EditData={Data} control={control} Controller={Controller} setPaid={setPaid} Paid={Paid} Unpaid={Unpaid} setUnpaid={setUnpaid} setSick={setSick} Sick={Sick}/>
        <Deductions  EditData={Data} control={control} Controller={Controller} />
      </Stack>

    </Grid>

    </Grid>
    </>

  )
}
