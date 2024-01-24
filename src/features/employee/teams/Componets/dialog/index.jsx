import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,Typography } from "@mui/material";
import { Box, Stack } from '@mui/system'
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDeleteTeam } from "../../hooks/useDeleteTeam";

export default function AlertDialog({ id, open, handleClose }) {
 const { mutate: DeleteTeam, isLoading } = useDeleteTeam();

  const handleDeleteAPI = () => {
    DeleteTeam(id)
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
          <CancelRoundedIcon  style={{ backgroundColor:"#FFFFFF",color: '#A20D29' ,fontSize: 160,position:"absolute",top: "50%", left: "50%", transform: "translate(-50%, -90%)",borderRadius:"50%" }} />

        </DialogContentText>
      </DialogContent>
      <Typography  sx={{fontWeight:"600",fontSize:"16px",color:"#131627"}}>Delete</Typography>


        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
        {"Are you sure you want to delete team?"}
      </DialogTitle>


        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <Button onClick={handleClose} style={{ color: '#B4B4B3' }}>Cancel</Button>
        <Button  sx={{color:"#DF2E38"}}  onClick={()=>handleDeleteAPI()} autoFocus>
          Delete
        </Button>
      </DialogActions>
      </Item>
      </Grid>
    </Dialog>
    </Grid>
  </Box>
  );
}
