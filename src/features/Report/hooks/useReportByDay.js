import { useMutation, useQueryClient } from "@tanstack/react-query";
import ReportByDay from "../api/reportByDay";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useReportByDay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:ReportByDay,
    onSuccess: () => {
      queryClient.invalidateQueries("ReportDay");

      // showSuccesToast("","Report Done")

    },
  });
};
