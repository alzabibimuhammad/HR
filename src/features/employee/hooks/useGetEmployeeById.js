import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetEmployeeById from "../api/GetEmployeById";

export const useGetEmployeeById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetEmployeeById,
    onSuccess: () => {
      queryClient.invalidateQueries("profile");
    },
  });
};
