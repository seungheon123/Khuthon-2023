import pool from "../../../config/database";
import dotenv from "dotenv";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { workBookDao } from "./workbookDao";
import { BlanksDao } from "../blanks/blanksDao";
import { SubjectiveDao } from "../subjective/subjectiveDao";


export const workBookService = {
    create : async(body) =>{
        const subjectId = body.subjectId;
        const name = body.name;
        const connection = await pool.getConnection(async conn => conn);
        const createResult = await workBookDao.create(connection,name,subjectId);
        connection.release();
        if(createResult){
            return response(baseResponse.SUCCESS,{
                "workbookId":createResult.insertId,
                "workbookName":name            
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
    },

    getDetail : async(id)=>{
        const connection = await pool.getConnection(async conn => conn);
        const blankText = await BlanksDao.getText(connection,id);
        const blankAnswers = await BlanksDao.getAnswers(connection,id);
        const quiz = await SubjectiveDao.getDetail(connection,id);
        connection.release();
        return response(baseResponse.SUCCESS,{
            "text" : blankText,
            blankAnswers,
            quiz
        })
        
    }
}