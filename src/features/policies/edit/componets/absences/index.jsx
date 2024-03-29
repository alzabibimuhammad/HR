import React from 'react'
import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import{ useState } from 'react'
import styled from 'styled-components'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import {  List } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useFieldArray } from 'react-hook-form'
import { useTranslation } from 'react-i18next'



export default function AbsencesManagement({EditData,Controller,control,Paid,setPaid,Unpaid,setUnpaid,setSick,Sick}) {


  const [noteAdded, setNoteAdded] = useState(false);
  const {t} = useTranslation()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'absence_management.notes',
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
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleUpPaid = () => {
      setPaid(Number(Paid) + 1);
    }

    const handleDownPaid = () => {
      if (Paid > 0) {
        setPaid(Number(Paid) - 1);
      }
    }

    const handleUpUnpaid = () => {
      setUnpaid(Number(Unpaid) + 1);
    }

    const handleDownUnpaid = () => {
      if (Unpaid > 0) {
        setUnpaid(Number(Unpaid) - 1);
      }
    }

    const handleUpSick = () => {
      setSick(Number(Sick) + 1);
    }

    const handleDownSick = () => {
      if (Sick > 0) {
        setSick(Number(Sick) - 1);
      }
    }

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
        <Typography fontSize={'20px'}>{t("Absences Management")}</Typography>

        <Box sx={{width:"100%"}}>
        <Typo>{t("Paid absence days")}</Typo>

        <Controller
        name={`absence_management.paid_absence_days[count]`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              value={Paid !== 0 ? Paid : t('none')}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpPaid} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownPaid} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}

    />
        )}
        />

    <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
    <Controller
      name={`absence_management.paid_absence_days[compensatory_time]`}
      control={control}
        render={({ field }) => (
      <input
      {...field}
          type='checkbox'
       />
        ) }
        />
<Typo>

{t("Compensatory time")}
</Typo>
    </Box>
    </Box>


    <Box sx={{width:"100%",marginTop:"15px !important"}}>

      <Typo>{t("Unpaid absence days")}</Typo>
      <Controller
        name={`absence_management.unpaid_absence_days[count]`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              value={Unpaid !== 0 ? Unpaid : t('none')}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpUnpaid} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownUnpaid} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
        )}
        />

       <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
    <Controller
      name={`absence_management.unpaid_absence_days[compensatory_time]`}
      control={control}
        render={({ field }) => (
      <input
      {...field}
          type='checkbox'
       />
        ) }
        />
<Typo>

{t('Compensatory time')}
</Typo>
    </Box>
    </Box>
    <Box sx={{width:"100%",marginTop:"15px !important"}}>

      <Typo>{t("Sick absence days")}</Typo>
      <Controller
        name={`absence_management.sick_absence_days[count]`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              value={Sick !== 0 ? Sick : t('none')}
              disabled
        fullWidth
        size='small'
        InputProps={{
          endAdornment: (
            <Box marginLeft={'70%'} display={'flex'}>
              <Button onClick={handleUpSick} style={{ padding: 0, minWidth: 'unset' }}>
                <KeyboardArrowUpRoundedIcon />
              </Button>
              <Button onClick={handleDownSick} style={{ padding: 0, minWidth: 'unset' }}>
                <ExpandMoreRoundedIcon />
              </Button>
            </Box>
          ),
        }}
    />
        )}
        />
       <Box display={"flex"} alignItems={"center"} gap={"5px"} marginTop={"7px"}>
       <Controller
      name={`absence_management.sick_absence_days[compensatory_time]`}
      control={control}
        render={({ field }) => (
      <input
      {...field}
          type='checkbox'
       />
        ) }
        />
<Typo>

{t("Compensatory time")}
</Typo>
    </Box>
    </Box>


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
      name={`absence_management.[notes]`}
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

