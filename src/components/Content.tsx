import ItemList from './ItemList';
import { ITask } from './Interfaces';

interface Props {
  items: ITask[];
  handleChecked(id: number): void;
  handleDelete(id: number): void;
}

const Content = ({ items, handleChecked, handleDelete }: Props) => {
  return (
    <main className="container mx-auto bg-grey-200 px-4">
      <p className="bg-gray-400 py-4 px-2 text-4xl my-2 text-center ">
        List All Tasks
      </p>
      <ItemList
        items={items}
        handleChecked={handleChecked}
        handleDelete={handleDelete}
      />
    </main>
  );
};

export default Content;
