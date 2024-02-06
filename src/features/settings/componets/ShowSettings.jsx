import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react';
import useShowAllBranches from '../hooks/useShowAllBranches';

export default function ShowSetting (){
    const{data,isloading}=useShowAllBranches()
    console.log("🚀 ~ ShowSetting ~ data:", data?.data?.data?.data)

    return(

        <Grid container spacing={2}>
          {data?.data?.data?.data.map((branch,index)=>(
            <Grid item xs={6} key={index}>
 <Card>
     <CardContent>
     <Stack direction="row"  justifyContent="space-between">
 <Box sx={{marginBottom:20}}>
  <Typography>{branch.name}</Typography>
  <Typography >Total 2 Warnings</Typography>
 </Box>

</Stack>
<Stack direction="row" spacing={2}  justifyContent="flex-end">
<Button>Edit</Button>
<Button>Delete</Button>
</Stack>
     </CardContent>


  </Card>
 </Grid>

          ))
 
          }
          </Grid>
         
    )

}