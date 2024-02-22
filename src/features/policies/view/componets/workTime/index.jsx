import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'

import { Stack } from '@mui/system';

import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

export default function WorkTimes({data}) {
  const {t} = useTranslation()

  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

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
    alignItems:'center'
  }));




  return (<>

<Card>

<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/worktimes/worktimes.svg'/>
    <TypoHeader>{t('Work Time')}</TypoHeader>
    <Divider  sx={{ marginLeft:'1%',width:'78%',height:'1px' }} color='black' />

  </StackRow>


  {/* {Array.isArray(data?.data) &&
  data?.data?.map((item, index) => (

    ))} */}

    <div >

          <Stack direction={'row'} marginTop={'2%'} spacing={1}>
            <Typo>{t('Work days')}:</Typo>
            <TypoVal>{data?.data?.policy.work_time?.work_days.map((day)=>( day+" "))}</TypoVal>
          </Stack>

          <Stack direction={'row'}  spacing={1} sx={{ padding: "5px 0px" }}>
            <Typo>{t('Start Date')}:</Typo>
             <TypoVal>{data?.data?.policy.work_time?.start_time}</TypoVal>
          </Stack>

          <Stack direction={'row'}  spacing={1}>
            <Typo>{t('End Date')}:</Typo>
            <TypoVal>{data?.data?.policy.work_time?.end_time}</TypoVal>
          </Stack>
        </div>


        <Typography component={'li'} sx={{margin:"5px"}}>
        {t('Notes')}
        </Typography>

        <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy.work_time?.notes?.length > 0 ?
    data?.data?.policy.work_time?.notes.map((note, index) => (
      <Stack direction={'column'}>
        <Typo marginLeft={'25px'} >{t('Note')} {index+1}:</Typo>
        <Typo marginLeft={'40px'}  key={index}>{note}</Typo>
      </Stack>
      )) :
      <Typography>{t("There is no notes")}</Typography>
    }
</TypoVal>

</CardContent>





<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/absence/absence.svg'/>
    <TypoHeader>{t('Absence')}</TypoHeader>
    <Divider  sx={{ marginLeft:'1%',width:'82%',height:'1px' }} color='black' />

  </StackRow>

  <StackRow direction={'row'}  spacing={1}  marginTop={'2%'}>
    <Typo>{t('Paid Absences Days')}:</Typo>
     <TypoVal>{data?.data?.policy?.absence_management?.paid_absence_days?.count}</TypoVal>
  </StackRow>

  <Stack direction={'row'}  spacing={1} sx={{padding:"5px 0px"}}>
    <Typo>{t('Unpaid Absences Days')}:</Typo>
    <TypoVal>{data?.data?.policy?.absence_management?.unpaid_absence_days?.count}</TypoVal>
  </Stack>

  <Stack direction={'row'}  spacing={1}>
    <Typo>{t('Sick Absences Days')}:</Typo>
    <TypoVal>{data?.data?.policy?.absence_management?.sick_absence_days?.count}</TypoVal>
  </Stack>


    <Typography component={'li'} sx={{margin:"5px"}}>
    {t('Notes')}
    </Typography>

    <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.absence_management?.notes?.length > 0 ?
    data?.data?.policy?.absence_management?.notes.map((note, index) => (
      <Stack direction={'column'} key={index}>
        <Typo marginLeft={'25px'} >{t('Note')} {index+1}:</Typo>
        <Typo marginLeft={'40px'} >{note}</Typo>


      </Stack>
    )) :
    <Typography>{t("There is no notes")}</Typography>
  }
</TypoVal></CardContent>

<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/annual/annual.svg'/>
    <Typography sx={{width:"30% !important",marginLeft:'5px',color:"#131627",fontSize:'14px !important',fontWeight:'500 !important'}}>{t('Annual Salary Increase')} </Typography>
    <Divider  sx={{ width:'66.5%',height:'1px' }} color='black' />

  </StackRow>

  <Stack direction={'row'}  spacing={1}  marginTop={'2%'}>
    <Typo>{t('Annual percentage increase')}:</Typo>
     <TypoVal>{data?.data?.policy?.annual_salary_increase?.annual_salary_percentage}%</TypoVal>
  </Stack>


    <Typography component={'li'} sx={{margin:"5px"}}>

    {t('Notes')}
    </Typography>

    <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.annual_salary_increase?.notes?.length > 0 ?
    data?.data?.policy?.annual_salary_increase?.notes.map((note, index) => (
      <Stack direction={'column'} key={index}>
      <Typo marginLeft={'25px'} >{t('Note')} {index+1}:</Typo>
      <Typo marginLeft={'40px'} >{note}</Typo>
    </Stack>
    )) :
    <Typography>{t("There is no notes")}</Typography>
  }
</TypoVal></CardContent>

</Card>
</>
  )
}

