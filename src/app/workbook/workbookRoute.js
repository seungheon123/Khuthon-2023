import express from "express";
import { jwtMiddleware } from "../../../config/jwtMiddleware";
import { workBookControlelr } from "./workbookController";

const workbookRouter = express.Router();

workbookRouter.post("/create",workBookControlelr.create);
workbookRouter.get("/get/:id",workBookControlelr.getDetail);

export default workbookRouter;