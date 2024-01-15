import { Card, CardContent, CardHeader, Grid, List, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CollapsibleTable from 'src/features/employee/team/table'

export default function Employees() {


  return (
    <Grid container spacing={4}>
    <Grid item xs={12}>
      <Card>
        <CardContent >

          <CollapsibleTable/>

        </CardContent>
        </Card>
        </Grid>
        </Grid>
  )

}
