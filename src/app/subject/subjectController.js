import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { SubjectService } from "./subjectService";


export const SubjectController = {
    create : async(req,res)=>{
        try{
            const userIdFromJWT = req.verifiedToken.member_id;
            const id = req.body.id;
            const body = req.body;
            const result = await SubjectService.create(body,id);
            return res.status(200).send(result);
        }catch(err){
            console.log(err.message);
            return res.status(400).send(response(baseResponse,err.message));
        }
    },
    getAll : async(req,res)=>{
        try{
            const userIdFromJWT = req.verifiedToken.member_id;
            const id = req.body.id;
            const result = await SubjectService.getAll(id);
            return res.status(200).send(result);
        }catch(err){
            console.log(err.message);
            return res.status(400).send(response(baseResponse,err.message));
        }
    }
}