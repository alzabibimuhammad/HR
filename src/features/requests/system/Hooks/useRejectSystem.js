import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import RejectSystem from "../../api/RejectSystem";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useRejectSystem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:RejectSystem,
    queryKey: ['system'],
    onSuccess: (data) => {
      showSuccesToast(data.data.message,"")
      queryClient.invalidateQueries("system");
    },
    onError: (data) => {
      showErrorToast(data.data.message,"")
    },
  });
};
