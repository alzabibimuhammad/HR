import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

export default function Warning() {
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

  return (
    <Card>

      <CardContent>

        <StackRow  >

          <img src='/images/policesIcon/warning/icon.svg'/>
          <TypoHeader>Warnings & Alerts</TypoHeader>
          <Divider  sx={{ marginLeft:'1%',width:'68%',height:'1px' }} color='black' />

        </StackRow>

        <StackRow  marginTop={'2%'}>
          <Typo>Warnings To Alert:</Typo>
          <TypoVal>3</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>Warnings To Dismissal:</Typo>
          <TypoVal>3</TypoVal>
        </StackRow>

          <Typography component={'li'}>

            Notes
          </Typography>

          <Typo marginLeft={'21px'} >Note 1:</Typo>
          <TypoVal  style={{ maxWidth:'319px',marginLeft:'21px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, repudiandae!</TypoVal>
      </CardContent>
    </Card>
  )
}
