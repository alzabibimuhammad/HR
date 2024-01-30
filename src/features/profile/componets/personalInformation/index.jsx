import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function PersonalInfo() {

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
  }));


  return (

    <Card>
      <CardContent>
        <Stack spacing={2} direction={'column'}>

        <StackRow  >
          <img src='/images/pesonalProfile/personalInfo/icon.svg'/>
          <TypoHeader  >Personal Information:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>ID Number: </Typo>
          <TypoVal>1000</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Birth Date: </Typo>
          <TypoVal>2001-12-24</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Marital Status:</Typo>
          <TypoVal>-</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Social status:</Typo>
          <TypoVal>Single</TypoVal>
        </StackRow>

        <StackRow>
          <img src='/images/pesonalProfile/contact/icon.svg'/>
          <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Contact Information:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>Address:</Typo>
          <TypoVal>babtomma</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>Phone Number:</Typo>
          <TypoVal>0932392808</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>Email:</Typo>
          <TypoVal>muhammad@gmail.com</TypoVal>
        </StackRow>

        <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Emergency:</TypoHeader>
        <ul style={{ padding:0,margin:0,marginLeft:'6%'}} >
          <li>
        <StackRow>
          <Typo>Name:</Typo>
          <TypoVal>muhammad</TypoVal>
        </StackRow>
        </li>
          <li>
        <StackRow>
          <Typo>Address:</Typo>
          <TypoVal>bobtomma</TypoVal>
        </StackRow>
        </li>
          <li>
        <StackRow>
          <Typo>Phone number:</Typo>
          <TypoVal>0932392808</TypoVal>
        </StackRow>
        </li>
        <li>
        <StackRow>
          <Typo>Email:</Typo>
          <TypoVal>muhammad@gmail.com</TypoVal>
        </StackRow>
        </li>
        </ul>

        <StackRow>
          <img src='/images/pesonalProfile/professional/icon.svg'/>
          <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Professional:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>Specialization:</Typo>
          <TypoVal>Front-end</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>Role:</Typo>
          <TypoVal>Admin</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>team:</Typo>
          <TypoVal>Front-end</TypoVal>
        </StackRow>

        </Stack>
      </CardContent>
    </Card>

  )
}
