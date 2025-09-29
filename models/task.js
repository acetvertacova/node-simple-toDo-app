import { tasks } from "../db/tasks.js";

export function getAll() {
    return tasks;
}

export function findById(id) {
    return tasks.find((t) => t.id === id) ?? [];
}

export function store(task) {
    const newTask = {
        id: tasks.length + 1,
        title: task.title,
        description: task.description,
        completed: task.completed === "on"
    };
    tasks.push(newTask);

    return newTask;
}

export function deleteById(id) {
    const index = tasks.findIndex(t => t.id === Number(id));

    tasks.splice(index, 1);
    return tasks;
}

export function toggleStatus(id) {
    const task = tasks.find(t => t.id === Number(id));
    if (task) {
        task.completed = !task.completed;
    }
    return task;
}


