import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import Absence from 'src/features/employee/absence/componets/DataGrid'
import useGetAllAbsence from 'src/features/employee/absence/hooks/useGetAllabsence'

export default function Employees() {

  const {data} = useGetAllAbsence()

  return (
    <>
    {data ? <Absence rows = {data}/>:<Box height={'100%'} display={'center'} justifyContent={'center'}  alignItems={'center'} >
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box>    </Box>}
    </>
  )

}
