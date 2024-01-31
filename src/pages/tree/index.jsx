import { Box, Stack } from '@mui/system'
import dynamic from 'next/dynamic';
import React from 'react'
import Logo from 'src/features/Contracts/view/logo';
import useGetMembersHierarchy from 'src/features/tree/hooks/useGetMembersHierarchy';


const TreeComponent = dynamic(
  () => import("../../features/tree/componets/tree"),
  {
    ssr: false,
  }
);

export default function Tree() {



  return (
      <Stack spacing={3}>
      <Box size={'small'} >
        <Logo />
      </Box>

      <Stack height={'100%'} >
        <TreeComponent/>
      </Stack>
      </Stack>
  )
}
