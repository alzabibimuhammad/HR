
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EditEmployee from '../api/EditEmployee';
import { showSuccesToast } from 'src/utiltis/toastSecces';

const useEditEmployee = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditEmployee,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Users");
    showSuccesToast(data.data.message)
    },
  });
}

export default useEditEmployee
