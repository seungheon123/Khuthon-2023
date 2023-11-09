import pool from "../../../config/database";
import dotenv from "dotenv";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { workBookDao } from "./workbookDao";


export const workBookService = {
    create : async(name,id) =>{
        const connection = await pool.getConnection(async conn => conn);
        const createResult = await workBookDao.create(connection,name,id);
        connection.release();
        if(createResult){
            return response(baseResponse.SUCCESS,{
                "workbookId":createResult.insertId,
                "workbookName":name
            });
        }else return response(baseResponse.DB_ERROR);
    }
}