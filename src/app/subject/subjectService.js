import pool from "../../../config/database"
import { workBookDao } from "../workbook/workbookDao";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";

export const SubjectService = {
    create : async(body,id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const name = body.name;
        const result = workBookDao.create(connection,name,id);
        return response(baseResponse.SUCCESS,{
            "subjectId" : result.insertId
        });
    }
}