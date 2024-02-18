
import { useQuery } from '@tanstack/react-query'
import GetAllRequest from '../../api/GetAllrequest'

const useGetAllInquiries = () => {
  const query = useQuery({ queryKey: ['Request'], queryFn: GetAllRequest })

  return query
}

export default useGetAllInquiries
