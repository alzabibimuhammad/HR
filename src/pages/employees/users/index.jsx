import { Card, CardContent, CardHeader, Grid, List, Menu, MenuItem } from '@mui/material'
import React from 'react'
import CollapsibleTable from 'src/features/employee/teams/Componets/table'
import Users from 'src/features/employee/users/componets/DataGrid'
import useGetAllUsers from 'src/features/employee/users/hooks/useGetAllUsers'

export default function Employees() {

  const {data , loading } = useGetAllUsers()


  return (
    <Grid container spacing={4}>
    <Grid item xs={12}>
      <Card>
        <CardContent >

          {data ? <Users rows = {data}/>:null}

        </CardContent>
        </Card>
        </Grid>
        </Grid>
  )

}
