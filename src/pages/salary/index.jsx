import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import Users from 'src/features/employee/users/componets/DataGrid'
import SalaryDataGrid from 'src/features/salary/users/componets/DataGrid'
import useGetAllSalary from 'src/features/salary/users/hooks/useGetAllSalary'
import { useGetDataByMonth } from 'src/features/salary/users/hooks/useGetDataByMonth'

export default function Employees() {

  // const {data , loading } = useGetAllSalary()

  const {data:GetDataByMonth,mutate:getData}= useGetDataByMonth()

  useEffect(() => {
 getData('2023')
  }, [])




  return (
    <>
    {GetDataByMonth ? <SalaryDataGrid rows = {GetDataByMonth}/>:
    <Box height={'100%'} display={'center'} justifyContent={'center'}  alignItems={'center'} >
      <CircularProgress/>
    </Box>}
    </>
  )

}
