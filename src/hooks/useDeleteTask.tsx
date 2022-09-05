import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteTask() {
  const queryClient = useQueryClient();
  return useMutation(
    taskId => axios.delete(`/api/tasks/${taskId}`).then(res => res.data),
    {
      onSuccess: () => queryClient.invalidateQueries(['tasks']),
    },
  );
}
