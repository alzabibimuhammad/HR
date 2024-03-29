
import { useQuery } from '@tanstack/react-query'
import GetEventByWeek from '../api/EventByWeek'

const useGetEventByWeek = () => {
  const query = useQuery({ queryKey: ['event'], queryFn: GetEventByWeek })

  return query
}

export default useGetEventByWeek
