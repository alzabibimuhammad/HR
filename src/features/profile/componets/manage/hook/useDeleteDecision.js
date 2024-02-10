import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteDecision from "../api/DeleteDecision";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useDeleteDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteDecision,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Decision");
      showSuccesToast(data.data.message,"")

    },
  });
};
