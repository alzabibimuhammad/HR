
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetWarnings from "../api/GetWarnings";

export const useGetWarnings = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetWarnings,
    onSuccess: () => {
      queryClient.invalidateQueries("warnings");
    },
  });
};



export default useGetWarnings
