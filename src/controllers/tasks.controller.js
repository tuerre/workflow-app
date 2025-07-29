import { populate } from "dotenv";
import Task from "../models/task.model.js";

const getTasks = async (req, res) => {
    const tasks = await Task.find({ user: req.user.id }).populate('user')
    res.json(tasks)
}

const createTask = async (req, res) => {
    const { title, description, date } = req.body
    const newTask = new Task({ 
        title, 
        description, 
        date,
        user: req.user.id })

    const savedTask = await newTask.save()
    res.json(savedTask)
}

const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user');
    if (!task) return res.status(404).send('Task not found');
    res.json(task)
}

const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task) return res.status(404).send('Task not found');
    res.send('Task updated').status(200)
}
const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).send('Task not found');
    res.send('Task deleted').status(200)
}

export { getTasks, createTask, getTask, updateTask, deleteTask }
