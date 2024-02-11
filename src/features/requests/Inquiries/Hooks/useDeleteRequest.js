import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteRequest from "../../api/DeleteRequest";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useDeleteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteRequest,
    onSuccess: (data) => {
      console.log("🚀 ~ useDeleteRequest ~ data):", data)
      queryClient.invalidateQueries("Request");
      showSuccesToast()
    },
  });
};
