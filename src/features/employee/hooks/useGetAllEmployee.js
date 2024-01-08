
import { useQuery } from '@tanstack/react-query'
import GetAllEmployee from '../api/GetAllEmployee'

const useGetAllEmployee = () => {
  const query = useQuery({ queryKey: ['country'], queryFn: GetAllEmployee })

  return query
}

export default useGetAllEmployee
