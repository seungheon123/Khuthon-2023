import pool from "../../../config/database.js";
import { findMember, newMember} from "./authDao.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {response} from "../../../config/response.js";
import baseResponse from "../../../config/baseResponseStatus.js";
dotenv.config();

export const kakaoService = async(userInfo)=>{
    const email = userInfo.email;
    const connection = await pool.getConnection(async conn => conn);
    const exUser = await findMember(connection,email);
    if(exUser){
        const token = jwt.sign({
            member_id : exUser.member_id,
            email : exUser.email,
        },
        process.env.JWT_SECRET,{
            expiresIn: "24h",
        });
        connection.release();
        return response(baseResponse.SUCCESS,
            {
                'id' : exUser.member_id,
                'token' : token,
                'expires' : "24h"
        });
    }
    else{
        const newUser = await newMember(connection,email,'kakao');
        connection.release();
        if(newUser){
            const token = jwt.sign({
                member_id : newUser.member_id,
                email : newUser.email
            },
            process.env.JWT_SECRET,{
                expiresIn: "24h",
            });
        }
        return response(baseResponse.SUCCESS,
            {
                'id' : exUser.member_id,
                'token' : token,
                'expires' : "24h"
        });
    }
}