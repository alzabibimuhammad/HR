import * as React from 'react';
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import useGetAllInquiries from 'src/features/requests/Inquiries/Hooks/useGetAllInquiries';
import RejectRequest from 'src/features/requests/api/RejectRequest';
import AccepteRequest from 'src/features/requests/api/AccepteRequest';
import { useTranslation } from 'react-i18next';
import { useRejectRequest } from 'src/features/requests/Inquiries/Hooks/useRejectRequest';
import { useAccepteRequest } from 'src/features/requests/Inquiries/Hooks/useAccepteRequest';
import styled from 'styled-components';
export default function Requests() {
  const Name = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
    textTransform: 'uppercase',

    color:'#3F4458'

  }))
  const SectionTittle = styled(Typography)(() => ({
    fontSize:'20px',
    fontWeight:'600',

    color:'#8090A7'

  }))
  const Content = styled(Typography)(() => ({
    fontSize:'14px',
    fontWeight:'500',
   
    color:'#3F4458'

  }))

  const { data } = useGetAllInquiries();
  const {mutate:Rejected,isloading}=useRejectRequest()
  const {mutate:Accepted}=useAccepteRequest()

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    // Ensure leading zero for single digit minutes
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${formattedMinutes}`;
  };

  const { t } = useTranslation()
  const requestsData = data?.data?.data || [];
  console.log("🚀 ~ Requests ~ requestsData:", requestsData)
  let counter = 0;

    const handleApproveClick = (params) => {
      Accepted(params)
 };

 const handleRejectClick = (params) => {
  Rejected(params)
 };

  return (
    <>
      <Stack sx={{ width: '100%',height:'100%' ,backgroundColor: "#fff", p: "15px" ,overflowY: 'auto',borderRadius:'12px' }} spacing={2}>

        <SectionTittle sx={{marginY:'19px'}} >{t('Requests')}</SectionTittle>

        {requestsData?.map((request, index) => (
          <>
          {request.status=="waiting" ?


          <Stack direction={{ sm:'column',xs:'column' }} key={index}>

            <Stack direction={{ sm:'row',xs:'row' }}  >

            <Stack direction={{ sm:'row',xs:'row' }} marginTop={'2.5%' }  marginLeft={{ sm:'1%' }}  spacing={{sm:38,xs:4}} justifyContent="space-between"  >
            <Stack direction={'row'} spacing={1}   >
        
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 40, height: 40,marginX:'8px' }}

                  />
       <Stack direction={'column'}  >
                  <Name>
                    {request?.user?.first_name} {request?.user?.last_name}
                  </Name>
                  <Content >{request?.description}</Content>

                  </Stack>
                 
                </Stack>
                <Typography ma>{formatTime(request?.date)}</Typography>


              </Stack>



            </Stack>

            <Stack spacing={{sm:2,xs:1}} sx={{marginY:'12px'}} direction={{ sm:'row',xs:'row' }}  justifyContent={'end'}>
              <Box>
                <Button size='medium' sx={{ backgroundColor:'rgba(223, 46, 56, 0.20)',paddingX:'12px'}} color="error" onClick={() => handleRejectClick(request?.id)}>
                  {t('Decline')}
                </Button>
              </Box>
              <Box>
                <Button  color="success" sx={{ backgroundColor:'rgba(145, 196, 131, 0.20)',paddingX:'12px'}} onClick={() => handleApproveClick(request?.id)} >
                  {t('Approve')}
                </Button>
              </Box>
            </Stack>
            {requestsData.length-1 == index ?
              null
            : <Divider  /> }

            <p style={{ display:'none' }} >{counter++}</p>
          </Stack>

          :null
           }
          </>
          ))}
          {counter==0?<Box height={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Typography fontSize={'20px'} >
              No Request Found
            </Typography>
          </Box>:null}


      </Stack>

    </>
  );
}
