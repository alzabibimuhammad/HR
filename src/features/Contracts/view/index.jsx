import React from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'

import Image from 'next/image';
import Button from '@mui/material/Button';

export default function View() {




  return <>
    <Stack sx={{backgroundColor:"#FFFFFF",p:"30px",borderRadius:"12px"}}>
      <Box sx={{width:"246px",height:"100px",}}>

      <Typography variant='h2'>
      <span style={{color: '#6AB2DF'}}>A</span><span style={{color:"#131627"}}>xis</span> <span style={{color: '#6AB2DF'}}>Code</span>
    </Typography>


      <Typography sx={{marginTop:"4px",fontWeight:"500",fontSize:"12px",color:"#8090A7"}}>
        Office 149, 450 South Brand Brooklyn
        San Diego Country, CA 91905, USA
        +1 (123) 456 7894, +44 (789) 54222
      </Typography>

      </Box>
    </Stack>


    <Stack  marginTop={"20px"} direction={{sm:"row",xs:'column'}} justifyContent={"space-between"}  spacing={12}>

    <Box sx={{width:"100%",height:"100%",borderRadius:"12px",backgroundColor:"#FFFFFF",textAlign:"center",padding:"35px 0px"}}>

        <img
          src='/images/A4 - 1.png'
          alt='contract Image'
          style={{width:'93%',height:'93%'  }}

        />
      </Box>

      <Box sx={{display:"flex",flexDirection:"column",gap:"18px"}}>
      <Box sx={{width:"380px",height:"131px", backgroundColor:"#FFFFFF",borderRadius:"12PX",padding:"12px 19px"}}>

      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"16px",color:"#3F4458"}}>
      Contract #12
      </Typography>

            <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>
            Name : Raya Scott

      </Typography>
            <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>
      Start Date : 23 - August - 2024
      </Typography>
            <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>

      End Date : 23 - August - 2024
      </Typography>
      </Box>

      <Box sx={{backgroundColor:"#FFFFFF",width:"380px",height:"240px",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"0 15px"}}>
      <Button sx={{width:"100%"}} size='large' variant="contained" > Print</Button>
      <Button sx={{width:"100%"}} size='large' variant="contained"> Download</Button>
      <Button sx={{width:"100%",backgroundColor:"#DF2E38"}} size='large' variant="contained"> Delete</Button>

      </Box>
      </Box>
    </Stack>
</>
}
