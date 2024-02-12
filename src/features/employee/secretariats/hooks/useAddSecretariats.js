
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { showSuccesToast } from 'src/utiltis/toastSecces';
import AddSecretariats from '../api/addSecretariats';

const useAddSecretariats = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:AddSecretariats,

    onSuccess: (data) => {
      queryClient.invalidateQueries("secretariats");
      showSuccesToast(data?.data?.message,"")
    },

  });
}
export default useAddSecretariats

