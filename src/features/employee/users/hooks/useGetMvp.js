
import { useQuery } from '@tanstack/react-query'
import GetMvp from '../api/GetMpv'

const useGetMvp = () => {
  const query = useQuery({
    queryKey: ['Mvp']
    ,queryFn: GetMvp
 })

  return query
}

export default useGetMvp
