
import { useQuery } from '@tanstack/react-query'
import GetUser from '../api/showUser'

const useGetUser = (id) => {
  const query = useQuery({ queryKey: ['ShowUser',id], queryFn:()=> GetUser(id) })

  return query
}

export default useGetUser

