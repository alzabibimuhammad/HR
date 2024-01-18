import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'

export default function Info() {
  const [Status, setStatus] = useState('');
  const [Marital, setMarital] = useState('');

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const handleMaritalChange = (e) => {
    setMarital(e.target.value);
  };
  return (
    <Card>
        <CardContent>

          <Typography >Personal Info</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <Typography>Birth Date</Typography>
              <TextField
                fullWidth
                type='date'
                size='small'
                required
                placeholder='Birth Date'
              />
              <TextField
                fullWidth
                size='small'
                required
                placeholder='ID Number'
              />


                  <TextField
                    select
                    fullWidth
                    defaultValue="Military Status"
                    SelectProps={{
                      value: Status,
                      displayEmpty: true,
                      onChange: handleStatusChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Military Status")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("Done")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("Not Done")}`}</MenuItem>
                </TextField>

              <TextField
                    select
                    fullWidth
                    defaultValue="Marital Status"
                    SelectProps={{
                      value: Marital,
                      displayEmpty: true,
                      onChange: handleMaritalChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Marital Status")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                </TextField>
          </Stack>
        </CardContent>
    </Card>

  )
}
