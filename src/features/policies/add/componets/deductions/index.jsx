import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useTranslation } from 'react-i18next';
import Switch from '@mui/material/Switch';

export default function Deductions({Controller,control}) {
  const [selectedOption, setSelectedOption] = useState('');

  const {t} = useTranslation()

  const [Show  ,setShow] = useState(false)


  const handleShow = () => {
    setShow(!Show);
  };

  console.log(Show);

  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  return (
    <Card sx={{borderRadius: "12px"}}>
    <CardContent>
      <Stack direction={'column'} spacing={2}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
        <Box>
        <Typography sx={{fontWeight:"600",color:"#8090a7"}} fontSize={'20px'}>{t('Deductions')}</Typography>
          </Box>

          <Box>

        <Switch  {...label} onClick={handleShow}  />
          </Box>
        </Stack>



        {Show ?


        <Controller
  name="deduction_status"
  control={control}
  render={({ field }) => (
    <RadioGroup
      name="deduction_status"
      value={selectedOption}
      onChange={(e) => {
        field.onChange(e.target.value === 'true');
        setSelectedOption(e.target.value);
      }}

    >
      <FormControlLabel
        control={<Radio />}
        value="true"
        label={t('Request for Approval')}
        sx={{
          padding: '0px !important',
          fontSize: '14px',
          fontWeight: '600',
          '& .MuiFormControlLabel-label': {
            color: '#6ab2df',
          },
          '& .Mui-checked .MuiFormControlLabel-label': {
            color: '#ff0000',
          },
        }}
      />
      <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#3f4458' }}>
        {t(
          'By choosing this option, the system will generate a deduction request for specific cases. Admin approval is required before the deduction is applied. Ideal for situations that may require review or exceptions.'
        )}
      </Typography>

      <FormControlLabel
        control={<Radio />}
        value="false"
        label={t('Automatic Deduction')}
        sx={{
          padding: '0px !important',
          fontSize: '14px',
          fontWeight: '600',
          '& .MuiFormControlLabel-label': {
            color: '#6ab2df',
          },
          '& .Mui-checked .MuiFormControlLabel-label': {
            color: '#ff0000',
          },
        }}
      />
      <Typography sx={{ fontSize: '12px', fontWeight: '400', color: '#3f4458' }}>
        {t(
          'Selecting this option will enable automatic deduction of salary for specified cases, such as late arrivals. The system will apply deductions without requiring manual approval.'
        )}
      </Typography>
    </RadioGroup>
  )}
/>
    :""  }



      </Stack>
    </CardContent>
  </Card>
  );
}
