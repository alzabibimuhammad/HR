import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { t } from 'i18next';
import React, { useState } from 'react'

export default function Professional({onDataChange}) {
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };
  const [role, setRole] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [team, setTeam] = useState('');

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    handleFieldChange('role',e.target.value)
  };

  const handleSpecializationChange = (e) => {
    setSpecialization(e.target.value);
    handleFieldChange('specialization',e.target.value)

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
              <Typography>Specialization</Typography>
              <TextField
                    select
                    fullWidth
                    defaultValue="work specialization"
                    SelectProps={{
                      value: specialization,
                      displayEmpty: true,
                      onChange: handleSpecializationChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("work specialization")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                </TextField>
              <Typography>Role</Typography>

              <TextField
                    select
                    fullWidth
                    defaultValue="Role"
                    SelectProps={{
                      value: role,
                      displayEmpty: true,
                      onChange: handleRoleChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Role")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                </TextField>

              <Typography>Team/Department</Typography>
              <TextField
                    select
                    fullWidth
                    defaultValue="Team"
                    SelectProps={{
                      value: team,
                      displayEmpty: true,
                      onChange: handleteamChange,
                    }}
                    size='small'
                  >
                    <MenuItem value=''>{`${t("Team")}`}</MenuItem>
                    <MenuItem value='admin'>{`${t("admin")}`}</MenuItem>
                    <MenuItem value='customer'>{`${t("customer")}`}</MenuItem>
                    <MenuItem value='employee'>{`${t("employee")}`}</MenuItem>
                </TextField>

          </Stack>
        </CardContent>
    </Card>

  )
}
