import { useMutation, useQueryClient } from "@tanstack/react-query";
import AccepteRequest from "../../api/AccepteRequest";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useAccepteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AccepteRequest,

    onSuccess: (data) => {
      queryClient.invalidateQueries("Request");
      showSuccesToast(data.data.data.message)
    },
  });
};
