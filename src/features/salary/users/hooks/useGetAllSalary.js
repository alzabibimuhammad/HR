
import { useQuery } from '@tanstack/react-query'
import GetAllSalary from '../api/GetAllSalary'

const useGetAllSalary = () => {
  const query = useQuery({ queryKey: ['Salary'], queryFn: GetAllSalary })

  return query
}

export default useGetAllSalary
