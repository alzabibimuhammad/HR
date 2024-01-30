
import { useQuery } from '@tanstack/react-query'
import GetMembersHierarchy from '../api/MembersHierarchy'

const useGetMembersHierarchy = () => {
  const query = useQuery({ queryKey: ['tree'], queryFn: GetMembersHierarchy })

  return query
}

export default useGetMembersHierarchy
