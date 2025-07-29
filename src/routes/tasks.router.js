import { Router } from "express";
import { createTaskSchema } from "../schemas/task.schema.js";
import validate from "../middlewares/validatorMiddleware.js";
import { authRequired } from "../middlewares/validateToken.js";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.get('/task/:id', authRequired, getTask);
router.post('/task', authRequired, validate(createTaskSchema), createTask);
router.delete('/task/:id', authRequired, deleteTask);
router.put('/task/:id', authRequired, updateTask);

export default router;