import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Reviews() {
  const {t} = useTranslation()
  return (
    <Card>
      <CardContent>
        <Typography fontSize={'20px'}>{t("Reviews")}</Typography>
        <Stack spacing={2} >
        <Typography style={{ marginTop:'24px' }} fontSize={'14px'}>{t("Review criteria")}</Typography>
        <TextField
          fullWidth
          size='small'
          placeholder={t('Overall')}
        />
        </Stack>
      </CardContent>
    </Card>
  )
}
