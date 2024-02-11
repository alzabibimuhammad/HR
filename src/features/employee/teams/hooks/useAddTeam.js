import { useMutation, useQueryClient } from "@tanstack/react-query";
import AddTeam from "../api/AddTeam";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useAddTeam = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:AddTeam,
    onSuccess: (data) => {
      queryClient.invalidateQueries("teams");
      showSuccesToast('',data?.data?.data)
    },
    onError: (data) =>{
      showErrorToast(data.message)
    }
  });

};
