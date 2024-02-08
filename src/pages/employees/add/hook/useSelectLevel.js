
import { useQuery } from '@tanstack/react-query'
import GetAllSelectBranch from '../api/SelectBranch'
import GetAllLevel from '../api/SelectLevel'

const useSelectLevel = () => {
  const query = useQuery({ queryKey: ['SelectLevel'], queryFn: GetAllLevel })

  return query
}

export default useSelectLevel

