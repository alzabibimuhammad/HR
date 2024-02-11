import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditDecision from "../api/EditDecision";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useEditDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditDecision,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Decision");
      showSuccesToast(data.data.message,"")
    },
  });
};




