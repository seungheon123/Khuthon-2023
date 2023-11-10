import axios from "axios";
export const BlankService = {
    getBlanks : async(number,text)=>{
        const result = await axios({
            method: 'POST',
            url: 'http://127.0.0.1:5000/main/extract-keywords', //서버 주소,
            headers:{
                "Content-Type" : "application/json"
            },
            data : {
                "text" : text,
                "n": number,
            }
        });
        return result;
    }
}