import { useMutation, useQueryClient } from "@tanstack/react-query";
import DeleteTeam from "../api/DeleteTeam";

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DeleteTeam,
    onSuccess: () => {
      queryClient.invalidateQueries("Teams");
    },
  });
};
