
import { useQuery } from '@tanstack/react-query'
import GetAllData from '../api/GetDataRegister'

const useGetAllData = () => {
  const query = useQuery({ queryKey: ['register'], queryFn: GetAllData })

  return query
}

export default useGetAllData
