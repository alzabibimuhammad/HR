import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function PersonalInfo({ProfileData}) {

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

    <Card >
      <CardContent >
        <Stack spacing={2} direction={'column'}>

        <StackRow  >
          <img src='/images/pesonalProfile/personalInfo/icon.svg'/>
          <TypoHeader  >Personal Information:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>ID Number: </Typo>
          {/* <TypoVal>{ProfileData.}</TypoVal> */}
        </StackRow>

        <StackRow>
          <Typo>Birth Date: </Typo>
          <TypoVal>{ProfileData?.user_info?.birth_date}</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Marital Status:</Typo>
          <TypoVal>{ProfileData?.user_info?.military_situation}</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Social status:</Typo>
          <TypoVal>{ProfileData?.user_info?.social_situation}</TypoVal>
        </StackRow>

        <StackRow>
          <img src='/images/pesonalProfile/contact/icon.svg'/>
          <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Contact Information:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>Address:</Typo>
          <TypoVal>{ProfileData?.address}</TypoVal>
        </StackRow>
        <Stack>
        {ProfileData?.my_contacts?.map((contact, index) => (
  contact.type === 'user_num' && (
    <StackRow sx={{padding:"3px"}}  key={index}>
      <Typo>Phone Number{index -1}:</Typo>
      <TypoVal>{contact.contact}</TypoVal>
    </StackRow>
  )
))}

        </Stack>
        <StackRow >

        <Typo>Email:</Typo>

        <TypoVal>{ProfileData?.email}</TypoVal>
        </StackRow>

        {ProfileData?.my_contacts?.map((contact, index) => (
  contact.type === 'email' && (
    <StackRow key={index}>
      <Typo>Email {index +1}:</Typo>

      <TypoVal>{contact.contact}</TypoVal>
    </StackRow>
  )
))}

        <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Emergency:</TypoHeader>
        {ProfileData?.emergency?.map((val, index) => (
  <Box  key={val.id}>
    <StackRow>
      <Typo>Name:</Typo>
      <TypoVal>{val?.name}</TypoVal>
    </StackRow>
    <StackRow>
      <Typo>Address:</Typo>
      <TypoVal>{val?.address}</TypoVal>
    </StackRow>
    <StackRow>
      <Typo>Phone number:</Typo>
      <TypoVal>{val.phone_num}</TypoVal>
    </StackRow>
    <StackRow>
      <Typo>Email:</Typo>
      <TypoVal>{val?.email}</TypoVal>
    </StackRow>
  </Box>
))}




        <StackRow>
          <img src='/images/pesonalProfile/professional/icon.svg'/>
          <TypoHeader marginLeft={'5px'} fontSize={'16px'} >Professional:</TypoHeader>
        </StackRow>

        <StackRow>
          <Typo>Specialization:</Typo>
          <TypoVal>{ProfileData?.specialization}</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>Role:</Typo>
          <TypoVal>{ProfileData?.role}</TypoVal>
        </StackRow>
        <StackRow>
          <Typo>team:</Typo>
          <TypoVal>{ProfileData?.department?.name}</TypoVal>

        </StackRow>
        </Stack>
      </CardContent>
    </Card>

  )
}
