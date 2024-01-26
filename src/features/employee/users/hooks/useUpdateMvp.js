
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UpdateMvp from '../api/UpdateMvp'

const useUpdateMvp = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:UpdateMvp,
    onSuccess: () => {
      queryClient.invalidateQueries("Mvp");
    },
  });
}
export default useUpdateMvp

