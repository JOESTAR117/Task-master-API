import { Router } from 'express';
import updateTask from '../controllers/ContentController';
import { readmeTask, updatePriority} from '../controllers/PriorityController';
import { allTask, createTask, deleteTask } from '../controllers/TaskController';

const routes = Router();

routes.post('/task', createTask);
routes.get('/task', allTask);
routes.delete('/task/:id', deleteTask);

routes.get('/priorities', readmeTask);
routes.patch('/priorities/:id', updatePriority);

routes.patch('/contents/:id',updateTask)

export default routes;
