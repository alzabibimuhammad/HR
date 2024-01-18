import React from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'

import Image from 'next/image';
import Button from '@mui/material/Button';
import PDFViewer from '../list/Profile/PdfViwer';
import useViewContract from '../list/Hooks/useViewContracts';
import { useRouter } from 'next/router';

export default function View({id}) {

  const router = useRouter();

  const { data, isLoading, isError } = useViewContract(id);




  const deleteContract = async (data) => {
    try {
      const contractId = data?.data?.data[0]?.id;

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/contract/Delete/${contractId}, {
        method: 'DELETE',
      }`);

      if (response.ok) {
        console.log('Contract deleted successfully');
        router.push('/contracts/list');
      } else {
        console.error('Failed to delete contract');
      }
    } catch (error) {
      console.error('An error occurred while deleting contract', error);
    }
  };

  return <>
    <Stack sx={{backgroundColor:"#FFFFFF",p:"30px",borderRadius:"12px"}}>
      <Box sx={{width:"246px",height:"100px",}}>



      <Typography variant='h2'>
      <span style={{color: '#6AB2DF'}}>A</span><span style={{color:"#131627"}}>xis</span> <span style={{color: '#6AB2DF'}}>Code</span>
    </Typography>


      <Typography sx={{marginTop:"4px",fontWeight:"500",fontSize:"12px",color:"#8090A7"}}>Office 149, 450 South Brand Brooklyn
San Diego Country, CA 91905, USA
+1 (123) 456 7894, +44 (789) 54222</Typography>

      </Box>
    </Stack>





    <Stack  marginTop={"20px"} direction={"row"} justifyContent={"space-between"}  spacing={12}>
      {data?.data?.data.map((ele)=> <>
        <Box sx={{ width: "100%", borderRadius: "12px", backgroundColor: "#FFFFFF", textAlign: "center",  }}>
  <iframe
    style={{
      width: "100%",
      height: "100vh",
      border: "none", // Remove border if necessary
      borderRadius: "inherit", // Inherit border radius from the parent Box
    }}
    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${ele.path}`}
  />

</Box>
      <Box sx={{display:"flex",flexDirection:"column",gap:"18px"}}>
      <Box sx={{width:"380px",height:"131px", backgroundColor:"#FFFFFF",borderRadius:"12PX",padding:"12px 19px"}}>

      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"16px",color:"#3F4458"}}>
      Contract #{ele.id}
</Typography>

      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>
      Name : {ele.user.first_name} {ele.user.last_name}

</Typography>
      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>

Start Date : {ele.startTime}

</Typography>


      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"14px",color:"#8090A7"}}>

End Date : {ele.endTime}
</Typography>
      </Box>

      <Box sx={{backgroundColor:"#FFFFFF",width:"380px",height:"240px",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"0 15px"}}>
      <Button sx={{width:"100%"}} size='large' variant="contained"onClick={() => window.print()} > Print</Button>
      <Button sx={{width:"100%"}} size='large' variant="contained" > Download</Button>
      <Button sx={{width:"100%",backgroundColor:"#DF2E38"}} size='large' variant="contained"onClick={() => deleteContract(data)}> Delete</Button>

      </Box>
      </Box>
      </>)}



    </Stack>
</>
}
