import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import RejectSystem from "../../api/RejectSystem";

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
      showSuccesToast(data.data.message,"")
    },
  });
};
