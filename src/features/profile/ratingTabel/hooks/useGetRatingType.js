import { useQuery } from '@tanstack/react-query'
import getRatingById from '../api/GetRatingType'

const useGetRattingtype = () => {
  const query = useQuery({ queryKey: ['type'], queryFn: getRatingById })

  return query
}

export default useGetRattingtype
