import React, { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from "react-redux";
import { RemoveContracts,getContractsData } from "src/pages/contracts/store";
import { useDeleteContract } from "../../Hooks/useDeleteContract";

export default function AlertDialog({ id, open, handleClose }) {
 const { mutate: deleteContract, isLoading } = useDeleteContract();

  const handleDeleteAPI = () => {
    deleteContract(id)
      handleClose()
  };


  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={{ fontSize: "19px", color: '#B4B4B3' }}>
          {"Are you sure you want to delete contract?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ErrorOutlineIcon style={{ color: '#A20D29', marginLeft: '80px', fontSize: 140 }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <Button onClick={handleClose} style={{ color: '#B4B4B3' }}>Cancel</Button>
          <Button onClick={()=>handleDeleteAPI()} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
