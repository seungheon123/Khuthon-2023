import pool from "../../../config/database";
import dotenv from "dotenv";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { workBookDao } from "./workbookDao";


export const workBookService = {
    create : async(body,id) =>{
        const name = body.name;
        const explanation = body.explanation;
        const connection = await pool.getConnection(async conn => conn);
        const createResult = await workBookDao.create(connection,name,explanation,id);
        connection.release();
        if(createResult){
            return response(baseResponse.SUCCESS,{
                "workbookId":createResult.insertId,
                "workbookName":name,
                "explanation":explanation
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