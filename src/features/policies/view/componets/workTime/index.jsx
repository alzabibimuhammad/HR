import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'

import { Stack } from '@mui/system';

import styled from 'styled-components';

export default function WorkTimes({data}) {


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
    <TypoHeader>Work time</TypoHeader>
    <Divider  sx={{ marginLeft:'1%',width:'78%',height:'1px' }} color='black' />

  </StackRow>


  {/* {Array.isArray(data?.data) &&
  data?.data?.map((item, index) => (

    ))} */}

    <div >

          <StackRow marginTop={'2%'}>
            <Typo>Work days:</Typo>
            <TypoVal>{data?.data?.policy.work_time?.work_days.map((day)=>( day+" "))}</TypoVal>
          </StackRow>

          <StackRow sx={{ padding: "5px 0px" }}>
            <Typo>Start Date:</Typo>
             <TypoVal>{data?.data?.policy.work_time?.start_time}</TypoVal>
          </StackRow>

          <StackRow>
            <Typo>End Date:</Typo>
            <TypoVal>{data?.data?.policy.work_time?.end_time}</TypoVal>
          </StackRow>
        </div>


        <Typography component={'li'} sx={{margin:"5px"}}>
          Notes
        </Typography>

        <Typo marginLeft={'25px'} >Note 1:</Typo>
        <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy.work_time?.notes?.length > 0 ?
    data?.data?.policy.work_time?.notes.map((note, index) => (
      <span key={index}>{note}</span>
    )) :
    "not notes"
  }
</TypoVal>

</CardContent>





<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/absence/absence.svg'/>
    <TypoHeader>Absence</TypoHeader>
    <Divider  sx={{ marginLeft:'1%',width:'82%',height:'1px' }} color='black' />

  </StackRow>

  <StackRow  marginTop={'2%'}>
    <Typo>Paid Absences Days:</Typo>
     <TypoVal>{data?.data?.policy?.absence_management?.paid_absence_days?.count}</TypoVal>
  </StackRow>

  <StackRow sx={{padding:"5px 0px"}}>
    <Typo>Unpaid Absences Days:</Typo>
    <TypoVal>{data?.data?.policy?.absence_management?.unpaid_absence_days?.count}</TypoVal>
  </StackRow>

  <StackRow>
    <Typo>Sick Absences Days:</Typo>
    <TypoVal>{data?.data?.policy?.absence_management?.sick_absence_days?.count}</TypoVal>
  </StackRow>


    <Typography component={'li'} sx={{margin:"5px"}}>
      Notes
    </Typography>

    <Typo marginLeft={'25px'} >Note 1:</Typo>
    <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.absence_management?.notes?.length > 0 ?
    data?.data?.policy?.absence_management?.notes.map((note, index) => (
      <div key={index}>
        {note}
      </div>
    )) :
    "not notes"
  }
</TypoVal></CardContent>

<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/annual/annual.svg'/>
    <Typography sx={{width:"30% !important",marginLeft:'5px',color:"#131627",fontSize:'14px !important',fontWeight:'500 !important'}}>Annual Salary Increase </Typography>
    <Divider  sx={{ width:'66.5%',height:'1px' }} color='black' />

  </StackRow>

  <StackRow  marginTop={'2%'}>
    <Typo>Annual percentage increase:</Typo>
     <TypoVal>{data?.data?.policy?.annual_salary_increase?.annual_salary_percentage} %</TypoVal>
  </StackRow>


    <Typography component={'li'} sx={{margin:"5px"}}>

      Notes
    </Typography>

    <Typo marginLeft={'25px'} >Note 1:</Typo>
    <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.annual_salary_increase?.notes?.length > 0 ?
    data?.data?.policy?.annual_salary_increase?.notes.map((note, index) => (
      <div key={index}>
        {note}
      </div>
    )) :
    "not notes"
  }
</TypoVal></CardContent>

</Card>
</>
  )
}

