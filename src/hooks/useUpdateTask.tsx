import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useUpdateTask() {
  const queryClient = useQueryClient();
  return useMutation(
    task => axios.patch(`/api/tasks/${task.id}`, task).then(res => res.data),
    {
      onSuccess: async id => {
        queryClient.invalidateQueries(['tasks']);
        await queryClient.invalidateQueries(['task', id]);
      },
    },
  );
}
