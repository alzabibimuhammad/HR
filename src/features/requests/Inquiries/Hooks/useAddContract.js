import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddRequest from "../../api/AddRequest";

export const useAddContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddRequest,
    onSuccess: () => {
      queryClient.invalidateQueries("Request");
      toast.success('Request added successfully')
    },
  });
};
