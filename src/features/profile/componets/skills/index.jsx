import { Card, CardContent, Rating, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function Skills() {
  
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
          <img  src='/images/pesonalProfile/skills/icon.svg'/>
          <TypoHeader >Skills & Career:</TypoHeader>
        </StackRow>

        <Stack direction={'column'}>
          <Typo >Education:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <TypoVal>Master Degree in Computer Science at Damascus University</TypoVal>
          </li>
          <li>
            <TypoVal >Master Degree in Computer Science at Damascus University</TypoVal>
          </li>
          </ul>
        </Stack>

        <Stack direction={'column'}>
          <Typo >Certifications:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <TypoVal>UX Design Google Certificate </TypoVal>
          </li>
          <li>
            <TypoVal >UX Design Google Certificate </TypoVal>
          </li>
          </ul>
        </Stack>
        <Stack direction={'column'}>
          <Typo >Career:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <TypoVal>Former UI UX Designer at Idealize </TypoVal>
          </li>
          <li>
            <TypoVal >Former UI UX Designer at Idealize </TypoVal>
          </li>
          </ul>
        </Stack>
        <Stack direction={'column'}>
          <Typo >Skills:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li >
            <StackRow>
              <TypoVal>Figma</TypoVal>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <TypoVal>Figma</TypoVal>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <TypoVal>Figma</TypoVal>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          </ul>
        </Stack>
        <Stack direction={'column'}>
          <Typo >Languages:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li >
            <StackRow>
              <TypoVal>ara</TypoVal>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <TypoVal>eng</TypoVal>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>

          </ul>
        </Stack>

        </Stack>
      </CardContent>
    </Card>

  )
}
