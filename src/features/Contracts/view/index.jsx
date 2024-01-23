<<<<<<< HEAD
import React, { useRef } from 'react'
=======
import React from 'react'
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'

import Image from 'next/image';
import Button from '@mui/material/Button';
<<<<<<< HEAD
import PDFViewer from '../list/Profile/PdfViwer';
import useViewContract from '../list/Hooks/useViewContracts';
import { useRouter } from 'next/router';
import { useDeleteContract } from '../list/Hooks/useDeleteContract';
import { useReactToPrint } from 'react-to-print';

export default function View({id}) {
  const componentRef = useRef();

  const router = useRouter();

  const { data, isLoading, isError } = useViewContract(id);

  const { mutate: deleteContract } = useDeleteContract();

  const deleteContractt = async (id) => {
    try {
      await deleteContract(id);
      console.log('Contract deleted successfully');
      router.push('/contracts/list');
    } catch (error) {
      console.error('Failed to delete contract', error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = `${process.env.NEXT_PUBLIC_BASE_URL}/${data?.data?.data?.[0].path}`;
    downloadLink.download = 'your_pdf_filename.pdf';
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
=======

export default function View() {
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c




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



<<<<<<< HEAD


    <Stack  marginTop={"20px"} direction={"row"} justifyContent={"space-between"}  spacing={12}>
      {data?.data?.data.map((ele)=> <>
        <Box  ref={componentRef}  sx={{ width: "100%", borderRadius: "12px", backgroundColor: "#FFFFFF", textAlign: "center",  }}>
  <iframe
    style={{
      width: "100%",
      height: "100vh",
      border: "none",
      borderRadius: "inherit",
    }}
    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${ele.path}`}
  />

</Box>
=======
{/*           */}


    <Stack  marginTop={"20px"} direction={"row"} justifyContent={"space-between"}  spacing={12}>
    <Box sx={{width:"100%",height:"100%",borderRadius:"12px",backgroundColor:"#FFFFFF",textAlign:"center",padding:"35px 0px"}}>

  <Image
    src='/images/A4 - 1.png'
    alt='contract Image'

    width={900}
    height={900}
  />
</Box>

>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
      <Box sx={{display:"flex",flexDirection:"column",gap:"18px"}}>
      <Box sx={{width:"380px",height:"131px", backgroundColor:"#FFFFFF",borderRadius:"12PX",padding:"12px 19px"}}>

      <Typography sx={{marginTop:"4px",fontWeight:"600",fontSize:"16px",color:"#3F4458"}}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
</Typography>
      </Box>

      <Box sx={{backgroundColor:"#FFFFFF",width:"380px",height:"240px",borderRadius:"12px",display:"flex",flexDirection:"column",justifyContent:"space-around",padding:"0 15px"}}>
<<<<<<< HEAD
      <Button sx={{width:"100%"}} size='large' variant="contained" onClick={handlePrint}> Print</Button>
      <Button sx={{width:"100%"}} size='large' variant="contained"onClick={handleDownloadClick} > Download</Button>
      <Button sx={{width:"100%",backgroundColor:"#DF2E38"}} size='large' variant="contained"onClick={() => deleteContractt(id)}> Delete</Button>

      </Box>
      </Box>
      </>)}



    </Stack>
=======
      <Button sx={{width:"100%"}} size='large' variant="contained" > Print</Button>
      <Button sx={{width:"100%"}} size='large' variant="contained"> Download</Button>
      <Button sx={{width:"100%",backgroundColor:"#DF2E38"}} size='large' variant="contained"> Delete</Button>

      </Box>
      </Box>
    </Stack>
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
</>
}
