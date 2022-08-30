import React, { FC } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Content from './components/Content';
import { ITask } from './components/Interfaces';
import useCreateTask from './hooks/useCreateTask';

const App: FC = () => {
  const { mutateAsync, isLoading } = useCreateTask();
  const saveTask = async form => {
    await mutateAsync(form);
  };
  return (
    <div className="container mx-auto px-20 bg-blue-400 pb-8">
      <Header />
      <AddTask onSubmit={saveTask} />
      <Content />
    </div>
  );
};

export default App;
