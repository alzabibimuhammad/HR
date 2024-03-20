
import { useQuery } from '@tanstack/react-query'
import GetAllAbsenceById from '../api/GetAbsenceById';

const useViewGetAbsence = (id) => {
  const query = useQuery({
    queryKey: ['Absence', id],
    queryFn: () => GetAllAbsenceById(id),
  });

  return query;
}

export default useViewGetAbsence
