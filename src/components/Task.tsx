import { ITask } from './Interfaces';
import useDeleteTask from '../hooks/useDeleteTask';

interface Props {
  tasks: ITask[];
  handleChecked(id: number): void;
  task: ITask;
}

const Task = ({ handleChecked, task }: Props) => {
  const { mutateAsync, isLoading } = useDeleteTask();

  const removeTask = async () => {
    await mutateAsync(task.id);
  };

  return (
    <li className="bg-gray-400 py-2 px-2 mx-4  my-2" key={task.id}>
      <input
        className="rounded w-6 h-6"
        type="checkbox"
        onChange={() => handleChecked(task.id)}
        checked={task.checked}
      />
      <div className="py-2 px-2 text-2xl">{task.task}</div>
      <button
        className="rounded bg-red-500 hover:bg-red-600 py-2 px-2"
        onClick={() => removeTask()}
      >
        Delete Task
      </button>
    </li>
  );
};

export default Task;
