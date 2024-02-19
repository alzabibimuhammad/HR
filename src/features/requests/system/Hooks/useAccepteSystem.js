import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import AcceptSystem from "../../api/AccepteSystem";

export const useAccepteSystem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AcceptSystem,
    onSuccess: (data) => {
      queryClient.invalidateQueries("system");
      showSuccesToast(data.data.message,"")
    },
    onError(error){
      showErrorToast(error,"")
    }
  });
};
