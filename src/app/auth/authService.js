import pool from "../../../config/database.js";
import {findMemberByEmail, newMember} from "./authDao.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import {response} from "../../../config/response.js";
import baseResponse from "../../../config/baseResponseStatus.js";
dotenv.config();

export const kakaoService = async(userInfo)=>{
    const email = userInfo.email;
    const connection = await pool.getConnection(async conn => conn);
    const exUser = await findMemberByEmail(connection,email);
    const provider = 'kakao';
    let token;
    if(exUser){
        token = jwt.sign({
            member_id : exUser.member_id,
            email : exUser.email,
        },
        process.env.JWT_SECRET,{
            expiresIn: "7d",
        });
        connection.release();
        return response(baseResponse.SUCCESS,
            {
                'id' : exUser.member_id,
                'token' : token,
                'expires' : "7d"
        });
    }
    else{
        const newUser = await newMember(connection,email,provider);
        connection.release();
        if(newUser){
            token = jwt.sign({
                member_id : newUser.member_id,
                email : newUser.email
            },
            process.env.JWT_SECRET,{
                expiresIn: "7d",
            });
        }
        return response(baseResponse.SUCCESS,
            {
                'id' : newUser.member_id,
                'token' : token,
                'expires' : "7d"
        });
    }
}