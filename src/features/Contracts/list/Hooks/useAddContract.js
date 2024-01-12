import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddContract from "../../api/AddContract";
import toast from "react-hot-toast";

export const useAddContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddContract,
    onSuccess: () => {
      queryClient.invalidateQueries("contracts");
      toast.success('Contract added successfully')
    },
  });
};
