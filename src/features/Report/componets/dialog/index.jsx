import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useDispatch } from "react-redux";
import { RemoveReport, getReportsData } from "src/pages/report/store";

export default function AlertDialog({ id ,open ,handleClose , handleDelete }) {
  const [localId, setLocalId] = useState(id);
  const dispatch = useDispatch()

  const handleDeleteAPI = () => {
      dispatch(RemoveReport(localId))
      dispatch(getReportsData())
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
          {"Are you sure you want to delete report?"}
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
