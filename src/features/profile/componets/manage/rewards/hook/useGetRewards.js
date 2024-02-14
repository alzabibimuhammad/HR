
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetRewards from "../api/GetDeductions";

export const useGetRewards = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetRewards,
    onSuccess: () => {
      queryClient.invalidateQueries("reward");
    },
  });
};



export default useGetRewards
