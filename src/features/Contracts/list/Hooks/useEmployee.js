
import { useQuery } from '@tanstack/react-query'
import GetEmployeeDropDawn from '../../api/GetEmployeesDropDown'

const useGetEmployeeDropDown = () => {
  const query = useQuery({ queryKey: ['employee'], queryFn: GetEmployeeDropDawn })

  return query
}

export default useGetEmployeeDropDown
