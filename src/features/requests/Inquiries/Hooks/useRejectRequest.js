import { useMutation, useQueryClient } from "@tanstack/react-query";
import RejectRequest from "../../api/RejectRequest";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useRejectRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:RejectRequest,
    queryKey: ['Request'],
    onSuccess: (data) => {
      showSuccesToast(data.data.data.message)
      queryClient.invalidateQueries("Request");
    },
  });
};
