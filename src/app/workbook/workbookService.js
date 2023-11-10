import pool from "../../../config/database";
import dotenv from "dotenv";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { workBookDao } from "./workbookDao";


export const workBookService = {
    create : async(body) =>{
        const subjectId = body.subjectId;
        const name = body.name;
        const summary = body.summary;
        const connection = await pool.getConnection(async conn => conn);
        const createResult = await workBookDao.create(connection,name,summary,subjectId);
        connection.release();
        if(createResult){
            return response(baseResponse.SUCCESS,{
                "workbookId":createResult.insertId,
                "workbookName":name,
                "explanation":summary
            });
        }else return response(baseResponse.DB_ERROR);
    },

    getAll : async(id) =>{
        const connection = await pool.getConnection(async conn => conn);
        const getResults = await workBookDao.getAll(connection,id);
        connection.release();
        if(getResults){
            return response(baseResponse.SUCCESS,{
                getResults
            });
        }else return response(baseResponse.DB_ERROR);
    }
}