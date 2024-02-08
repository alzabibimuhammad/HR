import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import AddNote from "../api/Add";

export const useAddNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      toast.success("sucess")
    },
  });
};
