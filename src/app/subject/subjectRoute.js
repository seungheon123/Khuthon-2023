import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import { SubjectController } from "./subjectController";

const subjectRouter = express.Router();

subjectRouter.post("/create",SubjectController.create);
subjectRouter.get("/getAll",SubjectController.getAll);
subjectRouter.get("/main",SubjectController.main);

export default subjectRouter;