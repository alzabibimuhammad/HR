
import { useQuery } from '@tanstack/react-query'
import GetAllUsers from '../api/GetAllUsers'

const useGetAllUsers = () => {
  const query = useQuery({ queryKey: ['Users'], queryFn: GetAllUsers })

  return query
}

export default useGetAllUsers
