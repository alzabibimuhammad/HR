import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteRequest from "../../api/DeleteRequest";
import AccepteRequest from "../../api/AccepteRequest";

export const useAccepteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AccepteRequest,
    queryKey: ['Requests'],
    onSuccess: () => {
      queryClient.invalidateQueries("Requests");
    },
  });
};
