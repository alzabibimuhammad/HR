import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetEventDay from "../api/EventByDay";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useGetEventByDay = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetEventDay,
    onSuccess: (data) => {
      queryClient.invalidateQueries("event");
    },
    onError(error){
      showErrorToast(data?.data?.message)
    }
  });
};
