import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Link from 'next/link';

export default function Employment({ProfileData}) {
  console.log("🚀 ~ Employment ~ ProfileData:", ProfileData)

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
            <Stack spacing={2} direction={'column'}>


            <StackRow  >
              <img src='/images/pesonalProfile/employment/icon.svg'/>
              <TypoHeader >Employment:</TypoHeader>
            </StackRow>

              {ProfileData?.deposits?.map((deposit, index) => (
                  <Box sx={{}} key={index}>
                    <StackRow>
                      <Typo>Start Date:</Typo>
                      <TypoVal>{deposit.received_date}</TypoVal>
                    </StackRow>
                    <Stack direction={"row"}>
                      <Typo>Secretariats</Typo>
                      <TypoVal>{deposit.description}</TypoVal>
                    </Stack>
                  </Box>
))}
            <StackRow>

              <Typo>Tenure:</Typo>
              <TypoVal>12 months</TypoVal>
            </StackRow>

            <StackRow>
              <Typo>Contract:</Typo>

                  <Link href={`/contracts/view/${5}`} style={{ textDecoration:'none' }} >
                    <StackRow>
                      <img src='/images/pesonalProfile/showContract/icon.svg'/>
                      <Typo>Show Contract</Typo>
                    </StackRow>
                    </Link>
            </StackRow>{/* link to Contract */}

            <StackRow>
              <Typo>Salary</Typo>
              <TypoVal> {ProfileData?.user_info?.salary}</TypoVal>
            </StackRow>


            </Stack>
          </CardContent>
        </Card>

      )
    }

