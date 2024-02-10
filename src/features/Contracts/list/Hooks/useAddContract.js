import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddContract from "../../api/AddContract";
import toast from "react-hot-toast";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useAddContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddContract,
    onSuccess: (data) => {
      queryClient.invalidateQueries("contracts");
      showSuccesToast("Add Contract ",data?.data?.success)
    },
    onError(error){
      showErrorToast("Add Contract ",data?.data?.success)
    }
  });
};
