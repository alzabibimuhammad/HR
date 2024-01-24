import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddTeam from "../api/AddTeam";

export const useAddTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddTeam,
    onSuccess: () => {
      queryClient.invalidateQueries("teams");
      toast.success('teams added successfully')
    },
  });
};
