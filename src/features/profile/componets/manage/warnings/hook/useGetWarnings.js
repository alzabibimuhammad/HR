import { useQuery } from '@tanstack/react-query'
import GetWarnings from '../api/GetWarnings';

const useGetWarnings = (id,date) => {

console.log(id);

  const query = useQuery({
    queryKey: ['GetWarnings', id,date],
    queryFn: () => GetWarnings(id,date),
  });

  return query;
}


export default useGetWarnings
