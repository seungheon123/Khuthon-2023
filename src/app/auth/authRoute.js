import express from "express";
import { kakaoController } from "./authController";

const authRouter = express.Router();

authRouter.post("/kakao",kakaoController);

export default authRouter;