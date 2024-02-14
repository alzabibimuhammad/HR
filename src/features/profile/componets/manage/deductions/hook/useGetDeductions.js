
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetDeductions from "../api/GetDeductions";

export const useGetDeductions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetDeductions,
    onSuccess: () => {
      queryClient.invalidateQueries("deductions");
    },
  });
};



export default useGetDeductions
