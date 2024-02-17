import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";
import DeleteAbsence from "../api/DeleteAbsence";

export const useDeleteAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteAbsence,
    onSuccess: (data) => {
      queryClient.invalidateQueries("absence");
      showSuccesToast(data.data.message,"")

    },
    onError: (data)=>{
      showErrorToast("",data.message)
    }
  });
};
