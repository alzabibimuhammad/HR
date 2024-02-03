
import { useQuery } from '@tanstack/react-query'
import GetEventByMonth from '../api/EventByMonth'
import GetDataByMonth from '../api/DataByMonth'

const useGetDataByMonth = () => {
  const query = useQuery({ queryKey: ['date'], queryFn: GetDataByMonth })

  return query
}

export default useGetDataByMonth

