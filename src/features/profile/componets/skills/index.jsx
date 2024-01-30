import { Card, CardContent, Rating, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export default function Skills() {

  const Typo = styled(Typography)(() => ({
    fontSize:'14px'

  }))
  const TypoVal = styled(Typography)(() => ({
    fontSize:'14px',
    marginLeft:'3px'

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
          <Typography marginLeft={'5px'} fontSize={'16px'} >Skills & Career:</Typography>
        </StackRow>

        <Stack direction={'column'}>
          <Typo >Education:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <Typo>Master Degree in Computer Science at Damascus University</Typo>
          </li>
          <li>
            <Typo >Master Degree in Computer Science at Damascus University</Typo>
          </li>
          </ul>
        </Stack>

        <Stack direction={'column'}>
          <Typo >Certifications:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <Typo>UX Design Google Certificate </Typo>
          </li>
          <li>
            <Typo >UX Design Google Certificate </Typo>
          </li>
          </ul>
        </Stack>
        <Stack direction={'column'}>
          <Typo >Career:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li>
            <Typo>Former UI UX Designer at Idealize </Typo>
          </li>
          <li>
            <Typo >Former UI UX Designer at Idealize </Typo>
          </li>
          </ul>
        </Stack>
        <Stack direction={'column'}>
          <Typo >Skills:</Typo>
          <ul style={{ padding:0,margin:0,marginLeft:'5%'}} >
            <li >
            <StackRow>
              <Typo>Figma</Typo>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <Typo>Figma</Typo>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <Typo>Figma</Typo>
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
              <Typo>ara</Typo>
              <Rating name="size-medium" defaultValue={2} />
            </StackRow>
          </li>
          <li >
            <StackRow>
              <Typo>eng</Typo>
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
