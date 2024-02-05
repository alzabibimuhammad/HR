import React from 'react'
import { Button, Card, CardContent, List, ListItem, TextField, Typography, Box, Stack } from '@mui/material';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';

export default function EmergencyContact({ onDataChange, Controller, control , errors }) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };



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
            <Typography sx={{marginLeft:"30px",marginTop:"9px",fontWeight:"600",fontSize:"20px",color:"#8090a7"}} >Emergency Contact</Typography>
          </Box>
          <Box>
          <Typography sx={{marginRight:"30px",marginTop:"9px",fontWeight:"600",fontSize:"16px",color:"#6ab2df",cursor:"pointer"}} onClick={handleAddClick}>+ add</Typography>

          </Box>
        </Stack>
        <List  sx={{lineHeight:"50px",margin:"0px 20px"}}>

          {fields.map((field, index) => ( <>
          <Typography sx={{textAlign:"end",marginRight:"10px",cursor:"pointer"}}>

             <CloseIcon sx={{ color:"#8090A7",'&:hover': { color: 'red' }}} onClick={() => handleRemoveClick(index)} />

          </Typography>
          <Typography sx={{fontWeight:"500",fontSize:"16px",color:"#8090a7",marginBottom:"7px"}}>
            Contacts {index + 1}
          </Typography>
          <Box sx={{width:"100%"}} key={index}>

              <Controller
                name={`emergency_contact[${index}].address`}
                control={control}
                defaultValue={field.address}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Address"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergencycontact?.[index]?.address)}
                    {...(errors?.emergencycontact?.[index]?.address && { helperText: errors?.emergencycontact?.[index]?.address.message })}
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
                    label="Name"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergencycontact?.[index]?.name)}
                    {...(errors?.emergencycontact?.[index]?.name && { helperText: errors?.emergencycontact?.[index]?.name.message })}

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
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergencycontact?.[index]?.phonenumber)}
                    {...(errors?.emergencycontact?.[index]?.phonenumber && { helperText: errors?.emergencycontact?.[index]?.phonenumber.message })}
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
                    label="Email"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.emergencycontact?.[index]?.email)}
                    {...(errors?.emergencycontact?.[index]?.email && { helperText: errors?.emergencycontact?.[index]?.email.message })}
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
