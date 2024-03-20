import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddDecision from "../api/AddDecision";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { ShowErrorToast } from "src/utiltis/showErrorToast";

export const useAddDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddDecision,
    onSuccess: (data) => {
      queryClient.invalidateQueries("AddDecisionn");
      showSuccesToast('',data?.data?.message)
    },
    onError: (data) => {

      ShowErrorToast(data.message)
    }
  });

};
