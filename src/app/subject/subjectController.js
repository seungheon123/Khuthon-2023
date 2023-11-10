import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { SubjectService } from "./subjectService";


export const SubjectController = {
    create : async(req,res)=>{
        try{
            const userIdFromJWT = req.verifiedToken.id;
            const body = req.body;
            const result = SubjectService.create(body,userIdFromJWT);
            return res.status(200).send(result);
        }catch(err){
            console.log(err.message);
            return res.status(400).send(response(baseResponse,err.message));
        }
    }
}