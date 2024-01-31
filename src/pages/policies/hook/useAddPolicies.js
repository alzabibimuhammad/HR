import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddPolicies from "../api/AddPolicies";

export const useAddPolicies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddPolicies,
    onSuccess: () => {
      queryClient.invalidateQueries("AddPolicies");
      toast.success('Policies added successfully')
    },
  });
};
