import { Router } from 'express';
import { readmeTask, updateTask } from '../controllers/PriorityController';
import { allTask, createTask, deleteTask } from '../controllers/TaskController';

const routes = Router();

routes.post('/task', createTask);
routes.get('/task', allTask);
routes.delete('/task/:id', deleteTask);

routes.get('/priorities', readmeTask);
routes.patch('/priorities/:id', updateTask);

export default routes;
