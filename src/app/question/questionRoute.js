import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import {QuestionController} from "./questionController"


const queRouter = express.Router();

queRouter.post("/create",QuestionController.create);


export default queRouter;