import { Box } from '@mui/system'
import React from 'react'
import SecretariatsTable from 'src/features/employee/secretariats/componets/DataGrid'
import useGetSecretariats from 'src/features/employee/secretariats/hooks/useGetAllSecretariats'

export default function Secretariats() {
  const {data} = useGetSecretariats()

  return (
    <Box>
        <SecretariatsTable rows={data?.data?.data}/>
    </Box>
  )
}
