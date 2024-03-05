import { CircularProgress, Dialog, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';


import { storeAttendanceLogs } from 'src/pages/dashboard/store';

const Loading = () => {
  const dispatch = useDispatch();
  const loadingState  = useSelector(state => state.Dashboard.loading)
  console.log("🚀 ~ Loading ~ loading:", loadingState)

  const {t} = useTranslation()
  useEffect(() => {

    dispatch(storeAttendanceLogs());
  }, [dispatch]);

 
  const [dialogOpen, setDialogOpen] = React.useState(true);

  
  React.useEffect(() => {
    if (loadingState === 'succeeded' || loadingState === 'failed') {
      setDialogOpen(false);
    }
  }, [loadingState]);

  return (
    <div>
      <Dialog open={dialogOpen}>
      <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <DialogTitle sx={{fontSize:20 ,marginY:6}}>{t('Please wait for the attendance data to update')}</DialogTitle>
       
          <CircularProgress />
        </div>
      </Dialog>
    
    </div>
  );
};

export default Loading;
