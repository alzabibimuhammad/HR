import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function Info({onDataChange,Controller,control,errors, defaultValues,ShowUser}) {
    const {t} = useTranslation()

  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };
  const [Status, setStatus] = useState(ShowUser?.data?.data[0]?.user_info?.military_situation||"Exempt");
  const [Marital, setMarital] = useState(ShowUser?.data?.data[0]?.user_info?.social_situation||"");
  const [Gender, setGender] = useState(ShowUser?.data?.data[0]?.user_info?.gender||"");

  const date = new Date();

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    handleFieldChange('militaryStatus',e.target.value)
  };

  const handleMaritalChange = (e) => {
    setMarital(e.target.value);
    handleFieldChange('maritalStatus',e.target.value)
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    handleFieldChange('gender',e.target.value)
  };


  const SvgDate = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M14.1667 2.5L14.1667 5.83333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M5.83325 2.5L5.83325 5.83333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M2.5 9C2.5 7.11438 2.5 6.17157 3.08579 5.58579C3.67157 5 4.61438 5 6.5 5H13.5C15.3856 5 16.3284 5 16.9142 5.58579C17.5 6.17157 17.5 7.11438 17.5 9V9.16667H2.5V9Z" stroke="#8090A7" stroke-width="1.2"/>
      <rect x="2.5" y="5" width="15" height="12.5" rx="2" stroke="#8090A7" stroke-width="1.2"/>
      <path d="M5 12.5H8.33333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M11.6667 12.5H15.0001" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M5 15H8.33333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M11.6667 15H15.0001" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
    </svg>
      `;

      const SvgID = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M15.9992 4.56445H3.99916C3.14138 4.56445 2.4436 5.26223 2.4436 6.12001V13.4358C2.4436 14.2933 3.14138 14.9913 3.99916 14.9913H15.9992C16.8567 14.9913 17.5547 14.2933 17.5547 13.4358V6.12001C17.5547 5.26223 16.8567 4.56445 15.9992 4.56445ZM16.6658 13.4358C16.6658 13.8033 16.3667 14.1025 15.9992 14.1025H3.99916C3.6316 14.1025 3.33249 13.8033 3.33249 13.4358V6.12001C3.33249 5.75245 3.6316 5.45334 3.99916 5.45334H15.9992C16.3667 5.45334 16.6658 5.75245 16.6658 6.12001V13.4358Z" fill="#8090A7"/>
        <path d="M8.18177 7.09863H5.07555C4.83021 7.09863 4.6311 7.29774 4.6311 7.54308V12.0126C4.6311 12.258 4.83021 12.4571 5.07555 12.4571H8.18199C8.42733 12.4571 8.62644 12.258 8.62644 12.0126V7.54308C8.62621 7.29752 8.42733 7.09863 8.18177 7.09863ZM7.73733 11.5682H5.51977V7.98752H7.73733V11.5682Z" fill="#8090A7"/>
        <path d="M14.9683 7.09863H10.2601C10.0148 7.09863 9.81567 7.29774 9.81567 7.54308C9.81567 7.78841 10.0148 7.98752 10.2601 7.98752H14.9686C15.2139 7.98752 15.413 7.78841 15.413 7.54308C15.413 7.29774 15.2139 7.09863 14.9683 7.09863Z" fill="#8090A7"/>
        <path d="M14.9683 9.33301H10.2601C10.0148 9.33301 9.81567 9.53212 9.81567 9.77745C9.81567 10.0228 10.0148 10.2219 10.2601 10.2219H14.9686C15.2139 10.2219 15.413 10.023 15.413 9.77745C15.413 9.5319 15.2139 9.33301 14.9683 9.33301Z" fill="#8090A7"/>
        <path d="M13.1115 11.5684H10.2601C10.0148 11.5684 9.81567 11.7675 9.81567 12.0128C9.81567 12.2581 10.0148 12.4572 10.2601 12.4572H13.1115C13.3568 12.4572 13.5559 12.2581 13.5559 12.0128C13.5559 11.7675 13.3568 11.5684 13.1115 11.5684Z" fill="#8090A7"/>
      </svg>`;

      const SvgMilt = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M7.923 8.04614L7.52625 10.4255C7.51759 10.4774 7.52323 10.5308 7.54253 10.5796C7.56183 10.6284 7.59402 10.6707 7.63547 10.7017C7.67691 10.7326 7.72596 10.751 7.77705 10.7548C7.82815 10.7586 7.87926 10.7477 7.92461 10.7231L10.0026 9.59967L12.0806 10.7231C12.1259 10.7477 12.1771 10.7586 12.2282 10.7548C12.2793 10.7511 12.3283 10.7326 12.3697 10.7017C12.4112 10.6707 12.4434 10.6284 12.4627 10.5796C12.482 10.5308 12.4876 10.4774 12.4789 10.4255L12.0822 8.04614L13.7631 6.36105C13.7998 6.32427 13.8258 6.27767 13.838 6.22652C13.8503 6.17537 13.8484 6.1217 13.8326 6.07159C13.8168 6.02148 13.7876 5.97693 13.7485 5.94296C13.7093 5.90899 13.6617 5.88697 13.611 5.87939L11.2877 5.53217L10.2487 3.36744C10.226 3.32018 10.1909 3.28037 10.1474 3.25254C10.1039 3.22471 10.0537 3.20996 10.0024 3.20996C9.95121 3.20996 9.90099 3.22471 9.85747 3.25254C9.81396 3.28037 9.77889 3.32018 9.75624 3.36744L8.71726 5.5322L6.39402 5.87942C6.34332 5.887 6.29569 5.90901 6.25652 5.94297C6.21735 5.97694 6.1882 6.02149 6.17237 6.0716C6.15654 6.12171 6.15466 6.17538 6.16694 6.22653C6.17923 6.27768 6.20518 6.32427 6.24188 6.36105L7.923 8.04614ZM8.93905 6.06967C8.98311 6.06308 9.02495 6.04557 9.06096 6.01864C9.09697 5.99172 9.12607 5.95619 9.14575 5.91513L10.0025 4.13014L10.8592 5.91513C10.8789 5.95619 10.908 5.99172 10.944 6.01864C10.98 6.04556 11.0219 6.06308 11.0659 6.06967L12.9815 6.35598L11.5954 7.74533C11.5635 7.7773 11.5397 7.81675 11.5259 7.86029C11.5121 7.90383 11.5089 7.95015 11.5164 7.99528L11.8436 9.95708L10.1302 9.03075C10.0908 9.00947 10.047 8.99834 10.0025 8.99834C9.95797 8.99834 9.91413 9.00947 9.87473 9.03075L8.16136 9.95711L8.48858 7.99531C8.49609 7.95018 8.49282 7.90386 8.47907 7.86032C8.46532 7.81679 8.44149 7.77733 8.40963 7.74536L7.02345 6.35598L8.93905 6.06967Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
        <path d="M14.8282 10.7365C14.7924 10.7103 14.751 10.6935 14.7075 10.6873C14.664 10.681 14.6197 10.6857 14.5783 10.7008L10.0025 12.3614L5.42659 10.7008C5.38519 10.6857 5.34089 10.6811 5.29741 10.6874C5.25393 10.6936 5.21254 10.7104 5.1767 10.7365C5.14087 10.7626 5.11164 10.7971 5.09147 10.8372C5.0713 10.8773 5.06078 10.9218 5.06079 10.967V12.6608C5.06079 12.7192 5.07841 12.7762 5.11121 12.8239C5.14402 12.8716 5.19041 12.9076 5.24397 12.927L9.91113 14.6209C9.97024 14.6424 10.0347 14.6424 10.0938 14.6209L14.761 12.927C14.8145 12.9076 14.8609 12.8716 14.8937 12.8239C14.9266 12.7762 14.9442 12.7192 14.9442 12.6608V10.967C14.9442 10.9218 14.9336 10.8773 14.9135 10.8372C14.8933 10.7971 14.8641 10.7625 14.8282 10.7365ZM14.3951 12.461L10.0025 14.0553L5.60985 12.461V11.366L9.91113 12.927C9.97023 12.9485 10.0347 12.9485 10.0938 12.927L14.3951 11.366V12.461Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
        <path d="M14.8282 14.1251C14.7924 14.099 14.751 14.0821 14.7075 14.0759C14.664 14.0697 14.6197 14.0743 14.5783 14.0894L10.0025 15.75L5.42659 14.0893C5.38519 14.0743 5.34089 14.0697 5.29741 14.0759C5.25393 14.0822 5.21254 14.099 5.1767 14.1251C5.14087 14.1512 5.11164 14.1857 5.09147 14.2258C5.0713 14.2659 5.06078 14.3104 5.06079 14.3555V16.0493C5.06079 16.1077 5.07841 16.1647 5.11122 16.2124C5.14403 16.2601 5.19041 16.2961 5.24397 16.3155L9.91113 18.0094C9.97024 18.0309 10.0347 18.0309 10.0938 18.0094L14.761 16.3155C14.8145 16.2961 14.8609 16.2601 14.8937 16.2124C14.9265 16.1647 14.9442 16.1077 14.9442 16.0493V14.3555C14.9442 14.3104 14.9336 14.2659 14.9134 14.2258C14.8933 14.1857 14.864 14.1512 14.8282 14.1251ZM14.3951 15.8497L10.0025 17.444L5.60985 15.8497V14.7546L9.91113 16.3155C9.97024 16.337 10.0347 16.337 10.0938 16.3155L14.3951 14.7545V15.8497Z" fill="#8090A7" stroke="#8090A7" stroke-width="0.3"/>
      </svg>`;

  return (
    <Card>
        <CardContent>

          <Typography className='title-section'>{t("Personal Info")}</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
          <Controller
            name={`birth_date`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={Boolean(errors?.birth_date)}
                {...(errors?.birth_date && { helperText: errors?.birth_date.message })}
                size='small'
                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgDate)}`}/>
                      </Box>
                      <Box>
                        {t('Birth Date')} {formattedDate}
                    </Box>
                  </Stack>
                }
              />
              )}
            />

            <Controller
            name={`nationalID`}
            control={control}
            defaultValue={Status}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth

                error={Boolean(errors.nationalID)}
                {...(errors.nationalID && { helperText: errors.nationalID.message })}
                size='small'
                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgID)}`}/>
                      </Box>
                      <Box>
                        {t('ID Number')}
                    </Box>
                  </Stack>
                }
                />
                )}
              />
            <Controller
            name={`health_status`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                error={Boolean(errors.health_status)}
                {...(errors?.health_status && { helperText: errors?.health_status?.message })}
                size='small'
                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgID)}`}/>
                      </Box>
                      <Box>
                        {t('Health Status')}
                    </Box>
                  </Stack>
                }
                />
                )}
              />

            <Controller
            name={`gender`}
            control={control}

            render={({ field }) => (
              <TextField

              {...field}
              select
              fullWidth

              value={Gender}
              error={Boolean(errors.gender)}
              {...(errors.gender && { helperText: errors.gender.message })}
              SelectProps={{

                displayEmpty: true,
                onChange: (e) => {
                  field.onChange(e);
                  handleGenderChange(e);
                },
              }}
              size='small'
                  >
                    <MenuItem value=''>{`${t("Gender")}`}</MenuItem>
                    <MenuItem value='Male'>{`${t("Male")}`}</MenuItem>
                    <MenuItem value='Female'>{`${t("Female")}`}</MenuItem>
                </TextField>
  )}
