
import { useQuery } from '@tanstack/react-query'
import GetAllTeams from '../api/GetAllTeams'

const useGetAllTeam = () => {
  const query = useQuery({ queryKey: ['Teams'], queryFn: GetAllTeams })

  return query
}

export default useGetAllTeam


