
import { useQuery } from '@tanstack/react-query'
import GetAllSecretariats from '../api/getAllSecretariats'

const useGetSecretariats = () => {
  const query = useQuery({ queryKey: ['secretariats'], queryFn: GetAllSecretariats })

  return query
}

export default useGetSecretariats
