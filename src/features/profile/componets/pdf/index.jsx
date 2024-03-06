import React, { useRef, useEffect } from 'react';
import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material'
import { Box, Stack, styled } from '@mui/system'
import Divider from '@mui/material/Divider'

const PDFGenerator = ({user,ProfileData,contentRef}) => {

  const  data = user?.data?.data?.[0]



  return (
      <div style={{marginTop:"22px" }} ref={contentRef}>

        <Stack  direction={"row"} justifyContent={"space-around"} sx={{width:"100%"}}>
          <Stack  sx={{width:"100%"}} direction={"row"} justifyContent={"space-around"} >
          <table>

<tbody style={{color:'#3F4458',fontSize:'14px',display:"flex",flexDirection:"column",gap:"8px"}}>

  <tr>
    <td>ID :</td>
    <td>{data?.id}</td>
    <Divider   sx={{backgroundColor:"#3F4458"}}/>
  </tr>
  <tr>
    <td>{ProfileData?.first_name}</td>
  </tr>
  <tr>
    <td>First Name : </td>
    <td>{ProfileData?.first_name}</td>
  </tr>
  <tr>
    <td>Middle Name : </td>
    <td>{ProfileData?.middle_name}</td>
  </tr>
  <tr>
    <td>Last Name : </td>
    <td>{ProfileData?.last_name}</td>
  </tr>
  <tr>
    <td>Middle Name : </td>
    <td>{ProfileData?.middle_name}</td>
  </tr>
  <tr>
    <td>Email : </td>
    <td>{ProfileData?.email}</td>
  </tr>
  <tr>
    <td>Role : </td>
    <td>{ProfileData?.role}</td>
  </tr>
  <tr>
    <td>Address : </td>
    <td>{ProfileData?.address}</td>
  </tr>
  <tr>
    <td>Specialization : </td>
    <td>{ProfileData?.specialization}</td>
  </tr>

  <tr>
    <td>birth_date : </td>
    <td>{ProfileData?.user_info?.birth_date}</td>
  </tr>
  <tr>
    <td>gender : </td>
    <td>{ProfileData?.user_info?.gender}</td>
  </tr>
  <tr>
    <td>level : </td>
    <td>{ProfileData?.user_info?.level}</td>
  </tr>
  <tr>
    <td>military_situation :</td>
    <td>{ProfileData?.user_info?.military_situation}</td>
  </tr>
  <tr>
    <td>nationalID : </td>
    <td>{ProfileData?.user_info?.nationalID}</td>
  </tr>
  <tr>
    <td>salary : </td>
    <td>{ProfileData?.user_info?.salary}</td>
  </tr>
  <tr>
    <td>social_situation : </td>
    <td>{ProfileData?.user_info?.social_situation}</td>
  </tr>
  <tr>
    <td>Branch ID : </td>
    <td>{ProfileData?.branch_id}</td>
  </tr>
  <tr>
    <td>deposits : </td>
    <td>{ProfileData?.deposits?.map((val)=>(val.description)).join("  -  ")}</td>
  </tr>
  <tr>
    <td>received_date : </td>
    <td>{ProfileData?.deposits?.map((val)=>(val.received_date)).join("  -  ")}</td>
  </tr>
</tbody>
</table>

<Divider orientation="vertical"  sx={{backgroundColor:"#3F4458"}}/>

          <table>

<tbody style={{color:'#3F4458',fontSize:'14px',display:"flex",flexDirection:"column",gap:"8px"}}>



  <tr>
    <td>careers : </td>
    <td>{ProfileData?.careers?.map((val)=>(val.content)).join(" - ")}</td>
  </tr>
  <tr>
    <td>certificates : </td>
    <td>{ProfileData?.certificates?.map((val)=>(val.content)).join(" - ")}</td>
  </tr>
  <tr>
    <td>PhoneNumber : </td>
    <td>{ProfileData?.phone_number?.map((val) => (val?.phone_num)).join(" - ")}</td>
  </tr>
  <tr>
    <td>emergency : </td>
    <td>{ProfileData?.emergency?.map((val)=>(val.email)).join(" - ")}  || {ProfileData?.emergency?.map((val)=>(val.phone_num)).join(" - ")}</td>
  </tr>
  <tr>
    <td>languages : </td>
    <td>{ProfileData?.languages?.map((val)=>(val.languages)).join(" / ")}</td>
  </tr>

  <tr>
    <td>military_situation : </td>
    <td>{ProfileData?.user_info?.military_situation}</td>
  </tr>
  <tr>
    <td>nationalID : </td>
    <td>{ProfileData?.user_info?.nationalID}</td>
  </tr>
  <tr>
    <td>salary : </td>
    <td>{ProfileData?.user_info?.salary}</td>
  </tr>
  <tr>
    <td>study_situations : </td>
    <td>{ProfileData?.study_situations?.map((val)=>(val.study ,"||",val.degree ) ).join(" - ")}</td>
  </tr>
  <tr>
    <td>Skills  : </td>
    <td>{ProfileData?.skills?.map((val)=>(val.skills)).join(" - ")}</td>
  </tr>
  <tr>
    <td>absence  : </td>
    <td>{ProfileData?.absence}</td>
  </tr>
  <tr>
    <td>health_status  : </td>
    <td>{ProfileData?.user_info.health_status}</td>
  </tr>


</tbody>
</table>
          </Stack>
        </Stack>
   </div>
  );
};

export default PDFGenerator;
