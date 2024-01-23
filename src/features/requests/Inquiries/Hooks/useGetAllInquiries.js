
import { useQuery } from '@tanstack/react-query'
import GetAllInquiries from '../../api/GetAllInquiries'

const useGetAllInquiries = () => {
  const query = useQuery({ queryKey: ['Request'], queryFn: GetAllInquiries })

  return query
}

export default useGetAllInquiries
