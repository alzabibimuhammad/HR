import { useQuery } from '@tanstack/react-query'
import getRatingById from '../api/GetRatingById'

const useGetRatingById = () => {
  const query = useQuery({ queryKey: ['Rating'], queryFn: getRatingById })

  return query
}

export default useGetRatingById

