
import { useMutation, useQueryClient } from '@tanstack/react-query';
import editBranch from '../api/updateBranch';

const useUpdateBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:editBranch,
    onSuccess: () => {
      queryClient.invalidateQueries("branches");
    },
  });

}
export default useUpdateBranch

