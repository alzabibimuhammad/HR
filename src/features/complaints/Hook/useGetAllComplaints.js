
import { useQuery } from '@tanstack/react-query'
import GetAllComplaints from '../api/getAllComplaints'

const useGetAllComplaints = () => {
  const query = useQuery({ queryKey: ['complaints'], queryFn: GetAllComplaints })

  return query
}

export default useGetAllComplaints
