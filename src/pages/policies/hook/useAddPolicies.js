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
    onError:(error)=>{
      error.response.data.errors && error.response.data.errors.map((error)=>showErrorToast("There is an error in the input",error))
    }
  });
};
