import TaskList from './TaskList';
import { ITask } from './Interfaces';

interface Props {
  tasks: ITask[];
  handleChecked(id: number): void;
}

const Content = ({ tasks, handleChecked }: Props) => {
  return (
    <main className="container mx-auto bg-grey-200 px-4">
      <p className="bg-gray-400 py-4 px-2 text-4xl my-2 text-center ">
        List All Tasks
      </p>
      <TaskList tasks={tasks} handleChecked={handleChecked} />
    </main>
  );
};

export default Content;
