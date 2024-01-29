import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import{ useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Checkbox from '@mui/material/Checkbox';




export default function AbsencesManagement(props) {
  const [Paid  , setPaid ] = useState(0);
  const [Unpaid  , setUnpaid ] = useState(0);
  const [Sick , setSick] = useState(0);
  const [checkedPaid, setCheckedPaid] = React.useState(true);
  const [checkedUnpaid, setCheckedUnpaid] = React.useState(true);
  const [checkedSick, setCheckedSick] = React.useState(true);

  const handleChangePaid = (event) => {
    setCheckedPaid(event.target.checked);
  };

  const handleChangeUnpaid = (event) => {
    setCheckedUnpaid(event.target.checked);
  };

  const handleChangeSick = (event) => {
    setCheckedSick(event.target.checked);
  };


  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleUpPaid = () => {
      console.log(Paid);
      setPaid(Paid + 1);
    }

    const handleDownPaid = () => {
      if (Paid > 0) {
        setPaid(Paid - 1);
      }
    }

    const handleUpUnpaid = () => {
      console.log(Unpaid);
      setUnpaid(Unpaid + 1);
    }

    const handleDownUnpaid = () => {
      if (Unpaid > 0) {
        setUnpaid(Unpaid - 1);
      }
    }

    const handleUpSick = () => {
      console.log(Sick);
      setSick(Sick + 1);
    }

    const handleDownSick = () => {
      if (Sick > 0) {
        setSick(Sick - 1);
      }
    }

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
        <Typography fontSize={'20px'}>Absences Management</Typography>

        <Box sx={{width:"100%"}}>
        <Typo>Paid absence days</Typo>

        <TextField
              value={Paid !== 0 ? Paid : 'none'}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpPaid} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownPaid} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}

    />
    <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
    <Checkbox
  checked={checkedPaid}
  onChange={handleChangePaid}
  inputProps={{ 'aria-label': 'controlled' }}
  sx={{padding:"0px"}}
/>
<Typo>

   Compensatory time
</Typo>
    </Box>
    </Box>


    <Box sx={{width:"100%",marginTop:"15px !important"}}>

      <Typo>Unpaid absence days</Typo>
      <TextField
              value={Unpaid !== 0 ? Unpaid : 'none'}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpUnpaid} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownUnpaid} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}

    />
       <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
    <Checkbox
  checked={checkedUnpaid}
  onChange={handleChangeUnpaid}
  inputProps={{ 'aria-label': 'controlled' }}
  sx={{padding:"0px"}}
/>
<Typo>

Compensatory time
</Typo>
    </Box>
    </Box>
    <Box sx={{width:"100%",marginTop:"15px !important"}}>

      <Typo>Sick absence days </Typo>
      <TextField
              value={Sick !== 0 ? Sick : 'none'}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpSick} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownSick} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}

    />
       <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
    <Checkbox
  checked={checkedSick}
  onChange={handleChangeSick}
  inputProps={{ 'aria-label': 'controlled' }}
  sx={{padding:"0px"}}
/>
<Typo>

Compensatory time
</Typo>
    </Box>
    </Box>
        </Stack>
    </CardContent>
    </Card>
  )
}

