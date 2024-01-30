import { Card, CardContent, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

export default function Notes() {
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
      <Stack direction={'column'} >
      <StackRow>
        <img  src='/images/pesonalProfile/notes/icon.svg'/>
        <TypoHeader fontSize={'16px'} >Notes</TypoHeader>
      </StackRow>
      </Stack>


      </CardContent>
    </Card>
  )
}
