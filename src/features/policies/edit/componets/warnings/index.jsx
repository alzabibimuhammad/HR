import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import {  List } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { useFieldArray } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

export default function Warnings({EditData,Controller,control,defaultValues,setAlert ,alert,warningsto,setWarningsto,errors}) {


  const [noteAdded, setNoteAdded] = useState(false);
  const{t} = useTranslation()

  const { fields, append, remove } = useFieldArray({


    control,
    name: 'warnings.notes',
  });

  const handleAddClick = () => {
    append({ });
    setNoteAdded(true);
  };

  const handleRemoveClick = (index) => {
    remove(index);
    setNoteAdded(false);

  };


  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))

    const handleUpAlert = _=>{
      setAlert(alert+1)
    }

    const handleDownAlert = _=>{
      if(alert != 0)
        setAlert(alert-1)
    }

    const handleUpWaring = _=>{
      setWarningsto(warningsto+1)
    }

    const handleDownWarning = _=>{
      if(warningsto != 0)
      setWarningsto(warningsto-1)
    }

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
        <Typography fontSize={'20px'}>{t("Warnings Management")}</Typography>

        <Typo>{t("Alerts to warning")}</Typo>

        <Controller
        name={`warnings.alerts_to_warnings`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
        value={alert!=0 ? alert : t('none')}
        disabled

        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpAlert} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownAlert} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
  )}
      />
      <Typo>{t("Warnings to dismissal")}</Typo>

      <Controller
        name={`warnings.warningsto_dismissal`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
            value={warningsto!=0 ? warningsto : t('none')}

        disabled
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpWaring} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownWarning} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
        )}
        />


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
      name={`warnings.notes`}
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