/>
            <Controller
            name={`military_situation`}
            control={control}
            render={({ field }) => (
              <TextField
              {...field}
              select
              fullWidth
              value={Status}

              error={Boolean(errors.military_situation)}
              {...(errors.military_situation && { helperText: errors.military_situation.message })}
              SelectProps={{
                displayEmpty: true,
                onChange: (e) => {
                  field.onChange(e);  // Ensure field.onChange is called
                  handleStatusChange(e);
                },
              }}
              size='small'
                  >
                    <MenuItem value=''>{`${t("Military Status")}`}</MenuItem>
                    <MenuItem value='Finished'>{`${t("Finished")}`}</MenuItem>
                    <MenuItem value='Postponed'>{`${t("Postponed")}`}</MenuItem>
                    <MenuItem value='Exempt'>{`${t("Exempt")}`}</MenuItem>
                </TextField>
  )}
/>




            <Controller
            name={`social_situation`}
            control={control}
            render={({ field }) => (
              <TextField
              {...field}
              error={Boolean(errors.social_situation)}
              {...(errors.social_situation && { helperText: errors.social_situation.message })}
                    select
                    fullWidth
                    value={Marital}
                    SelectProps={{
                      displayEmpty: true,
                      onChange: (e) => {
                        field.onChange(e);
                        handleMaritalChange(e);
                      },
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("social_situation")}`}</MenuItem>
                    <MenuItem value='Single'>{`${t("Single")}`}</MenuItem>
                    <MenuItem value='Married'>{`${t("Married")}`}</MenuItem>
                </TextField>
                  )}
                  />
          </Stack>
        </CardContent>
    </Card>

  )
}
