import { validationResult } from "express-validator";

export function validate(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).render("404", { title: "Not Found" });
    }
    next();
};