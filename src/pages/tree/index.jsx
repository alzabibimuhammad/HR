import { Box, Stack } from '@mui/system'
import dynamic from 'next/dynamic';
import React from 'react'
import Logo from 'src/features/Contracts/view/logo';


const TreeComponent = dynamic(
  () => import("../../features/tree/componets/tree"),
  {
    ssr: false,
  }
);

export default function Tree() {



  return (
      <Stack >
      <Box  >
        <Logo />
      </Box>

      <Stack  direction={"row"} justifyContent={"center"}>
        <TreeComponent/>
      </Stack>
      </Stack>
  )
}
