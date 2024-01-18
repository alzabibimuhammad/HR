import { useMutation, useQueryClient } from "@tanstack/react-query";
import RejectRequest from "../../api/RejectRequest";

export const useRejectRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:RejectRequest,
    queryKey: ['Requests'],
    onSuccess: () => {
      queryClient.invalidateQueries("Requests");
    },
  });
};