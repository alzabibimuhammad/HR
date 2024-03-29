import { Button, Card, CardContent, List, ListItem, TextField, Typography,InputAdornment } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useFieldArray, useForm } from 'react-hook-form'
import { styled, useTheme } from '@mui/material/styles'
import React, { useEffect, useState } from 'react'
import ListItemSelected from 'src/views/components/list/ListItemSelected'
import IconButton from 'src/@core/theme/overrides/icon-button'
import email from 'src/store/apps/email'
import { useTranslation } from 'react-i18next'
import { ContactSchema } from 'src/pages/employees/add/validation'
import CloseIcon from '@mui/icons-material/Close';

export default function Contact({ onDataChange, Controller, control, defaultValues, errors }) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }))
  }

  const { t } = useTranslation()

  const {
    fields: phoneNumbersfields,
    append: phoneNumbersappend,
    remove: phoneNumbersremove
  } = useFieldArray({
    control,
    name: 'contacts.phonenumbers'
  })


  const {
    fields: EmailFields,
    append: EmailAppend,
    remove: EmailRemove
  } = useFieldArray({
    control,
    name: 'contacts.emails',

  })

  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      color: '#8090A7'
    },
    '& label': {
      color: '#8090A7s'
    }
  })




  const SvgMail = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="3.33325" y="5" width="13.3333" height="10" rx="2" stroke="#8090A7"/>
    <path d="M3.33325 7.5L9.10549 10.3861C9.66855 10.6676 10.3313 10.6676 10.8943 10.3861L16.6666 7.5" stroke="#8090A7"/>
  </svg>
  `

  const SvgAddress = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10.3996 16.4675L10.1664 16.0252H10.1664L10.3996 16.4675ZM9.60055 16.4675L9.83381 16.0252L9.83381 16.0252L9.60055 16.4675ZM15.3334 9.16634C15.3334 11.0418 14.3947 12.5751 13.2521 13.7477C12.1094 14.9202 10.8018 15.6901 10.1664 16.0252L10.6329 16.9097C11.3138 16.5506 12.7231 15.7233 13.9682 14.4456C15.2134 13.1679 16.3334 11.3978 16.3334 9.16634H15.3334ZM10.0001 3.83301C12.9456 3.83301 15.3334 6.22082 15.3334 9.16634H16.3334C16.3334 5.66854 13.4979 2.83301 10.0001 2.83301V3.83301ZM4.66675 9.16634C4.66675 6.22082 7.05456 3.83301 10.0001 3.83301V2.83301C6.50228 2.83301 3.66675 5.66854 3.66675 9.16634H4.66675ZM9.83381 16.0252C9.19838 15.6901 7.89073 14.9202 6.74809 13.7477C5.60542 12.5751 4.66675 11.0418 4.66675 9.16634H3.66675C3.66675 11.3978 4.78679 13.1679 6.03192 14.4456C7.27708 15.7233 8.68634 16.5506 9.36729 16.9097L9.83381 16.0252ZM10.1664 16.0252C10.0604 16.0811 9.93979 16.0811 9.83381 16.0252L9.36728 16.9097C9.76522 17.1196 10.2349 17.1196 10.6329 16.9097L10.1664 16.0252ZM12.0001 9.16634C12.0001 10.2709 11.1047 11.1663 10.0001 11.1663V12.1663C11.6569 12.1663 13.0001 10.8232 13.0001 9.16634H12.0001ZM10.0001 7.16634C11.1047 7.16634 12.0001 8.06177 12.0001 9.16634H13.0001C13.0001 7.50949 11.6569 6.16634 10.0001 6.16634V7.16634ZM8.00008 9.16634C8.00008 8.06177 8.89551 7.16634 10.0001 7.16634V6.16634C8.34323 6.16634 7.00008 7.50949 7.00008 9.16634H8.00008ZM10.0001 11.1663C8.89551 11.1663 8.00008 10.2709 8.00008 9.16634H7.00008C7.00008 10.8232 8.34323 12.1663 10.0001 12.1663V11.1663Z" fill="#8090A7"/>
    </svg>
    `

  const SvgPhone = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M16.5169 15.9087L14.9217 17.5039C13.4986 18.927 8.93628 17.0563 6.448 14.568C3.95949 12.0795 2.08882 7.51763 3.51209 6.09435L5.10733 4.49912C5.58368 4.02277 6.338 4.0627 6.76481 4.58437L8.88064 7.17048C9.28453 7.66414 9.24856 8.41171 8.79809 8.86218L7.79025 9.87002C7.66309 9.99719 7.6283 10.2608 7.71773 10.41C7.74509 10.462 7.76566 10.501 7.79922 10.5598C7.85789 10.6626 7.9305 10.7798 8.01751 10.9088C8.26907 11.2818 8.5838 11.6696 8.96512 12.0509C9.34641 12.4322 9.73472 12.7472 10.1084 12.9993C10.2377 13.0865 10.3553 13.1593 10.4584 13.2182C10.5175 13.2518 10.5566 13.2725 10.5731 13.2806C10.7562 13.3857 11.0205 13.3513 11.146 13.2258L12.1539 12.2179C12.6042 11.7676 13.3523 11.7318 13.8455 12.1354L16.4317 14.2512C16.9538 14.6785 16.9937 15.4319 16.5169 15.9087ZM7.1191 9.19887L8.12694 8.19103C8.23209 8.08587 8.2416 7.88832 8.14603 7.77151L6.03019 5.1854C5.95812 5.09731 5.85681 5.09195 5.77848 5.17027L4.18325 6.7655C3.29055 7.6582 4.9658 11.7435 7.11915 13.8969C9.27228 16.05 13.358 17.7253 14.2505 16.8328L15.8458 15.2376C15.9245 15.1588 15.9192 15.0583 15.8306 14.9858L13.2445 12.87C13.128 12.7747 12.9299 12.7842 12.825 12.8891L11.8172 13.8969C11.3913 14.3228 10.6657 14.4209 10.1413 14.1259C10.0197 14.0651 9.82534 13.9532 9.57772 13.7862C9.15547 13.5014 8.72015 13.1483 8.29396 12.7221C7.8678 12.2959 7.51494 11.8611 7.23064 11.4396C7.06511 11.1942 6.95386 11.0013 6.89293 10.8797C6.59091 10.3555 6.69139 9.62658 7.1191 9.19887Z" fill="#8090A7"/>
    </svg>
    `

  return (
    <Card>
      <CardContent>
        <Typography className='title-section'>{t('Contact')}</Typography>
        <br />

        <Stack sx={{ padding: '0' }}  direction={'column'} spacing={2} width={'100%'}>
          <Box  >
            <Box sx={{ margin: '5px 0px' }}>
              <Controller
                name={`address`}
                control={control}

                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t(`address`)}
                    variant='outlined'
                    fullWidth
                    size='small'
                    error={Boolean(errors.address)}
                    helperText={errors.address?.message}
                  />
                )}
              />
            </Box>
            {phoneNumbersfields.map((phoneNumber, index) => (
              <Box mt={5} key={phoneNumber.id}>

                <Controller

                  name={`contacts.phonenumbers.${index}.phone_num`}
                  control={control}
                  render={({ field }) => (
                    <TextField

                      {...field}
                      label={`${t('Phone Number')} ${index + 1}`}
                      variant='outlined'
                      fullWidth
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 500px'}} onClick={() => phoneNumbersremove(index)}/>}
                          </InputAdornment>
                        ),
                      }}

                      size='small'
                      error={Boolean(errors?.contacts?.phonenumbers?.[index]?.phone_num)}
                      {...(errors?.contacts?.phonenumbers?.[index]?.phone_num && {
                        helperText: errors?.contacts?.phonenumbers?.[index]?.phone_num?.message
                      })}

                      />
                  )}
                />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '10px' }}>
                  {index ==0?
                  <Button
                    type='button'
                    onClick={() => phoneNumbersappend({ phonenumber: '' })}
                    sx={{ fontSize: '12px', fontWeight: '400', color: '#6ab2df', padding: '0' }}
                  >
                    {t('Add phoneNumbers')}
                  </Button>
                    :
                    null
                  }
                </Box>

              </Box>
            ))}
          </Box>
          <Box>
            {EmailFields.map((Email, index) => (
              <Box key={Email.id} >
                <Controller
                  name={`contacts.emails.${index}.email`}

                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`${t('Email')} ${index + 1}`}
                      variant='outlined'
                      fullWidth
                      size='small'
                      error={Boolean(errors?.contacts?.emails?.[index]?.email)}
                      {...(errors?.contacts?.emails?.[index]?.email && {
                        helperText: errors?.contacts?.emails?.[index]?.email?.message
                      })}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            {index!=0&&<CloseIcon style={{ cursor:'pointer',color:'red' , padding: '1',margin: '0px 500px'}} onClick={() => EmailRemove(index)}/>}
                          </InputAdornment>
                        ),
                      }}
                    />
                  )}
                />
                <Box sx={{ my: '10px' }}>

                  {index==0?
                    <Button
                    type='button'
                    onClick={() => EmailAppend({ email: '' })}
                    sx={{ fontSize: '12px', fontWeight: '400', color: '#6ab2df', padding: '0' }}
                  >
                    {t('Add Email')}
                  </Button>
                  :
                  null
                  }
                </Box>
              </Box>
            ))}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  )
}
