import { Card, CardContent, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useFieldArray } from 'react-hook-form';
import { Button} from '@mui/material'
import Box from '@mui/material/Box'
import CloseIcon from '@mui/icons-material/Close';

export default function Reviews({Controller,control,errors}) {
  const {t} = useTranslation()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'rate_type', // Name of the array field
  });


function appendInput() {
  append()
}

  useEffect(() => {
    appendInput()
  }, [])



  return (

    <Card>
      <CardContent>
        <Typography fontSize={'20px'}>{t("Reviews")}</Typography>
        <Stack spacing={2} >
        {fields.map((field, index) => (
            <React.Fragment key={field.id}>
              {index === 0 ? "":


          <Typography sx={{textAlign:"start",cursor:"pointer"}}>

<CloseIcon sx={{ color:"#8090A7",'&:hover': { color: 'red' }}} onClick={() => remove(index)} />

</Typography>
              }
             <Typography style={{ marginTop: '24px' }} fontSize={'14px'}>
  {t('Review criteria')}
</Typography>
<Controller
  name={`rate_type[${index }]`}
  control={control}
  render={({ field }) => (
    <TextField
    defaultValue={""}
      {...field}
      fullWidth
      size="small"
      placeholder={t('Overall')}
    />
  )}
/>
            </React.Fragment>
          ))}


          <Button sx={{width:"20%",fontSize:"11px",'&:hover': { backgroundColor: 'transparent' }}} type="button" onClick={() => append({ rate_type: '' })}>
          +  Add Review
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
