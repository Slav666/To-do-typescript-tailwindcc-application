let tasks = [
  {
    id: 1,
    checked: false,
    item: 'Car',
  },
  {
    id: 2,
    checked: false,
    item: 'Bike',
  },
  {
    id: 3,
    checked: true,
    item: 'Tank',
  },
  {
    id: 4,
    checked: false,
    item: 'Car',
  },
];

const getTasks = () => tasks;

const addTask = taskData => {
  const fileName = `${taskData.id.split(/\s/).join('-').toLowerCase()}.png`;

  const newTask = {
    ...taskData,
    id: Date.now(),
    // created: new Date().toISOString(),
    checked: JSON.parse(taskData.checked),
    item: JSON.parse(taskData.item),
  };
  tasks.push(newTask);

  return newTask;
};

const deleteTask = deletionId => {
  const taskToDelete = tasks.find(task => task.id === deletionId);

  tasks = tasks.filter(task => task.id !== taskToDelete.id);
};

export { getTasks, addTask, deleteTask };
