
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteUser from '../api/DeleteUser';

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:DeleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries("Users");
    },
  });
}
export default useDeleteUser

