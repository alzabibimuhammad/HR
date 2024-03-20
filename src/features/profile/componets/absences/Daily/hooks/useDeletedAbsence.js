import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeletedAbsenceById from "../api/DeleteAbsenceById";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useDeleteAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeletedAbsenceById,

    onSuccess: (data) => {
      queryClient.invalidateQueries("Absence");
      showSuccesToast(data?.data?.message,"")
    },

  });
};
