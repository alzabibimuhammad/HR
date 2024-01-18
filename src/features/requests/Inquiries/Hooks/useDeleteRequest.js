import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteRequest from "../../api/DeleteRequest";

export const useDeleteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("Request");
    },
  });
};
