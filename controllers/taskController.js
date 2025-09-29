import { tasks } from "../db/tasks.js";
import * as taskModel from "../models/task.js";

function list(req, res) {
    res.render("index", {
        tasks: taskModel.getAll()
    });
}

function get(req, res) {
    const { id } = req.params;
    const task = taskModel.findById(+id)
    res.render("task", { task });
}

function create(req, res) {
    const task = req.body;
    taskModel.store(task);
    res.redirect('/task');
}

function remove(req, res) {
    const { id } = req.params;
    taskModel.deleteById(+id)
    res.redirect('/');
}

function changeStatus(req, res) {
    const { id } = req.params;
    taskModel.toggleStatus(id);

    res.redirect('/task');
}

function displayForm(req, res) {
    res.render("new", { title: "New Task" });
}


export { list, get, create, remove, displayForm, changeStatus };