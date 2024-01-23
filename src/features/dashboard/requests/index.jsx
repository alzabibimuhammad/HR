import * as React from 'react';
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useGetAllInquiries from 'src/features/requests/Inquiries/Hooks/useGetAllInquiries';
import RejectRequest from 'src/features/requests/api/RejectRequest';
import AccepteRequest from 'src/features/requests/api/AccepteRequest';

export default function Requests() {

  const { data } = useGetAllInquiries();


  const requestsData = data?.data?.data || [];
  const handleApproveClick = (params) => {
    AccepteRequest(params)
 };

 const handleRejectClick = (params) => {
   RejectRequest(params)
 };

  return (
    <>
      <Stack sx={{ width: '100%',borderRadius:'6px',height:'100%' ,backgroundColor: "#fff", p: "15px" ,overflowY: 'auto' }} spacing={2}>

        <Typography variant="h3" marginTop={"25px"} marginLeft={"10px"} color="#8090A7">Requests</Typography>
        {requestsData.map((request, index) => (
          <>
          {request.status=="waiting" ?

          <Stack direction={{ sm:'column',xs:'column' }} key={index}>

            <Stack direction={{ sm:'row',xs:'row' }}  >

                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 45, height: 45 }}
                  />
                </Box>

              <Stack direction={{ sm:'row',xs:'row' }} marginTop={'2.5%' } marginLeft={{ sm:'1%' }}  spacing={{sm:16,xs:4}}  >
                <Stack direction={'row'}  spacing={1}>
                  <Typography>
                    {request?.user?.first_name}
                  </Typography>
                  <Typography >
                    {request?.user?.last_name}
                  </Typography>
                </Stack>

                <Box >
                  <Typography >{request?.date}</Typography>
                </Box>

              </Stack>



            </Stack>

            <Stack spacing={{sm:2,xs:1}} direction={{ sm:'row',xs:'row' }}  justifyContent={'end'}>
              <Box>
                <Button size='medium' variant="outlined" color="error" onClick={() => handleRejectClick(request?.id)}>
                  Decline
                </Button>
              </Box>
              <Box>
                <Button variant="outlined" color="success" onClick={() => handleApproveClick(request?.id)} >
                  Approve
                </Button>
              </Box>
            </Stack>
            {requestsData.length-1 == index ?
              null
            : <Divider  /> }
          </Stack>
          : null }
          </>
          ))}
      </Stack>
    </>
  );
}
