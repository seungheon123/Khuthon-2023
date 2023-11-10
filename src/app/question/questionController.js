import dotenv from "dotenv"
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { QuestionService } from "./questionService";

export const QuestionController = {
    create : async(req,res)=>{
        try{
            const body = req.body;
            const result = await QuestionService.createQuestions(body);
            return res.status(200).send(result);
        }catch(err){
            console.log(err);
            return res.status(400).send(response(baseResponse,err.message));
        }
    }
}