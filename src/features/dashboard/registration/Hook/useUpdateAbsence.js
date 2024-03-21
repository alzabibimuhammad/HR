import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import UpdateAbsence from "../api/UpdateAbsence";

export const useUpdateAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:UpdateAbsence,
    onSuccess: () => {
      queryClient.invalidateQueries("UpdateAbsence");
      toast.success('Absence Update successfully')
    },
  });
};
