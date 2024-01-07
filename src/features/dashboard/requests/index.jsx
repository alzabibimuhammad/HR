import * as React from 'react';
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from 'src/@core/theme/overrides/divider';

export default function Requests() {
  return <>
    <Stack sx={{ width: '100%',height:"100%",backgroundColor:"#fff", p:"15px" }} spacing={2}>
<Typography variant="h3" marginTop={"25px"} marginLeft={"10px"} color="#8090A7">Requests</Typography>

<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
    <Box marginTop={"10px"} display={"flex"}alignItems={"center"} gap={"12px"}>
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 45, height: 45 }}
      />
      <Typography variant="h5">Rene Wells</Typography>
    </Box>
    <Box >

      <Typography variant="span">7:21AM</Typography>
    </Box>


</Box>
      <Stack  gap={5} flexDirection={"row-reverse"}>
        <Box>

      <Button size='medium' variant="outlined" color="error">
        cancel
      </Button>
        </Box>
        <Box>
        <Button variant="outlined" color="success">
        Aprove
      </Button>
        </Box>
      </Stack>



<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
    <Box marginTop={"10px"} display={"flex"}alignItems={"center"} gap={"12px"}>
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 45, height: 45 }}
      />
      <Typography variant="h5">Rene Wells</Typography>
    </Box>
    <Box >

      <Typography variant="span">7:21AM</Typography>
    </Box>


</Box>
      <Stack  gap={5} flexDirection={"row-reverse"}>
        <Box>

      <Button size='medium' variant="outlined" color="error">
        cancel
      </Button>
        </Box>
        <Box>
        <Button variant="outlined" color="success">
        Aprove
      </Button>
        </Box>
      </Stack>
<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
    <Box marginTop={"10px"} display={"flex"}alignItems={"center"} gap={"12px"}>
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 45, height: 45 }}
      />
      <Typography variant="h5">Rene Wells</Typography>
    </Box>
    <Box >

      <Typography variant="span">7:21AM</Typography>
    </Box>


</Box>
      <Stack  gap={5} flexDirection={"row-reverse"}>
        <Box>

      <Button size='medium' variant="outlined" color="error">
        cancel
      </Button>
        </Box>
        <Box>
        <Button variant="outlined" color="success">
        Aprove
      </Button>
        </Box>
      </Stack>
<Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
    <Box marginTop={"10px"} display={"flex"}alignItems={"center"} gap={"12px"}>
    <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 45, height: 45 }}
      />
      <Typography variant="h5">Rene Wells</Typography>
    </Box>
    <Box >

      <Typography variant="span">7:21AM</Typography>
    </Box>


</Box>
      <Stack  gap={5} flexDirection={"row-reverse"}>
        <Box>

      <Button size='medium' variant="outlined" color="error">
        cancel
      </Button>
        </Box>
        <Box>
        <Button variant="outlined" color="success">
        Aprove
      </Button>
        </Box>
      </Stack>


    </Stack>

    </>
}
