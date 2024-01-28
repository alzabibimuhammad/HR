import { CheckBox } from '@mui/icons-material'
import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import styled from 'styled-components'

export default function Annual() {
  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
        <Typography fontSize={'20px'} >Annual Salary Increase</Typography>


        <Typo style={{ marginTop:'24px' }}>Annual percentage increase</Typo>

        <TextField
          defaultValue={0}
          size='small'
          InputProps={{
            endAdornment: (
                <Box marginLeft={'70%'}>
                  <Typography>
                    %
                  </Typography>
                </Box>
            ),
          }}
        />

    <FormGroup>
      <FormControlLabel control={<Checkbox onChange={handleChange}  />} label="Allow advance requests" />
    </FormGroup>

      </Stack>
      </CardContent>
    </Card>
  )
}
