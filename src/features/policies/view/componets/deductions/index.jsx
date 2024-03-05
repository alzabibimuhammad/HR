import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export default function Deductions({data}) {



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
          <img src='/images/policesIcon/deductions/icon.svg'/>
          <TypoHeader>{t("Deductions")}</TypoHeader>
          <Divider  sx={{ width:'60%',height:'0px' ,backgroundColor:'#8090A7'}} />

        </StackRow>

      

        <Typo marginTop={'5px'}>{data?.data?.policy?.deduction_status === 1 ?t("Request for Approval"):t("Automatic Deduction")}</Typo>


        <TypoVal sx={{marginTop:"5px"}}>{data?.data?.policy?.deduction_status === 1 ? t("the system will generate a deduction request for specific cases.Admin approval is required before the deduction is applied.Ideal for situations that may require review or exceptions."): t("Automatic DeductionSelecting this option will enable automatic deduction of salary for specified cases, such as late arrivals. The system will apply deductions without requiring manual approval.")  }
        </TypoVal>


      </CardContent>
    </Card>
  )
}
