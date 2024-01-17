
import { useQuery } from '@tanstack/react-query'
import GetViewContracts from '../../api/GetViewContracts'

const useViewContract = (id) => {
  const query = useQuery({
    queryKey: ['contract', id],
    queryFn: () => GetViewContracts(id),
  });

  return query;
}

export default useViewContract
