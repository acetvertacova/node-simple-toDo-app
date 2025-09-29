import * as taskController from '../controllers/taskController.js';
import { idValidator } from '../validators/isValidator.js';
import { validate } from '../middleware/validator.js';
import express from 'express'

const taskRouter = express.Router();

taskRouter.get('/', taskController.list);
taskRouter.get('/new', taskController.displayForm);
taskRouter.post('/new', taskController.create);
taskRouter.get('/:id', [idValidator, validate], taskController.get);
taskRouter.post('/:id/toggle', [idValidator, validate], taskController.changeStatus);
taskRouter.post('/:id/delete', [idValidator, validate], taskController.remove);

export default taskRouter;