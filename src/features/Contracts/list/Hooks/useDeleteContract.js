import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteContract from "../../api/DeleteContract";

export const useDeleteContract = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteContract,
    onSuccess: () => {
      queryClient.invalidateQueries("contracts");
    },
  });
};
