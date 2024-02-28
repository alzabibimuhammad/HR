import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { t } from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useSelectBranch from 'src/pages/employees/add/hook/useSelectBranch'
import useSelectInput from 'src/pages/employees/add/hook/useSelectInput'
import useSelectLevel from 'src/pages/employees/add/hook/useSelectLevel'

export default function Professional({ onDataChange, Controller, control,errors, ShowUser }) {
  console.log("🚀 ~ Professional ~ ShowUser:", ShowUser?.data?.data[0]?.branch_id)
  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }))
  }
  const [role, setRole] = useState(ShowUser?.data?.data?.[0]?.level)
  const [specialization, setSpecialization] = useState('')
  const [team, setTeam] = useState('')
  const { t } = useTranslation()
  const { data } = useSelectInput()

   const {data:LevelData}=useSelectLevel()

  const { data: SelectBranch } = useSelectBranch()

  const handleRoleChange = e => {
    setRole(e.target.value)
    handleFieldChange('role', e.target.value)
  }

  const handleSpecializationChange = e => {
    setSpecialization(e.target.value)
    handleFieldChange('specialization', e.target.value)
  }

  const handleSelectBranchChange = e => {
    setSpecialization(e.target.value)
    handleFieldChange('SelectBranch', e.target.value)
  }

  const handleteamChange = e => {
    setTeam(e.target.value)
    handleFieldChange('team', e.target.value)
  }

  return (
    <Card>
      <CardContent>
        <Typography>{t('Professional')}</Typography>
        <br />

        <Stack direction={'column'} spacing={3} width={'100%'}>
          <Typography>{t('Branch')}</Typography>

          <Controller
            name='branch_id'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                error={Boolean(errors?.branch_id)}
                helperText={errors?.branch_id?.message}
                defaultValue=''
                value={ShowUser?.data?.data[0]?.branch_id?ShowUser?.data?.data[0]?.branch_id:field.value} 
                SelectProps={{
                
                  displayEmpty: true,
                  onChange: e => {
                    field.onChange(e)
                    handleSelectBranchChange(e)
                  }
                }}
                size='small'
              >
                <MenuItem value='' >{`${t('Branch')}`}</MenuItem>

                {SelectBranch?.data?.data?.map((val, index) => (
                  <MenuItem key={val.id} value={val.id}>
                    {val.name}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Typography>{t("Specialization")}</Typography>

          <Controller
            name='specialization'
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                error={Boolean(errors?.specialization)}
                {...(errors?.specialization && {
                  helperText: errors?.specialization?.message
                })}
                defaultValue=''
                SelectProps={{
                  value: field.value,
                  displayEmpty: true,
                  onChange: e => {
                    field.onChange(e)
                    handleSpecializationChange(e)
                  }
                }}
                size='small'
              >
                <MenuItem value='' >
                {t("work specialization")}
                </MenuItem>

                {data?.data?.data?.specialisation?.map((val, index) => (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Typography>{t("Level")}</Typography>

          <Controller
            name={`level`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                value={role}
                error={Boolean(errors?.level)}
                helperText={errors?.level?.message}
                defaultValue='Level'
                SelectProps={{
                  displayEmpty: true,
                  onChange: e => {
                    field.onChange(e)
                    handleRoleChange(e)
                  }
                }}
                size='small'
              >
                <MenuItem value='Level'>{`${t('Level')}`}</MenuItem>
                {LevelData?.data?.data?.levels?.map((val, index) => (
                  <MenuItem key={index} value={val}>
                    {val}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />

          <Typography>{t("Team/Department")}</Typography>

          <Controller
            name={`department_id`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                select
                fullWidth
                error={Boolean(errors?.department_id)}
                helperText={errors?.department_id?.message}
                defaultValue='Team'
                SelectProps={{
                  value: field.value,
                  displayEmpty: true,
                  onChange: e => {
                    field.onChange(e)
                    handleteamChange(e)
                  }
                }}
                size='small'
              >
                <MenuItem value='Team'>{`${t('Team')}`}</MenuItem>
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
