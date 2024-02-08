import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardContent, Chip, Stack, TextField, Typography } from '@mui/material';
import DrawerForm from '../drawerDay';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import styled from 'styled-components';
import { useFieldArray } from 'react-hook-form';
import {  List } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';

export default function WorkTime({Controller,control,days,setDays}) {
  const [openParent, setOpenParent] = React.useState(false);
  const [noteAdded, setNoteAdded] = useState(false);
  const {t} = useTranslation()
  const handleDayPicker = (date) => {
    setOpenParent(true);
  };

  const Typo = styled(Typography)(({ theme }) => ({
    fontSize:'14px'
    }))


    const { fields, append, remove } = useFieldArray({
      control,
      name: 'work_time.notes',
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

        <Stack spacing={2} direction={'column'}>
          <Typography fontSize={'20px'}>{t("Work Time")}</Typography>
          <Typo style={{ marginTop:'24px' }} >{t("Work days")}</Typo>
          <Controller
  name={`work_time.work_days`}
  control={control}
  render={({ field }) => (
    <Button
      onClick={() => {
        handleDayPicker();
        field.onChange(JSON.stringify(days));
      }}
      sx={{
        justifyContent: 'start',
        border: '1px solid black',
        height: '2.5em',
        '&:hover': {
          backgroundColor: '#fff',
          color: 'none',
        },
      }}
      fullWidth
    >
      {days.length ? (
        days.map((day) => (
          <Chip
            key={day}
            label={day}
            sx={{
              marginLeft: '2px',
              backgroundColor: '#6AB2DF',
              color: '#fff',
              fontSize: '13px',
              width: 'auto',
            }}
          />
        ))
      ) : (
        <Stack direction={'row'} width={'100%'} justifyContent={'space-between'}>
          <Box>
            <Typo>{t("Work days")}</Typo>
          </Box>
          <Box>
            <CalendarMonthIcon sx={{ color: '#8090A7' }} />
          </Box>
        </Stack>
      )}
    </Button>
  )}
/>


          <Typo>{t("Start time")}</Typo>


        <Controller
        name={`work_time.start_time`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              type='time'
              placeholder="Start time"
              fullWidth
              size='small'
            />
        )}
        />


            <Typo>{t("Cut-off time")}</Typo>


            <Controller
        name={`work_time.cut_off_time`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              type='time'
              placeholder="Cut-off time"
              fullWidth
              size='small'
            />
        ) }
/>
            <Typo>{t("End time")}</Typo>
            <Controller
        name={`work_time.end_time`}
        control={control}
        render={({ field }) => (
            <TextField
            {...field}
              type='time'
              placeholder="End time"
              fullWidth
              size='small'
            />
        ) }
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
      name={`work_time.notes`}
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

        <DrawerForm  open={openParent} setOpenParent={setOpenParent} setDays={setDays} />
      </CardContent>
    </Card>
  );
}
