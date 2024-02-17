import { useMutation, useQueryClient } from "@tanstack/react-query";
import { showSuccesToast } from "src/utiltis/toastSecces";
import EditAbsence from "../api/EditAbsence";

export const useEditAbsence = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditAbsence,
    onSuccess: (data) => {
      queryClient.invalidateQueries("absence");
      showSuccesToast(data.data.message,"")
    },
  });
};




