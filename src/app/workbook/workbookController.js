import dotenv from "dotenv"
import { workBookService } from "./workbookService"


export const workBookControlelr = {
    create : async(req,res)=>{
        try{
            const memberId = req.verifiedToken.member_id;
            const result = await workBookService.create(req.body.name,memberId);
            return res.status(200).send(result);
        }catch(err){
            console.log(err.log);
        }

    }
}