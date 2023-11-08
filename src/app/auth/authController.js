import axios from "axios";
import dotenv from "dotenv"
import { kakaoService } from "./authService";

dotenv.config();

export const kakaoController = async(req,res)=>{
    try{
        const accessTokenResponse = await axios({ //카카오 API 호출해서 Access Token 받아오기
            method: 'POST',
            url: 'https://kauth.kakao.com/oauth/token',
            headers:{
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                grant_type: 'authorization_code',
                client_id: process.env.KAKAO_ID,
                redirect_uri: 'https://localhost:3000/oauth',
                code: code,
            }
        });
        accessToken = accessTokenResponse.data.access_token;
        const userInfoResponse = await axios({ //카카오 API 호출해서 사용자 정보 불러오기
            method: 'GET',
            url:'https://kapi.kakao.com/v2/user/me',
            headers:{
                'Authorization':`Bearer ${accessToken}`,
                'content-type': 'application/json'
            }
        });
        const userInfo = userInfoResponse.data.kakao_account;
        const result = kakaoService(userInfo);
        return res.status(200).send(result);
    }catch(err){
        console.log(err.log);
    }
}