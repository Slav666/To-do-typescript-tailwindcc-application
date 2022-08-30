import axios from 'axios';

import { useMutation, useQueryClient } from '@tanstack/react-query';
export default function useCreateTask() {
  const queryClient = useQueryClient();
  return useMutation(
    values => axios.post('/api/tasks/', values).then(res => res.data),
    {
      onSuccess: () => queryClient.invalidateQueries(['tasks']),
    },
  );
}
