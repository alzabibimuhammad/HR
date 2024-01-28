import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

export default function Warnings() {
  const [alert , setAlert] = useState(0);
  const [warnings , setWarnings] = useState(0);

  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))

    const handleUpAlert = _=>{
      console.log(alert);
      setAlert(alert+1)
    }
    const handleDownAlert = _=>{
      if(alert != 0)
        setAlert(alert-1)
    }
    const handleUpWaring = _=>{
      console.log(warnings);
      setWarnings(warnings+1)
    }
    const handleDownWarning = _=>{
      if(warnings != 0)
        setWarnings(warnings-1)
    }

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
        <Typography fontSize={'20px'}>Warnings Management</Typography>

        <Typo>Alerts to warning</Typo>

        <TextField
        value={alert!=0 ? alert : 'none'}
        disabled

        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpAlert} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownAlert} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
      <Typo>Warnings to dismissal</Typo>
      <TextField
        value={warnings!=0 ? warnings : 'none'}
        disabled

        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpWaring} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownWarning} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
        </Stack>
    </CardContent>
    </Card>
  )
}
