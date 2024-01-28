
import { useQuery } from '@tanstack/react-query'
import GetAllSelect from '../api/SelectInput'

const useSelectInput = () => {
  const query = useQuery({ queryKey: ['professional'], queryFn: GetAllSelect })

  return query
}

export default useSelectInput

