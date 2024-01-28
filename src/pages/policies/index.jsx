import { Grid } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import Logo from 'src/features/Contracts/view/logo'
import Annual from 'src/features/policies/componets/annual'
import Reviews from 'src/features/policies/componets/reviews'
import Warnings from 'src/features/policies/componets/warnings'
import WorkTime from 'src/features/policies/componets/workTime'

export default function Policies() {

  return (
    <>
    <Logo/>
    <Grid container spacing={6}>
    <Grid item sm={6} xs={12} marginTop={'24px'} >

        <Stack  spacing={6} direction={'column'}>
          <Box  >
            <WorkTime/>
          </Box>

          <Box >
            <Annual/>
          </Box>
          <Box >
            <Reviews/>
          </Box>
        </Stack>
    </Grid>

    <Grid item sm={6}  xs={12} marginTop={'24px'}>

      <Stack direction={'column'}>
        <Warnings/>
      </Stack>

    </Grid>

    </Grid>
    </>

  )
}
