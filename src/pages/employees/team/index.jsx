import { Card, CardContent, CardHeader, Grid, List, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CollapsibleTable from 'src/features/employee/teams/Componets/table'
import useGetAllTeams from 'src/features/employee/teams/hooks/useGetAllTeams'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

export default function Employees() {

  const {data , loading } = useGetAllTeams()

  return (
    <Grid container spacing={4}>
    <Grid item xs={12}>
      <Card sx={{ borderRadius:'12px' }} >
        <CardContent >

          {data?
          <CollapsibleTable Data = {data}/> :    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

          <CircularProgress className='loading-rtl'/>
          </Box>}


        </CardContent>
        </Card>
        </Grid>
        </Grid>
  )

}
