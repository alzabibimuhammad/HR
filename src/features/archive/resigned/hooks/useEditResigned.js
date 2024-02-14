
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from 'src/utiltis/toastSecces';
import EditResigned from '../api/EditResigned';

const useEditResigned= () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditResigned,
    onSuccess: (data) => {
      queryClient.invalidateQueries("resigned");
    showSuccesToast(data.data.message)
    },
  });
}

export default useEditResigned
