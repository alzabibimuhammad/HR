import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'
import useSelectBranch from 'src/pages/employees/add/hook/useSelectBranch';
import useSelectInput from 'src/pages/employees/add/hook/useSelectInput';

export default function Professional({onDataChange,Controller,control}) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };
  const [role, setRole] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [team, setTeam] = useState('');

  const {data}=useSelectInput()

  const {data:SelectBranch}=useSelectBranch()


  const handleRoleChange = (e) => {
    setRole(e.target.value);
    handleFieldChange('role',e.target.value)
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
    handleFieldChange('specialization',e.target.value)

  };

  const handleSelectBranchChange = (e) => {
    setSpecialization(e.target.value);
    handleFieldChange('SelectBranch',e.target.value)

  };

  const handleteamChange = (e) => {
    setTeam(e.target.value);
    handleFieldChange('team',e.target.value)
  };

  return (
    <Card>
        <CardContent>

          <Typography >Professional</Typography>
          <br/>





          <Stack direction={'column'} spacing={3} width={'100%'} >

          <Typography>Branch</Typography>

<Controller
name="branch_id"
control={control}
render={({ field }) => (
<TextField
{...field}
select
fullWidth
defaultValue={"Branch"}
SelectProps={{
value: field.value,
displayEmpty: true,
onChange: (e) => {
field.onChange(e);
handleSelectBranchChange(e);
},
}}
size='small'
>

<MenuItem  disabled={true}>{`${t("Branch")}`}</MenuItem>

{SelectBranch?.data?.data?.map((val, index) => {


     return <MenuItem key={val.id} value={val.id}>
{val.name}
</MenuItem>
     })}

</TextField>
)}
/>






              <Typography>Specialization</Typography>

              <Controller
  name="specialization"
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      select
      fullWidth
      defaultValue="work specialization"
      SelectProps={{
        value: field.value,
        displayEmpty: true,
        onChange: (e) => {
          field.onChange(e);
          handleSpecializationChange(e);
        },
      }}
      size='small'
    >
      <MenuItem value="" disabled>
        work specialization
      </MenuItem>
       <MenuItem value='work specialization'>{`${t("work specialization")}`}</MenuItem>

      {data?.data?.data?.specialisation?.map((val, index) => (
        <MenuItem key={index} value={val}>
          {val}
        </MenuItem>
      ))}
    </TextField>
  )}
/>



              <Typography>Level</Typography>

              <Controller
  name={`level`}
  control={control}
  render={({ field }) => (
    <TextField
      {...field}
      select
      fullWidth
      defaultValue="Level"
      SelectProps={{
        value: field.value,
        displayEmpty: true,
        onChange: (e) => {
          field.onChange(e);
          handleRoleChange(e);
        },
      }}
      size='small'
    >
             <MenuItem value='Level'>{`${t("Level")}`}</MenuItem>

      {data?.data?.data?.levels?.map((val, index) => (


        <MenuItem key={index} value={val}>
          {val}
        </MenuItem>
      ))}
    </TextField>
  )}
/>

              <Typography>Team/Department</Typography>

                <Controller
            name={`department_id`}
            control={control}
            render={({ field }) => (
              <TextField
              {...field}
                    select
                    fullWidth
                    defaultValue="Team"
                    SelectProps={{
                      value: field.value,
                      displayEmpty: true,
                      onChange: (e) => {
                        field.onChange(e);
                        handleteamChange(e);
                      },
                    }}
                    size='small'
                  >
                                 <MenuItem value='Team'>{`${t("Team")}`}</MenuItem>

         {data?.data?.data?.departments?.map((val, index) => (
          <MenuItem key={index} value={val.id}>
            {val.name}
          </MenuItem>
))}
                </TextField>
                  )}
                  />

          </Stack>
        </CardContent>
    </Card>

  )
}
