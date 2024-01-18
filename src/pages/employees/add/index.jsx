import { Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Account from 'src/features/employee/add/Componets/Account'
import Contact from 'src/features/employee/add/Componets/Contact'
import Employment from 'src/features/employee/add/Componets/Employment'
import Info from 'src/features/employee/add/Componets/Personal Info'
import Professional from 'src/features/employee/add/Componets/Professional'
import Skills from 'src/features/employee/add/Componets/Skills'
import Snapshot from 'src/features/employee/add/Componets/Snapshot'

export default function Add() {
  return (
    <>
    <Button type='submit' sx={{ marginLeft:'70%' ,width:'30%',backgroundColor:'#6AB2DF',color:'#fff',":hover": {color:'#fff',backgroundColor:'#2A4759'} }} >+Add Employee</Button>
    <br/>
    <br/>
    <Stack direction={{ sm:'row',xs:'column'}} spacing={2}  >

      <Stack spacing={2} width={{sm:'50%'}} direction={{sm:'column',xs:'column'}} >
          <Box >
              <Snapshot/>
          </Box>
          <Box>
            <Account/>
          </Box>
          <Box>
          <Info/>
          </Box>
          <Box>
            <Contact/>
          </Box>
      </Stack>

      <Stack flex={1} direction={'column'} spacing={2} >
        <Box>
          <Professional/>
        </Box>
        <Box>
        <Skills/>
        </Box>
        <Box>
          <Employment/>
        </Box>
      </Stack>

    </Stack>
    </>
  )
}
