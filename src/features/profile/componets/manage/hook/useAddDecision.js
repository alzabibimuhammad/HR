import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddDecision from "../api/AddDecision";

export const useAddDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddDecision,
    onSuccess: () => {
      queryClient.invalidateQueries("Decision");
      toast.success('Decision added successfully')
    },
  });
};
