import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddUsers from "../api/AddUsers";

export const useAddUsers = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddUsers,
    onSuccess: () => {
      queryClient.invalidateQueries("AddUsers");
      toast.success('Users added successfully')
    },
  });
};
