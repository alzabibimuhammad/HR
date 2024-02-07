
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getRatingById from "../api/GetRatingById";
import { useDispatch } from "react-redux";
import { setRatingUser } from "src/store/apps/user";

export const useGetRatingById = () => {
  const queryClient = useQueryClient();
const dispatch=useDispatch()

  return useMutation({
    mutationFn:getRatingById,
    onSuccess: (data) => {
      dispatch(setRatingUser(data));
      queryClient.invalidateQueries("rating");
    },
  });
};


