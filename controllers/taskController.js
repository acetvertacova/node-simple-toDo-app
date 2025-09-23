import { tasks } from "../models/tasks.js";

function list(req, res) {
    res.render("task", { tasks });
}

function get(req, res) {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === Number(id));
    res.json(task);
}

function create(req, res) {
    const { title, description, completed } = req.body;

    const task = {
        id: tasks.length + 1,
        title: title,
        description: description,
        completed: completed === "on"
    };

    tasks.push(task);
    res.redirect('/task');
}

function remove(req, res) {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === Number(id));

    tasks.splice(index, 1);
    res.redirect('/');
}

function changeStatus(req, res) {
    const { id } = req.params;
    const task = tasks.find(t => t.id == id);
    task.completed = !task.completed;

    res.redirect('/');
}

function displayForm(req, res) {
    res.render("new", { title: "New Task" });
}


export { list, get, create, remove, displayForm, changeStatus };