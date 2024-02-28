import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import { useTranslation } from 'react-i18next';

export default function Snapshot({onDataChange,Controller,control,defaultValues,errors,setProfileImage,ShowUser}) {

  const [image, setImage] = useState(null);
const[fileName,setFileName]=useState(null)
const {t} = useTranslation()

  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };






  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setFileName(event.target.files[0].name)
        setProfileImage(event.target.files[0])
        handleFieldChange('image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.8334 6.66634C12.8334 8.23115 11.5649 9.49967 10.0001 9.49967C8.43527 9.49967 7.16675 8.23115 7.16675 6.66634C7.16675 5.10153 8.43527 3.83301 10.0001 3.83301C11.5649 3.83301 12.8334 5.10153 12.8334 6.66634Z" stroke="#8090A7" stroke-linecap="round"/>
    <path d="M3.89557 14.7476C4.35607 12.3614 6.8314 11.25 9.26167 11.25H10.7383C13.1686 11.25 15.6439 12.3614 16.1044 14.7476C16.1361 14.9116 16.1634 15.08 16.1856 15.2523C16.256 15.8001 15.8023 16.25 15.25 16.25H4.75C4.19771 16.25 3.74395 15.8001 3.81441 15.2523C3.83657 15.08 3.86392 14.9116 3.89557 14.7476Z" stroke="#8090A7" stroke-linecap="round"/>
  </svg>
`;

  return (
    <Card>
        <CardContent>

          <Typography >{t("Snapshot")}</Typography>
          <br/>
          <Stack direction={'row'} alignItems={"center"} spacing={3} >
          <Box>
      <label htmlFor="imageInput">
        <Avatar
          sx={{ width: '120px', height: '120px', borderRadius: '5px' }}
          src={image ||process.env.NEXT_PUBLIC_IMAGES +'/'+ShowUser?.data?.data[0]?.user_info?.image ||"/broken-image.jpg"}
        />
      </label>

      <Controller
        name={`image`}
        control={control}
        defaultValues={defaultValues?.image}
        render={({ field }) => (
            <TextField
            {...field}
        id="imageInput"
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}

      />
        )}
        />
    </Box>

          <Stack direction={'column'} spacing={3} width={'100%'} >
          <Controller
        name={`first_name`}
        defaultValue=''
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              fullWidth
              error={Boolean(errors.first_name)}
                        {...(errors.first_name && { helperText: errors.first_name.message })}
              size='small'
              label={
                <Stack direction={'row'} spacing={2} >
                  <Box>
                  <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                    </Box>
                    <Box>
                      {t('First Name')}
                  </Box>
                </Stack>
              }
            />
        )}
/>


        <Controller
        name={`middle_name`}
        control={control}
        defaultValue=''
        render={({ field }) => (
            <TextField
            {...field}
                fullWidth
                error={Boolean(errors.middle_name)}
                {...(errors.middle_name && { helperText: errors.middle_name?.message })}
                size='small'

                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                      </Box>
                      <Box>
                        {t('Midle Name')}
                    </Box>
                  </Stack>
                }
              />
  )}
  />





             <Controller
             name={`last_name`}
             control={control}
             defaultValue=''
             render={({ field }) => (
            <TextField
            {...field}
            size='small'
            fullWidth
            error={Boolean(errors.last_name)}
            {...(errors.last_name && { helperText: errors.last_name?.message })}
            label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                      </Box>
                      <Box>
                        {t('Last Name')}
                    </Box>
                  </Stack>
                }
                />
             ) }
              />

          </Stack>
          </Stack>
        </CardContent>
    </Card>

  )
}
