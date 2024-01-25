import React from 'react'
import { Button, Card, CardContent, List, ListItem, TextField, Typography, Box, Stack } from '@mui/material';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { color } from '@mui/system';

export default function AdditionalFiles({ onDataChange, Controller, control , errors }) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalfiles"
  });

  const handleAddClick = () => {
    append('additionalfiles', { description: '', file: ''});
  };

  const handleRemoveClick = (index) => {
    remove(index);
  };

  const handleFileChange = (index, event) => {
    const file = event.target.files[0];

    onDataChange(file)
      const newAdditionalFiles = Array.isArray(prevData.additionalfiles) ? [...prevData.additionalfiles] : [];


  };


  return (
    <Card >
      <CardContent sx={{padding:"0px !important",}}>
        <Stack direction={"row"} sx={{padding:"0px"}} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            <Typography sx={{marginLeft:"30px",marginTop:"9px",fontWeight:"600",fontSize:"20px",color:"#8090a7"}} >Additional Files</Typography>
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
            File {index + 1}
          </Typography>
          <Box sx={{width:"100%"}} key={index}>

              <Controller
                name={`additionalfiles[${index}].description`}
                control={control}
                defaultValue={field.description}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Description"
                    variant="outlined"
                    fullWidth
                    size="small"
                    error={Boolean(errors?.additionalfiles?.[index]?.description)}
                    {...(errors?.additionalfiles?.[index]?.description && { helperText: errors?.additionalfiles?.[index]?.description.message })}
                  />
                )}
              />
          </Box>
          <Box sx={{width:"100%"}} key={index}>
              <Controller
                name={`additionalfiles[${index}].file`}
                control={control}
                defaultValue={field.file}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="File"
                    variant="outlined"
                    fullWidth
                    size="small"
                    type="file"
                    accept=".pdf"

                    // onChange={(event) => handleFileChange(index, event)}
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
