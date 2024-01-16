import { Card, CardContent, CardHeader, Grid, List, Menu, MenuItem } from '@mui/material'
import React from 'react'
import useGetAllEmployee from 'src/features/employee/hooks/useGetAllEmployee'
import CollapsibleTable from 'src/features/employee/team/table'

export default function Employees() {

  const {data , loading } = useGetAllEmployee()

  return (
    <Grid container spacing={4}>
    <Grid item xs={12}>
      <Card>
        <CardContent >

          <CollapsibleTable Data = {data}/>

        </CardContent>
        </Card>
        </Grid>
        </Grid>
  )

}
