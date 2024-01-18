
import { useQuery } from '@tanstack/react-query'
import GetAllTeams from '../api/GetAllTeams'

const useGetAllEmployee = () => {
  const query = useQuery({ queryKey: ['employees'], queryFn: GetAllTeams })

  return query
}

export default useGetAllEmployee


