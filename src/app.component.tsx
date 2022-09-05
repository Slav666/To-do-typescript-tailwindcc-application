import React, { FC } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Content from './components/Content';
import { ITask } from './components/Interfaces';
import useCreateTask from './hooks/useCreateTask';
import Footer from './layout/footer.component';

const App: FC = () => {
  const { mutateAsync, isLoading } = useCreateTask();
  const saveTask = async (form: void) => {
    console.log('form', form);
    await mutateAsync(form);
  };
  return (
    <div className="container bg-gray-600 mx-auto pb-8">
      <Header />
      <AddTask onSubmit={saveTask} />
      <Content tasks={[]} />
      <Footer />
    </div>
  );
};

export default App;
