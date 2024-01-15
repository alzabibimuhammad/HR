import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetEventDay from "../api/EventByDay";

export const useGetEventByDay = () => {
  const queryClient = useQueryClient();
  console.log("🚀 ~ useGetEventByDay ~ queryClient:", queryClient)

  return useMutation({
    mutationFn:GetEventDay,
    onSuccess: () => {
      queryClient.invalidateQueries("event");
    },
  });
};
