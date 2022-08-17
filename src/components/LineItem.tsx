import { ITask } from './Interfaces';

interface Props {
  items: ITask[];
  handleChecked(id: number): void;
  handleDelete(id: number): void;
  item: ITask;
}
const LineItem = ({ handleChecked, handleDelete, item }: Props) => {
  return (
    <li className="bg-gray-400 py-2 px-2 mx-4  my-2" key={item.id}>
      <input
        className="rounded w-6 h-6"
        type="checkbox"
        onChange={() => handleChecked(item.id)}
        checked={item.checked}
      />
      <div className="py-2 px-2 text-2xl">{item.item}</div>
      <button
        className="rounded bg-red-500 hover:bg-red-600 py-2 px-2"
        onClick={() => handleDelete(item.id)}
      >
        Delete Task
      </button>
    </li>
  );
};

export default LineItem;
