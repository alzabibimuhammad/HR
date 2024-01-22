import { Stack } from '@mui/system'
import dynamic from 'next/dynamic';
import React from 'react'


const TreeComponent = dynamic(
  () => import("../../features/tree/componets/tree"),
  {
    ssr: false,
  }
);
export default function Tree() {
  return (

      <Stack height={'100%'} >
        <TreeComponent/>
      </Stack>
  )
}
