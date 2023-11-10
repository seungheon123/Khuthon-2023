
export const BlankService = {
    getBlanks : async(number,text)=>{
        const result = await axios({
            method: 'POST',
            url: 'http://localhost:5000/extract-keywords', //서버 주소,
            headers:{
                "Content-Type" : "application/json"
            },
            data : {
                "text" : "text",
                "n": number,
            }
        });
        return result;
    }
}