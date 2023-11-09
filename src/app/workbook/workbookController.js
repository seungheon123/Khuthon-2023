import dotenv from "dotenv"
import { workBookService } from "./workbookService"
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";


export const workBookControlelr = {
    create : async(req,res)=>{
        try{
            const memberId = req.verifiedToken.member_id;
            const result = await workBookService.create(req.body.name,memberId);
            return res.status(200).send(result);
        }catch(err){
            console.log(err);
            return res.status(400).send(response(baseResponse,err.message));
        }
    },
    getAll : async(req,res)=>{
        try{
            const memberId = req.verifiedToken.member_id;
            const result = await workBookService.getAll(memberId);
            return res.status(200).send(result);
        }catch(err){
            console.log(err);
            return res.status(400).send(response(baseResponse,err.message));
        }
    }
}