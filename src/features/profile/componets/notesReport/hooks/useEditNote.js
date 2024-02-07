import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditNote from "../api/Edit";

export const useEditNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
};
