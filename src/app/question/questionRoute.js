import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import {QuestionController} from "./questionController"
import multer from "multer";
import path from "path";

const queRouter = express.Router();

queRouter.post("/create",jwtMiddleware,QuestionController.create);



export default queRouter;