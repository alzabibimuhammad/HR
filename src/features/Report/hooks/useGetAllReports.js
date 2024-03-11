import { useMutation, useQueryClient } from "@tanstack/react-query";
import Reports from "../api/GetAllReports";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useReports = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:Reports,
    onSuccess: () => {
      queryClient.invalidateQueries("Reports");

      // showSuccesToast("","Report Done")

    },
  });
};
