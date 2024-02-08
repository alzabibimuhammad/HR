import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditDecision from "../api/EditDecision";

export const useEditDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditDecision,
    onSuccess: () => {
      queryClient.invalidateQueries("Decision");
    },
  });
};




