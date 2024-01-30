import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import { Box, Stack } from '@mui/system';
import styled from 'styled-components';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import Link from 'next/link';

export default function Employment() {
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
            <Stack spacing={2} direction={'column'}>

            <StackRow  >
              <img src='/images/pesonalProfile/employment/icon.svg'/>
              <Typography marginLeft={'5px'} fontSize={'16px'} >Employment:</Typography>
            </StackRow>

            <StackRow>
              <Typo>Start Date:</Typo>
              <TypoVal>2001-12-24</TypoVal>
            </StackRow>

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
              <TypoVal>1500.00</TypoVal>
            </StackRow>
            <StackRow>
              <Typo>Secretariats</Typo>
              <TypoVal>labtop</TypoVal>
            </StackRow>

            </Stack>
          </CardContent>
        </Card>

      )
    }

