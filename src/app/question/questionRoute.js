import express from "express";
import { createQuestion } from "./questionController";

const queRouter = express.Router();

queRouter.post("/create",createQuestion);


export default queRouter;