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

  return ( <>



    <Card>

      <CardContent>

        <StackRow  >

          <img src='/images/policesIcon/warning/icon.svg'/>
          <TypoHeader sx={{width:"680px"}}>{t("Warnings To Alert")}:</TypoHeader>
          <Divider  sx={{ marginLeft:'1%',width:'68%',height:'1px' }} color='black' />

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

          <Typo marginLeft={'21px'} >{t("Note")} 1:</Typo>
          <TypoVal style={{ maxWidth:'319px', marginLeft:'21px',color:"red" }}>
  {data?.data?.policy?.warnings?.notes?.length > 0 ?
    data?.data?.policy?.warnings?.notes.map((note, index) => (
      <div key={index}>
        {note}
      </div>
    )) :
    "not notes"
  }
</TypoVal>      </CardContent>
    </Card>
    </>


  )
}
