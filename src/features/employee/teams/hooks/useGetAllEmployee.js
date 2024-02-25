
import { useQuery } from '@tanstack/react-query'
import GetAllUsers from '../api/GetAllEmployee'

const useGetAllUsers = () => {
  const query = useQuery({ queryKey: ['emp'], queryFn: GetAllUsers })

  return query
}

export default useGetAllUsers


