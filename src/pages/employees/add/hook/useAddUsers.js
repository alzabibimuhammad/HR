import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddUsers from "../api/AddUsers";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useAddUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddUsers,
    onSuccess: (data) => {
      queryClient.invalidateQueries("AddUsers");
      showSuccesToast("Add Employee ",data?.data?.success)
    },
    onError: (error) => {
      
      error.response.data.errors && error.response.data.errors.map((error)=>showErrorToast("There is an error in the input",error))


    }
  });
};
