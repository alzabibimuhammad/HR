import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteDecision from "../api/DeleteDecision";

export const useDeleteDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteDecision,
    onSuccess: () => {
      queryClient.invalidateQueries("Decision");
    },
  });
};
