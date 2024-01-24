
import { useQuery } from '@tanstack/react-query'
import GetAllAbsence from '../api/GetAllAbsence'


const useGetAllAbsence = () => {
  const query = useQuery({ queryKey: ['Absence'], queryFn: GetAllAbsence })

  return query
}

export default useGetAllAbsence
