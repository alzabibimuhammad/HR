import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import ReportByDay from "../api/reportByDay";

export const useReportByDay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:ReportByDay,
    onSuccess: () => {
      queryClient.invalidateQueries("ReportDay");
      toast.success('Report Done')
    },
  });
};
