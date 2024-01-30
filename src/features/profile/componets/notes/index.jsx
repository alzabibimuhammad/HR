import { Card, CardContent, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

export default function Notes() {
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
      <StackRow>
        <img  src='/images/pesonalProfile/notes/icon.svg'/>
        <Typography fontSize={'16px'} >Notes</Typography>
      </StackRow>
      
      </CardContent>
    </Card>
  )
}
