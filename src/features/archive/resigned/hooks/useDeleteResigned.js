
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteResigned from '../api/DeleteResigned';

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:DeleteResigned,
    onSuccess: () => {
      queryClient.invalidateQueries("resigned");
    },
  });
}
export default useDeleteUser

