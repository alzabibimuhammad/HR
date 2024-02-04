import { useMutation, useQueryClient } from "@tanstack/react-query";
import getRatingById from "../api/GetRatingById";

export const useGetRatingById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:getRatingById,
    onSuccess: () => {
      queryClient.invalidateQueries("Rating");
    },
  });
};
