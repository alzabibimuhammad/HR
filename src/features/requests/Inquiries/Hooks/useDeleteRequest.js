import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteRequest from "../../api/DeleteRequest";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useDeleteRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteRequest,

    onSuccess: (data) => {
      queryClient.invalidateQueries("Request");
      showSuccesToast("","Deleted successfuly")
    },
    onError: (data) => {
      console.log("🚀 ~ useDeleteRequest ~ data:", data)
      showErrorToast(data?.response?.data?.data,"")
    }
  });
};
