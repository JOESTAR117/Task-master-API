import { Router } from 'express';
import { allTask, createTask, deleteTask } from '../controllers/TaskController';

const routes = Router();

routes.post('/task', createTask);
routes.get('/task', allTask);
routes.delete('/task/:id', deleteTask);

export default routes;
