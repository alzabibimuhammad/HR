
import { useQuery } from '@tanstack/react-query'
import GetAllContracts from '../../api/GetAllContracts'

const useGetAllContracts = () => {
  const query = useQuery({ queryKey: ['contracts'], queryFn: GetAllContracts })

  return query
}

export default useGetAllContracts
