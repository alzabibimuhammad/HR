import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import AddAbsence from "../api/AddAbsence";

export const useAddAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddAbsence,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Decision");
      showSuccesToast(data.data.message,"")
    },
  });
};
