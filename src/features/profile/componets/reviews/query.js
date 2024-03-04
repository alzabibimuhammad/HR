import { useQuery } from '@tanstack/react-query'
import GetAllReviews from './api';

const useGetAllReviews = (id,date) => {
  const query = useQuery({
    queryKey: ['ReportDay', id,date],
    queryFn: () => GetAllReviews(id,date),
  });

  return query;
}

export default useGetAllReviews
