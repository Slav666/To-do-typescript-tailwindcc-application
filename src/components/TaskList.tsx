/* eslint-disable prettier/prettier */
import React from 'react';
import Task from './Task';
import { ITask } from './Interfaces';
import {  useQuery } from '@tanstack/react-query';

interface Props {
  tasks: ITask[];
  handleChecked(id: number): void;
}

const TaskList = ({ handleChecked, tasks }: Props) => {

  const fetchTasks = async () => {
    const response = await fetch(`/api/tasks/`);
    const data = await response.json();
    return data
  };

  const { data, status } = useQuery(['tasks'], fetchTasks);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <>
    <ul className="bg-gray-200 py-2">
      {data.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
          handleChecked={handleChecked}
          tasks={tasks}
        />
      ))}
    </ul>
    </>
  );
};

export default TaskList;
