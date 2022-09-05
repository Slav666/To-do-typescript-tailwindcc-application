import React, { useState } from 'react';
import { ITask } from './Interfaces';
import useDeleteTask from '../hooks/useDeleteTask';
import useUpdateTask from '../hooks/useUpdateTask';

interface Props {
  checked: any;
  tasks: ITask[];
  task: ITask;
}

const Task = ({ task }: Props) => {
  const { mutateAsync: deleteTasks, isLoading: a } = useDeleteTask();
  const { mutateAsync: updateTasks, isLoading: b } = useUpdateTask();

  const [values, setValues] = useState('');

  const removeTask = async (): Promise<void> => {
    await deleteTasks(task.id);
  };

  const updateTask = async (task: Props): Promise<void> => {
    const updatedTask: Props = {
      ...task,
      checked: !task.checked,
    };
    await updateTasks(updatedTask);
  };

  return (
    <li className=" bg-gray-400 py-2 px-2 mx-4 my-2 mx-60" key={task.id}>
      <div className="flex">
        <p className="mx-2">Task completed:</p>
        <input
          className="rounded w-6 h-6"
          type="checkbox"
          name="checked"
          value={values.checked}
          onChange={() => updateTask(task)}
          checked={task.checked}
        />
      </div>
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
