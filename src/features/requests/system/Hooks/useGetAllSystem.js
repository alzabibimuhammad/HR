
import { useQuery } from '@tanstack/react-query'
import GetAllInquiries from '../../api/GetAllSystem'

const useGetAllSystem = () => {
  const query = useQuery({ queryKey: ['system'], queryFn: GetAllInquiries })

  return query
}

export default useGetAllSystem
