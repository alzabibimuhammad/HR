
import { useMutation, useQueryClient } from '@tanstack/react-query';
import AddBranch from '../api/addBranch';

const useAddBranch = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddBranch,
    onSuccess: () => {
      queryClient.invalidateQueries("branches");
    },
  });

}
export default useAddBranch

