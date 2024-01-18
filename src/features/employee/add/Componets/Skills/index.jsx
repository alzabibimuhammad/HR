import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'

export default function Skills() {
  const [degree, setDegree] = useState('');

  const handleDegreeChange = (e) => {
    setDegree(e.target.value);
  };
  return (
    <Card>
        <CardContent>

          <Typography >Skills & Career</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <Typography>Education</Typography>
              <TextField
                    select
                    fullWidth
                    defaultValue="Degree"
                    SelectProps={{
                      value: degree,
                      displayEmpty: true,
                      onChange: handleDegreeChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Degree")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                </TextField>
              <TextField
                fullWidth
                size='small'
                required
                placeholder='Study'
              />
              <Typography>Certificate</Typography>
              <TextField
                fullWidth
                size='small'
                required
                placeholder='Certificate'
              />
              <Typography>Experience</Typography>
              <TextField
                fullWidth
                size='small'
                required
                placeholder='Experience'
              />
              <Typography>Skills</Typography>
              <Stack direction={'row'}>
                <TextField
                  fullWidth
                  size='small'
                  required
                  placeholder='Skills'
                />
                <Box marginTop={'1%'} >

                <Rating name="read-only" value={2}  />
                </Box>
              </Stack>


              <Typography>Languages</Typography>
              <Stack direction={'row'}>
                <TextField
                  fullWidth
                  size='small'
                  required
                  placeholder='Languagess'
                />
                <Box marginTop={'1%'} >
                <Rating name="read-only" value={2}  />
                </Box>
              </Stack>

          </Stack>
        </CardContent>
    </Card>

  )
}
