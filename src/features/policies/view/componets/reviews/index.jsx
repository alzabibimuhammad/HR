import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export default function Reviews({data}) {
  const {t} = useTranslation()

  const Typo = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const TypoVal = styled(Typography)(() => ({
    fontSize:'14px',
    marginLeft:'8px',
    marginRight:'8px'


  }))

  const TypoHeader = styled(Typography)(() => ({
    fontSize:'16px',
    marginLeft:'8px',
    marginRight:'8px',
    fontWeight:'500',
    textTransform:'capitalize',
    color:'#131627'

  }))

  const StackRow = styled(Stack)(({ direction }) => ({
    flexDirection: direction === 'column' ? 'column' : 'row',
    alignItems:'center'
  }));

  return (
    <Card sx={{borderRadius:" 12px"}}>

      <CardContent>

        <StackRow>
          <img src='/images/policesIcon/review/icon.svg'/>
          <TypoHeader>{t("Reviews")}</TypoHeader>
          <Divider  sx={{ width:'70%',height:'0px' ,backgroundColor:'#8090A7'}} />

        </StackRow>


        <Typo   marginTop={'2%'}>{t("Review criteria")}</Typo>

        {data?.data?.rateTypes?.map((val,index)=>( <>



        <TypoVal sx={{my:"10px"}} key={index}>{t("Type")} {val?.rate_type}</TypoVal>
        </>
))}


      </CardContent>
    </Card>
  )
}
