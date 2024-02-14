
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetPenalties from "../api/GetPenalties";

export const useGetPenalties = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetPenalties,
    onSuccess: () => {
      queryClient.invalidateQueries("penalty");
    },
  });
};



export default useGetPenalties
