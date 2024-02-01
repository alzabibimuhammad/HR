import Users from 'src/features/employee/users/componets/DataGrid'
import SalaryDataGrid from 'src/features/salary/users/componets/DataGrid'
import useGetAllSalary from 'src/features/salary/users/hooks/useGetAllSalary'

export default function Employees() {

  const {data , loading } = useGetAllSalary()




  return (
    <>
    {data ? <SalaryDataGrid rows = {data}/>:null}
    </>
  )

}
