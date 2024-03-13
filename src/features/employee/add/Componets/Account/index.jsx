import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import {   MenuItem, } from '@mui/material'

export default function Account({onDataChange,Controller,control,errors,ShowUser}) {

  const {t} = useTranslation()


  const [Role, setRole] = useState('role');
  console.log("🚀 ~ Account ~ Role:", Role)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);




  const handleFieldChange = (field, value) => {
    onDataChange((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmVisibility = () => {
    setShowConfirm((prevShowPassword) => !prevShowPassword);
  };



  const handleRoleChange = (e) => {
    setRole(e.target.value);
    handleFieldChange('role',e.target.value)
  };

  const SvgMail = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <rect x="3.33325" y="5" width="13.3333" height="10" rx="2" stroke="#8090A7"/>
  <path d="M3.33325 7.5L9.10549 10.3861C9.66855 10.6676 10.3313 10.6676 10.8943 10.3861L16.6666 7.5" stroke="#8090A7"/>
  </svg>
  `;

  const SvgPassword = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M4.66602 11.2C4.66602 10.0799 4.66602 9.51984 4.884 9.09202C5.07575 8.71569 5.38171 8.40973 5.75803 8.21799C6.18586 8 6.74591 8 7.86602 8H12.1327C13.2528 8 13.8128 8 14.2407 8.21799C14.617 8.40973 14.9229 8.71569 15.1147 9.09202C15.3327 9.51984 15.3327 10.0799 15.3327 11.2V11.2C15.3327 12.8802 15.3327 13.7202 15.0057 14.362C14.7181 14.9265 14.2591 15.3854 13.6947 15.673C13.0529 16 12.2128 16 10.5327 16H9.46602C7.78586 16 6.94578 16 6.30404 15.673C5.73956 15.3854 5.28062 14.9265 4.993 14.362C4.66602 13.7202 4.66602 12.8802 4.66602 11.2V11.2Z" stroke="#8090A7"/>
  <path d="M12.6654 7.33333V6.66667C12.6654 5.19391 11.4715 4 9.9987 4V4C8.52594 4 7.33203 5.19391 7.33203 6.66667V7.33333" stroke="#8090A7" stroke-linecap="round"/>
  <circle cx="9.99935" cy="12.0003" r="1.33333" fill="#8090A7"/>
  </svg>
  `;

  return (
    <Card>
        <CardContent>

          <Typography className='title-section'>{t("Account")}</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >

          <Controller
            name={`email`}
            control={control}
            defaultValues=''
            render={({ field }) => (
              <TextField
              {...field}
              fullWidth
              type='email'
              size='small'
                error={Boolean(errors.email)}
      {...(errors.email && { helperText: errors.email.message })}
                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgMail)}`}/>
                      </Box>
                      <Box>
                        {t('Email')}
                    </Box>
                  </Stack>
                }
              />
  )}
/>





<Controller
  name={`password`}
  defaultValues=''
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      fullWidth
      size='small'
      type={showPassword ? 'text' : 'password'}
      error={Boolean(errors.password)}
      helperText={errors.password?.message}
      label={
        <Stack direction={'row'} spacing={2}>
          <Box>
            <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgPassword)}`} />
          </Box>
          <Box>
            {t('Password')}
          </Box>
        </Stack>
      }
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleTogglePasswordVisibility}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  )}
/>

            <Controller
            name={`confirm_password`}
            control={control}
            render={({ field }) => (
              <TextField
              {...field}
              fullWidth
              size="small"
              type={showConfirm ? 'text' : 'password'}

              error={Boolean(errors.confirm_password)}
              helperText={errors.confirm_password?.message}

              label={
                <Stack direction={'row'} spacing={2}>
                  <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgPassword)}`} />
                  </Box>
                  <Box>{t('Confirm Password')}</Box>
                </Stack>
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleToggleConfirmVisibility} edge="end">
                      {showConfirm ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            )}
            />

<Controller
  name="role"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      select
      fullWidth
      value={Role}
      SelectProps={{
        displayEmpty: true,
        onChange: (e) => {
          field.onChange(e);
          handleRoleChange(e);
        },
        renderValue: (selected) => {
          if (selected === 'role') {
            return <em>{t('role')}</em>;
          }

          return selected;
        },
      }}
      size="small"
      InputLabelProps={{ shrink: true }}
    >

      <MenuItem value="admin">{t('Admin')}</MenuItem>
      <MenuItem value="employee">{t('Employee')}</MenuItem>
    </TextField>
  )}
/>


          </Stack>
        </CardContent>
    </Card>

  )
}
