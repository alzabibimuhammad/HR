
import { useMutation, useQueryClient } from "@tanstack/react-query";
import GetAlert from "../api/GetAlert";

export const useGetAlert = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn:GetAlert,
    onSuccess: () => {
      queryClient.invalidateQueries("alert");
    },
  });
};



export default useGetAlert
