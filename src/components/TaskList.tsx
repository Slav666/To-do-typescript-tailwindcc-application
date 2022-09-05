/* eslint-disable prettier/prettier */
import React from 'react';
import Task from './Task';
import { ITask } from './Interfaces';
import {  useQuery } from '@tanstack/react-query';

interface Props {
  tasks: ITask[];
}

const TaskList = ({ tasks }: Props) => {

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
    <ul className=" py-2">
      {data.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks} checked={undefined}        />
      ))}
    </ul>
    </>
  );
};

export default TaskList;
