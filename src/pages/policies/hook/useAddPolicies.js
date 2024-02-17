import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddPolicies from "../api/AddPolicies";
import { showErrorToast } from "src/utiltis/showErrorToast";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useAddPolicies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddPolicies,
    onSuccess: (data) => {
      queryClient.invalidateQueries("AddPolicies");
      showSuccesToast("",'Policies added successfully')

    },
    onError:(data)=>{
      showErrorToast("","Policies added Error , check input")
    }
  });
};
