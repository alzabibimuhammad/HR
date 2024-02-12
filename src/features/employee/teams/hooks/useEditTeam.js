import { useMutation, useQueryClient } from "@tanstack/react-query";

import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";
import EditTeam from "../api/EditTeam";

export const useEditTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries("teams");
      showSuccesToast('',data?.data?.message)
    },
    onError: (data) =>{
      showErrorToast(data.message)
    }
  });

};
