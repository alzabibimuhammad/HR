import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
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
      showErrorToast("There is an error in the input. Please correct the error and try again ..",error.message)

    }
  });
};
