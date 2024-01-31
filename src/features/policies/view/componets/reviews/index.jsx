import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import styled from 'styled-components';

export default function Reviews() {
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

        <StackRow>
          <img src='/images/policesIcon/review/icon.svg'/>
          <TypoHeader>Reviews</TypoHeader>
          <Divider  sx={{ marginLeft:'1%',width:'87%',height:'1px' }} color='black' />

        </StackRow>

        <Typo marginTop={'2%'}>Review criteria</Typo>
        <TypoVal>Type1</TypoVal>
        <TypoVal>Type2</TypoVal>


        <Typography component={'li'}>Notes</Typography>
        <Typo marginLeft={'21px'} >Note 1:</Typo>
        <TypoVal style={{ maxWidth:'319px',marginLeft:'21px' }}>Lorem ipsum dolor sit amet consecteturtae tt nesciunt alias!</TypoVal>


      </CardContent>
    </Card>
  )
}
