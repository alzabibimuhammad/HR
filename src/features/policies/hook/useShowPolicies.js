
import { useQuery } from '@tanstack/react-query'
import GetAllPolicy from '../api/ShowPolicies'

const useShowPolicies = () => {
  const query = useQuery({ queryKey: ['Policy'], queryFn: GetAllPolicy })

  return query
}

export default useShowPolicies


