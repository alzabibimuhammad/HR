import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteNote from "../api/Delete";
import toast from "react-hot-toast";

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success("sucess")
    },
  });
};
