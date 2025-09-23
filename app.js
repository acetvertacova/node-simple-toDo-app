import taskRouter from "./routes/taskRouter.js";
import aboutRouter from "./routes/aboutRoutes.js";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import expressLayouts from "express-ejs-layouts";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;
const app = express();
dotenv.config();
app.use(express.urlencoded({ extended: true }))

app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout", "layout");

app.use('/task', taskRouter);
app.use('/about', aboutRouter);

app.get('/', (req, res) => {
    res.redirect('/task');
});

app.use((req, res) => {
    res.status(404).render("404", { title: "Not Found" });
});

app.listen(PORT, () => {
    console.log("Server started at http://localhost:3000");
});

