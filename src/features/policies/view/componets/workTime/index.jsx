import React from 'react'
import { Card, CardContent, Divider, Typography } from '@mui/material'

import { Stack } from '@mui/system';

import styled from 'styled-components';

export default function WorkTimes({data}) {
console.log("🚀 ~ WorkTimes ~ data:", data?.data?.policy)
  const Data =data?.data?.policy

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


        <div >

          <StackRow marginTop={'2%'}>
            <Typo>Work days:</Typo>

            {Data?.work_time?.work_days?.map((day) => (
              <TypoVal>{day}</TypoVal>
          ))}

          </StackRow>

          <StackRow sx={{ padding: "5px 0px" }}>
            <Typo>Start Date:</Typo>
            <TypoVal>{Data?.work_time?.start_time}</TypoVal>
          </StackRow>

          <StackRow>
            <Typo>End Date:</Typo>
            <TypoVal>{Data?.work_time?.end_time}</TypoVal>
          </StackRow>
        </div>

        <Typography component={'li'} sx={{margin:"5px"}}>
          Notes
        </Typography>
            <Stack  direction={'column'} >
              {Data?.work_time?.notes?.map((note, index) => (
                <React.Fragment key={index}>
                  <Typo marginLeft={'25px'}>Note {index + 1}:</Typo>
                  <TypoVal style={{ maxWidth: '319px', marginLeft: '35px' }}>{note}</TypoVal>
                </React.Fragment>
              ))}
    </Stack>

</CardContent>





<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/absence/absence.svg'/>
    <TypoHeader>Absence</TypoHeader>
    <Divider  sx={{ marginLeft:'1%',width:'82%',height:'1px' }} color='black' />

  </StackRow>

  <StackRow  marginTop={'2%'}>
    <Typo>Paid Absences Days:</Typo>
    <TypoVal>{Data?.absence_management?.sick_days+Data?.absence_management?.vacation_days}</TypoVal>
  </StackRow>

  <StackRow sx={{padding:"5px 0px"}}>
    <Typo>Unpaid Absences Days:</Typo>
    <TypoVal>{Number(365)-(Data?.absence_management?.sick_days+Data?.absence_management?.vacation_days)}</TypoVal>
  </StackRow>

  <StackRow>
    <Typo>Sick Absences Days:</Typo>
    <TypoVal>{Data?.absence_management?.sick_days}</TypoVal>
  </StackRow>


    <Typography component={'li'} sx={{margin:"5px"}}>
      Notes
    </Typography>

    <Typo marginLeft={'25px'} >Note 1:</Typo>
    <TypoVal  style={{ maxWidth:'319px',marginLeft:'21px' }} >{Data?.absence_management?.notes}</TypoVal>
</CardContent>

<CardContent>

  <StackRow  >

    <img src='/images/policesIcon/annual/annual.svg'/>
    <Typography sx={{width:"30% !important",marginLeft:'5px',color:"#131627",fontSize:'14px !important',fontWeight:'500 !important'}}>Annual Salary Increase </Typography>
    <Divider  sx={{ width:'66.5%',height:'1px' }} color='black' />

  </StackRow>

  <StackRow  marginTop={'2%'}>
    <Typo>Annual percentage increase:</Typo>
    <TypoVal>{Data?.annual_salary_increase.percentage} %</TypoVal>
  </StackRow>


    <Typography component={'li'} sx={{margin:"5px"}}>

      Notes
    </Typography>

    <Typo marginLeft={'25px'} >Note 1:</Typo>
    <TypoVal  style={{ maxWidth:'319px',marginLeft:'21px' }} >{Data?.notes}</TypoVal>
</CardContent>

</Card>
</>
  )
}

