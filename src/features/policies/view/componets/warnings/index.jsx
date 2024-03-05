import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export default function Warning({data}) {

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

  return ( <>



    <Card sx={{borderRadius:" 12px"}}>

      <CardContent sx={{PaddingX:'100px',paddingY:'16px'}}>

        <StackRow  >

          <img src='/images/policesIcon/warning/icon.svg'/>
          <TypoHeader >{t("Warnings To Alert")}</TypoHeader>
          <Divider  sx={{ width:'60%',height:'0px' ,backgroundColor:'#8090A7'}} />

        </StackRow>

        <StackRow  marginTop={'2%'}>
          <Typo>{t("Warnings To Alert")}:</Typo>
          <TypoVal>{data?.data?.policy?.warnings?.alerts_to_warnings}</TypoVal>
        </StackRow>

        <StackRow>
          <Typo>{t("Warnings To Dismissal")}:</Typo>
           <TypoVal>{data?.data?.policy?.warnings?.warningsto_dismissal}</TypoVal>
        </StackRow>

          <Typography component={'li'}>

          {t("Notes")}
          </Typography>

          
          <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.warnings?.notes?.length > 0 ?
    data?.data?.policy?.warnings?.notes.map((note, index) => (
      <div key={index}>
        {note}
      </div>
    )) :
    <Typography>{t("There is no notes")}</Typography>
  }
</TypoVal>      </CardContent>
    </Card>
    </>


  )
}
