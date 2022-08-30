import { rest } from 'msw';

import { addTask, deleteTask, getTasks } from '~/mocks/fixtures/taskTodo';

const URL_PATH = '/api/tasks/';

const getTasksHandler = rest.get(URL_PATH, (req, res, ctx) => {
  const tasks = getTasks();
  return res(ctx.status(200), ctx.json(tasks));
});

const addTaskHandler = rest.post(URL_PATH, (req, res, ctx) => {
  const newTask = req.body;
  console.log('task to create', newTask);
  addTask(newTask);
  const tasks = getTasks();
  console.log('new task list', tasks);
  return res(ctx.status(200), ctx.json(tasks));
});

const deleteTaskHandler = rest.delete(`${URL_PATH}:id`, (req, res, ctx) => {
  deleteTask(+req.params.id);
  return res(ctx.status(200), ctx.json(getTasks()));
});

const handlers = [getTasksHandler, addTaskHandler, deleteTaskHandler];

export default handlers;
