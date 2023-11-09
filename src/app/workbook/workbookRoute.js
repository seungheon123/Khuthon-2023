import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import { workBookControlelr } from "./workbookController";

const workbookRouter = express.Router();

workbookRouter.post("/create",jwtMiddleware,workBookControlelr.create);

export default workbookRouter;