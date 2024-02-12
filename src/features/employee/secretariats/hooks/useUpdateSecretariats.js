
import { useMutation, useQueryClient } from '@tanstack/react-query';
import UpdateSecretariats from '../api/updateSecretariats';
import { showSuccesToast } from 'src/utiltis/toastSecces';

const useUpdateSecretariats = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:UpdateSecretariats,

    onSuccess: (data) => {
      queryClient.invalidateQueries("secretariats");
      showSuccesToast(data?.data?.message,"")
    },

  });
}
export default useUpdateSecretariats

