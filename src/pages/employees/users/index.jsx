import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import Users from 'src/features/employee/users/componets/DataGrid'
import useGetAllUsers from 'src/features/employee/users/hooks/useGetAllUsers'

export default function Employees() {

  const {data , loading } = useGetAllUsers()


  return (
    <>
    {data ? <Users rows = {data}/>:<Box height={'100%'} display={'center'} justifyContent={'center'}  alignItems={'center'} >
      <CircularProgress/>
    </Box>}
    </>
  )

}
