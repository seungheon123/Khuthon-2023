import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import {QuestionController} from "./questionController"


const queRouter = express.Router();

queRouter.post("/create",jwtMiddleware,QuestionController.create);
queRouter.put("/save",jwtMiddleware,QuestionController.save);



export default queRouter;