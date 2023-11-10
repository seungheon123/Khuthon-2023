import pool from "../../../config/database"
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { SubjectDao } from "./subjectDao";

export const SubjectService = {
    create : async(body,id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const name = body.name;
        const result = await SubjectDao.create(connection,name,id);
        return response(baseResponse.SUCCESS,{
            "subjectId" : result.insertId
        });
    },
    getAll : async(id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const result = await SubjectDao.getAll(connection,id);
        return response(baseResponse.SUCCESS,result);

    }
}