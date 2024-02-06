import { useQuery } from '@tanstack/react-query'
import GetAllReviews from '../api/all'

const useShowAllReviews = () => {
  const query = useQuery({ queryKey: ['reviews'], queryFn: GetAllReviews })

  return query
}

export default useShowAllReviews
