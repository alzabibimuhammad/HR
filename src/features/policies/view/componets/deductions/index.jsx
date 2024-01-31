import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

export default function Deductions() {
  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const TypoVal = styled(Typography)(() => ({
    fontSize:'14px',

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
  return (
    <Card>

      <CardContent>

        <StackRow>
          <img src='/images/policesIcon/deductions/icon.svg'/>
          <TypoHeader>Deductions</TypoHeader>
          <Divider  sx={{ marginLeft:'1%',width:'81%',height:'1px' }} color='black' />

        </StackRow>

        <Typo marginTop={'2%'}>Request for Approval</Typo>


        <TypoVal>
          By choosing this option, the system will generate a deduction request for specific cases.
           Admin approval is required before the deduction is applied.
            Ideal for situations that may require review or exceptions.
            </TypoVal>


      </CardContent>
    </Card>
  )
}
