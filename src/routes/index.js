import { Router } from 'express';
import readme from '../controllers/PriorityController';
import { allTask, createTask, deleteTask } from '../controllers/TaskController';

const routes = Router();

routes.post('/task', createTask);
routes.get('/task', allTask);
routes.delete('/task/:id', deleteTask);

routes.get('/priorities',readme)

export default routes;
