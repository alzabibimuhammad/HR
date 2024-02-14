import { useQuery } from '@tanstack/react-query'
import GetAbsence from '../api/GetAbsence';

const useGetAbsence = (id) => {
  const query = useQuery({
    queryKey: ['absence', id],
    queryFn: () => GetAbsence(id),
  });

  return query;
}

export default useGetAbsence
