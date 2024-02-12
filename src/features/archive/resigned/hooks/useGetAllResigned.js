
import { useQuery } from '@tanstack/react-query'
import GetAllResigned from '../api/GetAllResigned'

const useGetAllResigned= () => {
  const query = useQuery({ queryKey: ['resigned'], queryFn: GetAllResigned })

  return query
}

export default useGetAllResigned
