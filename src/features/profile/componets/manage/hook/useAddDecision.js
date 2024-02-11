import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddDecision from "../api/AddDecision";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useAddDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddDecision,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Decision");
      showSuccesToast(data.data.message,"")
    },
  });
};
