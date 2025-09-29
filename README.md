# Lab №1: Introduction to Express.js. Creating a simple "ToDo List" application

## Installation and Project Launch Instructions

1. Install Node.js

    Make sure you have Node.js installed. Check your version:
   
```
    node -v
    npm -v
```

2. Clone or Download the Project

```
   git clone <repo-url>
   cd <your-project-folder>
```

3. Install Dependencies

```
    npm install
```

4. Start the Server

```
    npm run dev
```

## Project's Description

📝 To-Do App

The **Todo App** is a simple server-side web application that allows users to manage tasks.  
The project is developed as part of a university assignment and demonstrates basic **CRUD operations** using **Node.js, Express, and EJS**.

### Features
- Display all tasks
- Display a specific task by its ID
- Add new tasks through a form
- Update the status of a task (Active / Completed)
- Delete tasks
- "About" page with project information
- Custom 404 page for undefined routes

### Technologies Used
- **Node.js** – runtime environment
- **Express** – web framework
- **EJS** + **express-ejs-layouts** – view templates
- **dotenv** – environment variable management

## Project's Documentation

**Project's Structure**


    ├── config/              # Configuration files (example.env)
    ├── controllers/         # Handles request logic
    │   ├── aboutController.js
    │   ├── taskController.js
    ├── db/                  # array of tasks
    │   ├── tasks.js
    ├── middleware/          # Custom middleware
    │   ├── validator.js
    ├── models/              # Database models
    │   ├── task.js
    ├── routes/              # Express route definitions
    │   ├── aboutRoutes.js
    │   ├── taskRouter.js
    ├── validators/          # Validation logic
    │   ├── isValidator.js
    ├── views/               # EJS templates (UI)
    │   ├── 404.ejs
    │   ├── about.ejs
    │   ├── header.ejs
    │   ├── index.ejs
    │   ├── layout.ejs
    │   ├── new.ejs
    ├── .gitignore
    ├── app.js               # Main Express application entry
    ├── package.json         # Dependencies and scripts
    ├── package-lock.json
    └── README.md

**Routes**

    - GET / → redirect to /task
    - GET /task → list of tasks
    - GET /task/new → form to create a new task
    - POST /task/new → save a new task
    - GET /task/:id → view a task by ID
    - POST /task/:id/toggle → toggle task status
    - POST /task/:id/delete → delete a task
    - GET /about → "About" page
    - Any other path → 404 page

## Example Usage

## 📌 Backend Overview

The backend is built with **Node.js** and **Express**, following a simple MVC-like structure.

### Workflow

1. **User requests `/task`**  
   → `taskController.list`  
   → fetches all tasks from the model  
   → renders `index.ejs`.

2. **User requests `/task/:id`**  
   → `taskController.get`  
   → finds a task by ID  
   → renders `task.ejs`.

3. **User submits a new task (`POST /task/new`)**  
   → `taskController.create`  
   → stores the new task with an auto-incremented ID  
   → redirects to `/task`.

4. **User toggles task status (`POST /task/:id/toggle`)**  
   → `taskController.changeStatus`  
   → flips `completed` between `true` / `false`.

5. **User deletes a task (`POST /task/:id/delete`)**  
   → `taskController.remove`  
   → removes the task and redirects back.

### Controller Functions (`taskController.js`)

- **list(req, res)** → render all tasks  
- **get(req, res)** → render a single task by ID  
- **create(req, res)** → add a new task  
- **remove(req, res)** → delete a task  
- **changeStatus(req, res)** → toggle task status  
- **displayForm(req, res)** → render "new task" form 

### Model Functions (`task.js`)

- `getAll()` → return all tasks  
- `findById(id)` → return a task by ID  
- `store(task)` → save a new task  
- `deleteById(id)` → remove a task  
- `toggleStatus(id)` → toggle completion status  

### Example: Request Flow

User->>Router: GET /task

 ```js
    taskRouter.get('/', taskController.list);
 ```
    
Router->>Controller: list()

```js
    function list(req, res) {
        res.render("index", {
            tasks: taskModel.getAll()
        });
    }
```

Controller->>Model: getAll()

```js
    export function getAll() {
        return tasks;
    }
```

Model-->>Controller: [task1, task2, ...]
Controller->>View: render index.ejs

## 📌 UI Overview

### 1. Home Redirect
- User visits `/` → immediately redirected to `/task`.

<img src="../todo-app/usage/getAll.png">

### 2. Task List Page (`/task`)
- Displays all tasks in a list.
- If there are no tasks → shows `"No tasks to display"`.
- Each task card includes:
  - **Title** 
  - **Status**: `Completed` / `Active`
  - **Actions**:
    - **View Task** → goes to `/task/:id` (detailed view)
    - **Mark Active / Mark Complete** → toggles completion (POST `/task/:id/toggle`)
    - **Delete** → removes the task (POST `/task/:id/delete`)

### 3. Task Detail Page (`/task/:id`)
- Shows:
  - Task **title**
  - Task **description**
  - Task **status** (Active/Completed)
- Includes action buttons:
  - Toggle completion
- Acts as a focused view of a single task.

<img src="/usage/taskById.png">

### 4. New Task Page (`/task/new`)
- User can add a new task using a form:
  - **Title** (text)
  - **Description** (textarea)
  - **Completed checkbox** (optional, defaults to false)
- On submission → creates the task and redirects to `/task`.

<img src="/usage/createForm.png">

### 5. Delete / Toggle
- Both actions are **form submissions** (POST requests).
- After action → redirect back to `/task`.


### 6. Error Handling
- Any non-existing route renders `404.ejs` with `"Not Found"`.

<img src="/usage/NotFoundPage.png">

## Control Questions?

### HTML Routes vs REST API
- **HTML Routes**: return full HTML pages, rendered on the server (`res.render`). Used for browser views.
- **REST API**: return JSON data (`res.json`). Used for SPAs, mobile apps, or API clients.

### res.render vs res.json
- **res.render(view, data)**: renders HTML templates (EJS, Pug) with data.
- **res.json(data)**: sends JSON data to the client.
- **Use**:
  - `res.render` → server-side pages
  - `res.json` → API responses

### Middleware in Express
- Functions that run between request and response.
- Common uses:
  - Parsing request body (`express.urlencoded`, `express.json`)
  - Logging, auth checks, error handling
- Example:

    ```js
        app.use(express.urlencoded({ extended: true })); // parse form data
        app.use(express.json()); // parse JSON
    ```

## Useful Links

- [Server-Side Applications Course (GitHub)](https://github.com/MSU-Courses/development-server-side-applications/tree/main)
- [What is EJS Template Engine? (GeeksforGeeks)](https://www.geeksforgeeks.org/node-js/what-is-ejs-template-engine/)
- [MVC Architecture System Design (GeeksforGeeks)](https://www.geeksforgeeks.org/system-design/mvc-architecture-system-design/)
- [Express Middleware Guide](https://expressjs.com/en/guide/writing-middleware.html)




