
import { useQuery } from '@tanstack/react-query'
import GetEventByMonth from '../api/EventByMonth'

const useGetEventByMonth = () => {
  const query = useQuery({ queryKey: ['EventMonth'], queryFn: GetEventByMonth })

  return query
}

export default useGetEventByMonth
