import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddAbsence from "../api/AddAbsence";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useAddAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddAbsence,
    onSuccess: (data) => {
      queryClient.invalidateQueries("Absence");
      showSuccesToast(data?.data?.message,"")

    },
  });
};
