import React from 'react'
import Logo from 'src/features/Contracts/view/logo'
import { Box, Stack } from '@mui/system'
import {  Button, Card, CardContent, Chip,  TextField, Typography } from '@mui/material';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import Divider from '@mui/material/Divider';
import Warning from 'src/features/policies/view/componets/warnings';
import Reviews from 'src/features/policies/view/componets/reviews';
import Deductions from 'src/features/policies/view/componets/deductions';
import WorkTimes from 'src/features/policies/view/componets/workTime';
import useShowPolicies from 'src/features/policies/hook/useShowPolicies';


export default function View() {

  const {data}=useShowPolicies()


  return (<>

    <Logo/>
    <Stack marginTop={'24px'} direction={{sm:'row',xs:'column'}} spacing={6} >

      <Stack width={{ sm:'50%',xs:'100%' }} direction={'column'}>
    <WorkTimes data={data?.data}/>
      </Stack>

      <Stack direction={'column'}  spacing={6} width={{ sm:'50%',xs:'100%' }} >

        {/* <Warning data={data?.data}/> */}
        <Reviews data={data?.data}/>
        <Deductions data={data?.data}/>
      </Stack>
    </Stack>

  </>
  )
}
