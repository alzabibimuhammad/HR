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
      console.log("onSuccess",data);
    },
    onError: (data) => {
      console.log("🚀 ~ useAddUsers ~ data:", data.response.data.message)
      queryClient.invalidateQueries("AddUsers");
      showErrorToast("Add Employee ",data.response.data.message)
      console.log("onSuccess",data);
    }
  });
};
