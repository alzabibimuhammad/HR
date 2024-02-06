
import { useQuery } from '@tanstack/react-query'
import GetAllSelectBranch from '../api/SelectBranch'

const useSelectBranch = () => {
  const query = useQuery({ queryKey: ['SelectBranch'], queryFn: GetAllSelectBranch })

  return query
}

export default useSelectBranch

