import { Card, CardContent, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system';
import React from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

export default function Deductions({data}) {
console.log("🚀 ~ Deductions ~ data:", data?.data?.policy?.deduction_status === 1 ? "By choosing this option, the system will generate a deduction request for specific cases.Admin approval is required before the deduction is applied.Ideal for situations that may require review or exceptions.": "Automatic DeductionSelecting this option will enable automatic deduction of salary for specified cases, such as late arrivals. The system will apply deductions without requiring manual approval.")


  console.log(Boolean(1));

  const {t} = useTranslation()

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
          <TypoHeader>{t("Deductions")}</TypoHeader>
          <Divider  sx={{ marginLeft:'1%',width:'81%',height:'1px' }} color='black' />

        </StackRow>

        {}

        <Typo marginTop={'2%'}>{data?.data?.policy?.deduction_status === 1 ?"Request for Approval":"Automatic Deduction"}</Typo>


        <TypoVal sx={{marginTop:"5px"}}>{data?.data?.policy?.deduction_status === 1 ? "By choosing this option, the system will generate a deduction request for specific cases.Admin approval is required before the deduction is applied.Ideal for situations that may require review or exceptions.": "Automatic DeductionSelecting this option will enable automatic deduction of salary for specified cases, such as late arrivals. The system will apply deductions without requiring manual approval."  }
        </TypoVal>


      </CardContent>
    </Card>
  )
}
