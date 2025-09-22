import * as taskController from '../controllers/taskController.js';
import express from 'express'

const taskRouter = express.Router();

taskRouter.get('/', taskController.list);
taskRouter.get('/:id', taskController.get);
taskRouter.post('/', taskController.create);
taskRouter.delete('/:id', taskController.remove);

export default taskRouter;