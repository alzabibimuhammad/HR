import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetEventDay from "../api/EventByDay";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useGetEventByDay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetEventDay,
    onSuccess: (data) => {
      queryClient.invalidateQueries("event");
      console.log("useGetEventByDay ** onSuccess",data);
    },
    onError(error){
      console.log("🚀 ~ useGetEventByDay ~ error:", error)
      showErrorToast(data?.data?.message)
    }
  });
};
