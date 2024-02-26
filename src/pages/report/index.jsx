import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'
import CollapsibleTable from 'src/features/Report/componets/table'
import useGetAllUsers from 'src/features/employee/users/hooks/useGetAllUsers'

const ReportPage = () => {
  const {data} =  useGetAllUsers()

  return(
    <>
    {data ? <CollapsibleTable   Data={data?.data?.data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>}
    </>
  )
}

export default ReportPage
