import TaskList from './TaskList';
import { ITask } from './Interfaces';

interface Props {
  tasks: ITask[];
}

const Content = ({ tasks }: Props) => {
  return (
    <main className="container px-4">
      <p className=" py-4 px-2 text-4xl my-2 text-center ">List All Tasks</p>
      <TaskList tasks={tasks} />
    </main>
  );
};

export default Content;
