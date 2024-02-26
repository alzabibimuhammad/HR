import { useMutation, useQueryClient } from "@tanstack/react-query";
import EditPolicies from "../api/EditPolicies";
import { showSuccesToast } from "src/utiltis/toastSecces";

export const useEditPolicies = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:EditPolicies,
    onSuccess: (data) => {

      queryClient.invalidateQueries("Update Policies");
      showSuccesToast("",'Policies Update successfully')

    },
    onError:(error) => {



    }
  });
};
