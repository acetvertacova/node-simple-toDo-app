import * as taskController from '../controllers/taskController.js';
import express from 'express'

const taskRouter = express.Router();

taskRouter.get('/', taskController.list);

taskRouter.get('/new', taskController.displayForm);
taskRouter.post('/new', taskController.create);
taskRouter.get('/:id', taskController.get);

taskRouter.post('/:id/toggle', taskController.changeStatus);

taskRouter.post('/:id/delete', taskController.remove);

export default taskRouter;