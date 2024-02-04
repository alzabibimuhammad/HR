
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DataByMonth from "../api/DataByMonth";

export const useGetDataByMonth = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:DataByMonth,
    onSuccess: () => {
      queryClient.invalidateQueries("salary");
    },
  });
};
