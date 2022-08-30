let tasks = [
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

const addTask = (taskData: any) => {
  console.log('fixture task to add', taskData);
  const id = getTasks().length + 1;
  const newTask = {
    ...taskData,
    id,
  };
  console.log('fixture new task', newTask);
  tasks.push(newTask);
  return newTask;
};

const deleteTask = (deletionId: number) => {
  console.log('ID', deletionId);
  const taskToDelete = tasks.find(task => task.id === deletionId);
  console.log('task to delete', taskToDelete);
  tasks = tasks.filter(task => task.id !== taskToDelete.id);
  console.log('tasks', tasks);
};

export { getTasks, addTask, deleteTask };
