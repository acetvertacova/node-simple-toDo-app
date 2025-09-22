import taskRouter from "./routes/taskRouter.js";
import aboutRouter from "./routes/aboutRoutes.js";
import express from "express";
import dotenv from "dotenv";

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();

app.use(express.json());

app.use('/', (req, res) => {
    return res.send("Home");
});

app.use('/task', taskRouter);
app.use('/about', aboutRouter);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:3000");
});

