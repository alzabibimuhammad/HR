
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteUser from '../api/DeleteUser';
import { showErrorToast } from 'src/utiltis/showErrorToast';
import { showSuccesToast } from 'src/utiltis/toastSecces';

const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteUser,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Users");
      showSuccesToast("","success")
    },
    onError:(data) =>{
      queryClient.invalidateQueries("Users");
      showErrorToast("","Delete failed")
    }
  });
}

export default useDeleteUser

