import { useMutation, useQueryClient } from "@tanstack/react-query";
import AccepteRequest from "../../api/AccepteRequest";

export const useAccepteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AccepteRequest,
    queryKey: ['Request'],
    onSuccess: () => {
      queryClient.invalidateQueries("Request");
    },
  });
};
