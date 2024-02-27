import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteContract from "../../api/DeleteContract";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useDeleteContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteContract,
    onSuccess: (data) => {
      queryClient.invalidateQueries("contracts");
      showSuccesToast(data?.data?.message)
    },
    onError:(data)=>{
      showErrorToast(data?.data?.message)
    }
  });
};
