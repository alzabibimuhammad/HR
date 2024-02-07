
import {  useQuery } from '@tanstack/react-query';
import GetuserNotes from '../api/GetUserNotes';

const useGetNotes = (id) => {
  const query = useQuery({
    queryKey: ['notes', id],
    queryFn: () => GetuserNotes(id),
  });

  return query;
}

export default useGetNotes
