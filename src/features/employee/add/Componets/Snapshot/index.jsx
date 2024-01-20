import { Button, Card, CardContent, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'

export default function Snapshot() {
  const svgContent = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M12.8334 6.66634C12.8334 8.23115 11.5649 9.49967 10.0001 9.49967C8.43527 9.49967 7.16675 8.23115 7.16675 6.66634C7.16675 5.10153 8.43527 3.83301 10.0001 3.83301C11.5649 3.83301 12.8334 5.10153 12.8334 6.66634Z" stroke="#8090A7" stroke-linecap="round"/>
    <path d="M3.89557 14.7476C4.35607 12.3614 6.8314 11.25 9.26167 11.25H10.7383C13.1686 11.25 15.6439 12.3614 16.1044 14.7476C16.1361 14.9116 16.1634 15.08 16.1856 15.2523C16.256 15.8001 15.8023 16.25 15.25 16.25H4.75C4.19771 16.25 3.74395 15.8001 3.81441 15.2523C3.83657 15.08 3.86392 14.9116 3.89557 14.7476Z" stroke="#8090A7" stroke-linecap="round"/>
  </svg>
`;



  return (
    <Card>
        <CardContent>

          <Typography >Snapshot</Typography>
          <br/>
          <Stack direction={'row'} spacing={3} >
            <Box>
              <img src='/images/avatars/3.png' alt='profile-picture' />
              {/* <TextField type='file'
                size='small'
                sx={{width:'100px'}}
              /> */}
            </Box>

          <Stack direction={'column'} spacing={3} width={'100%'} >

            <TextField
              fullWidth
              size='small'
              label={
                <Stack direction={'row'} spacing={2} >
                  <Box>
                  <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                    </Box>
                    <Box>
                      {' First Name'}
                  </Box>
                </Stack>
              }
            />



              <TextField
                fullWidth
                size='small'

                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                      </Box>
                      <Box>
                        {' Midlle Name'}
                    </Box>
                  </Stack>
                }
              />
              <TextField

                size='small'
                fullWidth
                label={
                  <Stack direction={'row'} spacing={2} >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`}/>
                      </Box>
                      <Box>
                        {' Last Name'}
                    </Box>
                  </Stack>
                }
              />

          </Stack>
          </Stack>
        </CardContent>
    </Card>

  )
}
