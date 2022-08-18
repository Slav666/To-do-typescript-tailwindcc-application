import { rest } from 'msw';

import { addTask, deleteTask, getTasks } from '~/mocks/fixtures/taskTodo';

const URL_PATH = '*/api/tasks/';

const getTasksHandler = rest.get(URL_PATH, (req, res, ctx) => {
  const id = req.headers.get('authorization').split(' ')[1];

  const tasks = getTasks().filter(task => task.id === id);

  return res(ctx.status(200), ctx.json(tasks));
});

const addTaskHandler = rest.post(URL_PATH, (req, res, ctx) => {
  let task = {};
  for (let [key, value] of req.body) {
    task[key] = value;
  }

  const newTask = addTask(task);

  return res(ctx.status(200), ctx.json(newTask));
});

const deleteTaskHandler = rest.delete(`${URL_PATH}:id`, (req, res, ctx) => {
  deleteTask(+req.params.id);

  return res(ctx.status(200), ctx.json(getTasks()));
});

const handlers = [getTasksHandler, addTaskHandler, deleteTaskHandler];

export default handlers;
