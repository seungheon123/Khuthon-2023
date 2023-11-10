import axios from "axios";

export const SubjectiveService = {
    getQuestions : async(text,number)=>{
        const result = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/main/generate_questions', //서버 주소,
            headers:{
                "Content-Type" : "application/json"
            },
            data : {
                "text" : text,
                "number": number
            }
        });
        return result;
    }
}