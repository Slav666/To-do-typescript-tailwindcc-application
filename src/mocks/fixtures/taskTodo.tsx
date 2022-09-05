/* eslint-disable prettier/prettier */
import {ITask} from '../../components/Interfaces'
let tasks: ITask[] = [
  {
    id: 1,
    checked: false,
    task: 'Car',
  },
  {
    id: 2,
    checked: false,
    task: 'Bike',
  },
  {
    id: 3,
    checked: true,
    task: 'Tank',
  },
  {
    id: 4,
    checked: false,
    task: 'Slav',
  },
  {
    id: 5,
    checked: false,
    task: 'Lol',
  },
];

const getTasks = () => tasks;

const addTask = (taskData: ITask) => {
  const id = getTasks().length + 1;
  const newTask = {
    ...taskData,
    id,
  };
  tasks.push(newTask);
  return newTask;
};
const updateChecked = ( updatedTask: { id: number; }, ) => {
  const listTasks = tasks.map(
    task => (task.id === updatedTask.id ? updatedTask : task),
  );
  tasks = listTasks;
};
const deleteTask = (deletionId: number) => {
  const taskToDelete: ITask = tasks.find(task => task.id === deletionId);
  tasks = tasks.filter(task => task.id !== taskToDelete.id);
};

export { getTasks, addTask, deleteTask, updateChecked };
