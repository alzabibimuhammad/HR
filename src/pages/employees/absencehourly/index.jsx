import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import useGetAllAbsence from 'src/features/employee/absence/hooks/useGetAllabsence'
import AbsenceHourlyTable from 'src/features/employee/absenceHourly/componets/DataGrid'

export default function AbsenceHourly() {

  const {data} = useGetAllAbsence()

  return (
    <>
    {data ? <AbsenceHourlyTable rows = {data}/>:<Box height={'100%'} display={'center'} justifyContent={'center'}  alignItems={'center'} >
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box>    </Box>}
    </>
  )

}
