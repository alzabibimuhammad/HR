import { useQuery } from '@tanstack/react-query'
import GetDecision from '../api/GetDecision';

const useGetDecision = (id) => {
  const query = useQuery({
    queryKey: ['Decision', id],
    queryFn: () => GetDecision(id),
  });

  return query;
}

export default useGetDecision
