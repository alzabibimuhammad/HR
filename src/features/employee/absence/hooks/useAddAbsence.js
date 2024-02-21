import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddAbsence from "../api/AddAbsence";

export const useAddAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddAbsence,
    onSuccess: () => {
      queryClient.invalidateQueries("Absence");
    },
  });
};
