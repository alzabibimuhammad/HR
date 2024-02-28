import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditUsers from "../api/EditUser";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useEditUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditUsers,
    onSuccess: (data) => {
      queryClient.invalidateQueries("AddUsers");
      showSuccesToast("Edit Employee ",data?.data?.success)
    },
    onError: (error) => {
      
      error.response.data.errors && error.response.data.errors.map((error)=>showErrorToast("There is an error in the input",error))


    }
  });
};
