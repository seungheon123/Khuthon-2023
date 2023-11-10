import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import { SubjectController } from "./subjectController";

const subjectRouter = express.Router();

subjectRouter.post("/create",jwtMiddleware,SubjectController.create);
subjectRouter.get("/getAll",jwtMiddleware,SubjectController.getAll);

export default subjectRouter;