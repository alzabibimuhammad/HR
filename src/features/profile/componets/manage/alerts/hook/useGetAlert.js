
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetAlert from "../api/GetAlert";
import { showSuccesToast } from "src/utiltis/toastSecces";
import { showErrorToast } from "src/utiltis/showErrorToast";

export const useGetAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetAlert,
    onSuccess (){
      queryClient.invalidateQueries("alert");
      showSuccesToast("Added Success")
    },
    onError(error) {
      showErrorToast("Something went wrong!")
    }
  });
};



export default useGetAlert
