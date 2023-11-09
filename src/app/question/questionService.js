import axios from "axios";


export const getQuestionsFromAi = async(text) =>{

    const result = await axios({ //카카오 API 호출해서 Access Token 받아오기
        method: 'POST',
        url: 'http://localhost:5000/create/qeustion', //서버 주소,
        headers:{
            'content-type': 'application/x-www-form-urlencoded'
        },
        data : {
            grant_type: 'authorization_code',
            client_id: process.env.KAKAO_ID,
            redirect_uri: 'https://localhost:3000/oauth',
            code: code,
        }
    });
    
}
