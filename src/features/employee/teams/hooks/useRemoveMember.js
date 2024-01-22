import { useMutation, useQueryClient } from "@tanstack/react-query";
import RemoveMember from "../api/RemoveMember";

export const useRemoveMember = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:RemoveMember,
    onSuccess: () => {
      queryClient.invalidateQueries("Teams");
    },
  });
};
