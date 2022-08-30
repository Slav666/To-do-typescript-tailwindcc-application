import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useSaveTask() {
  const queryClient = useQueryClient();
  return useMutation(
    values =>
      axios.patch(`/api/tasks/${values.id}`, values).then(res => res.data),
    {
      onMutate: values => {
        const previousTask = queryClient.getQueryData(['task', values.id]);

        queryClient.setQueryData(['task', values.id], (old: any) => ({
          ...old,
          ...values,
        }));

        return () =>
          queryClient.setQueryData(['task', values.id], previousTask);
      },
      onError: (error, values, rollback) => rollback(),
      onSuccess: async values => {
        queryClient.refetchQueries(['tasks']);
        await queryClient.refetchQueries(['task', values.id]);
      },
    },
  );
}
