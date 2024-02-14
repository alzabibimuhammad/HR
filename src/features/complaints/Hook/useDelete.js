
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DeleteComplaints from '../api/deletComplaints';

const useDeleteComplaints = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn:DeleteComplaints,
    onSuccess: () => {
      queryClient.invalidateQueries("complaints");
    },
  });
}
export default useDeleteComplaints

