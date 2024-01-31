
import { useQuery } from '@tanstack/react-query'
import GetEventByMonth from '../api/EventByMonth'

const useGetEventByMonth = () => {
  const query = useQuery({ queryKey: ['event'], queryFn: GetEventByMonth })

  return query
}

export default useGetEventByMonth
  
