import { CheckBox } from '@mui/icons-material'
import { Card, CardContent, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import styled from 'styled-components'
import {  List } from '@mui/material';
import Divider from '@mui/material/Divider';

import CloseIcon from '@mui/icons-material/Close';
import { useFieldArray } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export default function Annual({Controller,control,errors}) {
  const [noteAdded, setNoteAdded] = useState(false);

  const {t} = useTranslation()
  const Typo = styled(Typography)(({ theme }) => ({
  
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontWeight: 500,
    letterSpacing: 0.7,
    color:'#8090A7'
        }))
        const TittleSection = styled(Typography)(({ theme }) => ({
      
          fontFamily: "Montserrat",
          fontSize: "20px",
          fontWeight: 600,
         
          color:'#8090A7'
              }))
    

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };


    const { fields, append, remove } = useFieldArray({
      control,
      name: 'annual_salary_increase.notes',
    });

    const handleAddClick = () => {
      append({ });
      setNoteAdded(true);
    };

    const handleRemoveClick = (index) => {
      remove(index);
      setNoteAdded(false);

    };

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
        <TittleSection fontSize={'20px'} >{t("Annual Salary Increase")}</TittleSection>


        <Typo style={{ marginTop:'24px' }}>{t("Annual percentage increase")}</Typo>
    <Stack>

        <Controller
        name={`annual_salary_increase.annual_salary_percentage`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
            error={Boolean(errors?.annual_salary_increase?.annual_salary_percentage)}
            helperText={errors?.annual_salary_increase?.annual_salary_percentage?.message}
          size='small'
          InputProps={{
            endAdornment: (
                <Box marginLeft={'70%'}>
                  <Typography>
                    %
                  </Typography>
                </Box>
            ),
          }}
        />
         )}
         />
         <Box sx={{width:"100%",display:"flex",marginTop:'12px'}}>
    <Controller
      name={`annual_salary_increase.allow_advance_request`}
      control={control}
        render={({ field }) => (
      <input
      {...field}
          type='checkbox'
       />


  )}
       />
        <Typo sx={{marginX:'2px'}}>{t("Allow advance requests")}</Typo>
         </Box>
    </Stack>





    <List  sx={{lineHeight:"50px",margin:"0px 20px"}}>
    <Divider />

  <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} width={"106%"}>

<Typography sx={{fontWeight:"600",fontSize:"16px",color:"#8090a7"}} >{t("Notes")}</Typography>


{!noteAdded && (
      <Typography sx={{marginRight:"30px",marginTop:"9px",fontWeight:"600",fontSize:"16px",color:"#6ab2df",cursor:"pointer"}} onClick={handleAddClick}>+ {t("add")}</Typography>

      )}

  </Stack>

{fields.map((field, index) => ( <>
<Typography sx={{textAlign:"end",marginRight:"10px",cursor:"pointer"}}>

   <CloseIcon sx={{ color:"#8090A7",'&:hover': { color: 'red' },marginTop:"14px"}} onClick={() => handleRemoveClick(index)} />

</Typography>

<Typography sx={{fontWeight:"500",fontSize:"16px",color:"#8090a7",marginBottom:"7px"}}>
{t("notes")} {index + 1}
</Typography>
<Box sx={{width:"100%"}} key={index}>

    <Controller
      name={`annual_salary_increase.notes`}
      control={control}
      defaultValue={field.notes}
      render={({ field }) => (
        <TextField
          {...field}
          label="notes"
          variant="outlined"
          fullWidth
          size="small"

        />
      )}
    />
</Box>


 </>

))}

</List>

      </Stack>
      </CardContent>
    </Card>
  )
}
