import { Card, CardContent, CardHeader, Grid, List, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CollapsibleTable from 'src/features/employee/teams/Componets/table'
import useGetAllTeams from 'src/features/employee/teams/hooks/useGetAllTeams'

export default function Employees() {

  const {data , loading } = useGetAllTeams()

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
