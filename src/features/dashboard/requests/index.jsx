import * as React from 'react';
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from 'src/@core/theme/overrides/divider';
import useGetAllInquiries from 'src/features/requests/Inquiries/Hooks/useGetAllInquiries';
import RejectRequest from 'src/features/requests/api/RejectRequest';
import AccepteRequest from 'src/features/requests/api/AccepteRequest';

export default function Requests() {

  const { data } = useGetAllInquiries();

  console.log('dasdsa', data?.data?.data);

  const requestsData = data?.data?.data || [];

  const handleApproveClick = (params) => {
    AccepteRequest(params)
 };

 const handleRejectClick = (params) => {
   RejectRequest(params)
 };

  return (
    <>
      <Stack sx={{ width: '100%', height: "100%", backgroundColor: "#fff", p: "15px" }} spacing={2}>

        <Typography variant="h3" marginTop={"25px"} marginLeft={"10px"} color="#8090A7">Requests</Typography>

        {requestsData.map((request, index) => (
          <>
          {request.status=="waiting" ?
          <Box key={index}>
            {console.log('iddddd',request.id)}
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
              <Box marginTop={"10px"} display={"flex"} alignItems={"center"} gap={"12px"}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 45, height: 45 }}
                />
                <Stack direction={'row'}  spacing={2}>
                  <Typography>
                    {request?.user?.first_name}
                  </Typography>
                  <Typography >
                    {request?.user?.last_name}
                  </Typography>
                </Stack>
              </Box>
              <Box>
                <Typography variant="span">{request?.date}</Typography>
              </Box>
            </Box>
            <Stack gap={5} flexDirection={"row-reverse"}>
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
          </Box>
          : null }
          </>
          ))}

      </Stack>
    </>
  );
}
