import React from 'react'
import { Button, Card, CardContent, List, ListItem, TextField, Typography, Box, Stack } from '@mui/material';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';
import { useTranslation } from 'react-i18next';

export default function EmergencyContact({ onDataChange, Controller, control , errors }) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };


  const {t} = useTranslation()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "emergency_contact"
  });

  const handleAddClick = () => {
    append('emergency_contact', { address: '', name: '', phonenumber: '',email:'' });
  };

  const handleRemoveClick = (index) => {
    remove(index);
  };


  return (
    <Card >
      <CardContent sx={{padding:"0px !important",}}>
        <Stack direction={"row"} sx={{padding:"0px"}} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Typography sx={{marginLeft:"30px",marginTop:"9px",fontWeight:"600",fontSize:"20px",color:"#8090a7"}} >{t("Emergency Contact")}</Typography>
          </Box>
          <Box>
          <Typography sx={{marginRight:"30px",marginTop:"9px",fontWeight:"600",fontSize:"16px",color:"#6ab2df",cursor:"pointer"}} onClick={handleAddClick}>+ {t("add")}</Typography>

          </Box>
        </Stack>
        <List  sx={{lineHeight:"50px",margin:"0px 20px"}}>

          {fields.map((field, index) => ( <>
          <Typography sx={{textAlign:"end",marginRight:"10px",cursor:"pointer"}}>

             <CloseIcon sx={{ color:"#8090A7",'&:hover': { color: 'red' }}} onClick={() => handleRemoveClick(index)} />

          </Typography>
          <Typography sx={{fontWeight:"500",fontSize:"16px",color:"#8090a7",marginBottom:"7px"}}>
          {t("Contact")} {index + 1}
          </Typography>
          <Box sx={{width:"100%"}} key={index}>

              <Controller
                name={`emergency_contact[${index}].address`}
                control={control}
                defaultValue={field.address}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("Address")}
                    variant="outlined"
                    fullWidth
                    size="small"

                    />
                )}
              />
          </Box>
          <Box sx={{width:"100%"}} key={index}>
              <Controller
                name={`emergency_contact[${index}].name`}
                control={control}
                defaultValue={field.name}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("Name")}
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergency_contact?.[index]?.name)}
                    {...(errors?.emergency_contact?.[index]?.name && { helperText: errors?.emergency_contact?.[index]?.name.message })}

                  />
                )}
              />
          </Box>
          <Box sx={{width:"100%"}} key={index}>
              <Controller
                name={`emergency_contact[${index}].phonenumber`}
                control={control}
                defaultValue={field.phonenumber}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("Phone Number")}
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergency_contact?.[index]?.phonenumber)}
                    {...(errors?.emergency_contact?.[index]?.phonenumber && { helperText: errors?.emergency_contact?.[index]?.phonenumber.message })}

                  />
                )}
              />
           </Box>
          <Box sx={{width:"100%"}} key={index}>
              <Controller
                name={`emergency_contact[${index + 1}].email`}
                control={control}
                defaultValue={field.email}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label={t("Email")}
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergency_contact?.[index]?.email)}
                    {...(errors?.emergency_contact?.[index]?.email && { helperText: errors?.emergency_contact?.[index]?.email.message })}
                  />
                )}
              />
           </Box>



                        </>

          ))}

        </List>
      </CardContent>
    </Card>
  );
}
