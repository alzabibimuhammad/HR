
import { useQuery } from '@tanstack/react-query'
import GetAllDepartment from '../api/GetAllDepartment'

const useGetAllDepartment = () => {
  const query = useQuery({ queryKey: ['GetAllDepartment'], queryFn: GetAllDepartment })

  return query
}

export default useGetAllDepartment
