import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Typography } from "@mui/material";
import { Box, Stack } from '@mui/system'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useAccepteSystem } from "../../Hooks/useAccepteSystem";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from "react-i18next";

export default function AlertDialogAcceptSystem({ id, open, handleClose }) {
 const { mutate: AcceptSystem, isLoading } = useAccepteSystem();
  const {t} = useTranslation()
  const handleDeleteAPI = () => {
    AcceptSystem(id)
      handleClose()
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));



  return (
    <Box >
    <Grid columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Dialog
      onClose={handleClose}
      open={open}
      >
      <Grid item xs={12}>
        <Item>
        <DialogContent sx={{height:"99px",width:"100%",borderRadius:"10px",position:"relative",overflow:"visible"}}>
        <DialogContentText sx={{}}>
          <CheckCircleIcon  style={{ backgroundColor:"#FFFFFF",color: '#6AB2DF' ,fontSize: 160,position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -90%)",borderRadius:"50%" }} />
        </DialogContentText>
      </DialogContent>
      <Typography  sx={{fontWeight:"600",fontSize:"16px",color:"#131627"}}>{t('Approve')}</Typography>


        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
        {t("Are you sure you want to Approve?")}
      </DialogTitle>


        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Button onClick={handleClose} style={{ color: '#B4B4B3' }}>{t('Cancel')}</Button>
        <Button  sx={{color:"#6AB2DF"}}  onClick={()=>handleDeleteAPI()} autoFocus>
        {t('Approve')}
        </Button>
      </DialogActions>
      </Item>
      </Grid>
    </Dialog>
    </Grid>
  </Box>
  );
}
