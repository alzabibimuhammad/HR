
import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteBranch from '../api/deleteBranch';

const useDeleteBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteBranch,
    onSuccess: () => {
      queryClient.invalidateQueries("branches");
    },
  });

}
export default useDeleteBranch

