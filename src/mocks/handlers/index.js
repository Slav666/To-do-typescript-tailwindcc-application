import taskHandlers from './taskTodo';
import appHandlers from './app';

const handlers = [...taskHandlers, ...appHandlers];

export default handlers;
