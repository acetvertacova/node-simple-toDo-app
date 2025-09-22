import { tasks } from "../models/tasks.js";

function list(req, res) {
    res.json(tasks);
}

function get(req, res) {
    const { id } = req.params;
    const task = tasks.find((t) => t.id === Number(id));
    res.json(task);
}

function create(req, res) {
    const body = req.body;

    const task = {
        id: tasks.length + 1,
        ...body,
    };

    tasks.push(task);
    res.json(task);
}

function remove(req, res) {
    const { id } = req.params;
    const index = tasks.indexOf(t => t.id === Number(id));

    tasks.splice(index, 1);

    res.send("Success")
}

export { list, get, create, remove };