import { useQuery } from '@tanstack/react-query'
import ShowAllBranches from '../api/ShowAllBranches'

const useShowAllBranches = () => {
  const query = useQuery({ queryKey: ['branches'], queryFn: ShowAllBranches })

  return query
}

export default useShowAllBranches
