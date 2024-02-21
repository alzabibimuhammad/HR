import { Box } from '@mui/system'
import React from 'react'
import SecretariatsTable from 'src/features/employee/secretariats/componets/DataGrid'
import useGetSecretariats from 'src/features/employee/secretariats/hooks/useGetAllSecretariats'
import { CircularProgress } from '@mui/material'

export default function Secretariats() {
  const {data} = useGetSecretariats()

  return (
    <Box>
      {data?
        <SecretariatsTable rows={data?.data?.data}/>
      :   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

      <CircularProgress className='loading-rtl'/>
      </Box>}
    </Box>
  )
}
