import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeletedAbsenceById from "../api/DeleteAbsenceById";

export const useDeleteAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeletedAbsenceById,
    onSuccess: () => {
      queryClient.invalidateQueries("Teams");
    },
  });
};
