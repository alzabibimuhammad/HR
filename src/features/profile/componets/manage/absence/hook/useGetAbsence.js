
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetAbsence from "../api/GetAbsence";

export const useGetAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetAbsence,
    onSuccess: () => {
      queryClient.invalidateQueries("absence");
    },
  });
};



export default useGetAbsence
