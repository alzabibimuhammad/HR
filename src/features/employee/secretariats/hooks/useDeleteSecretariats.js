
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteSecretariats from '../api/deleteSecretariats';
import { showSuccesToast } from 'src/utiltis/toastSecces';

const useDeleteSecretariats = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:DeleteSecretariats,
    onSuccess: (data) => {
      queryClient.invalidateQueries("secretariats");
      showSuccesToast(data?.data?.message,"")

    },
  });
}
export default useDeleteSecretariats

