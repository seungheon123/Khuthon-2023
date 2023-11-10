
export const SubjectiveService = {
    getQuestions : async(req,res)=>{
        const result = await axios({
            method: 'POST',
            url: '', //서버 주소,
            headers:{
                "Content-Type" : "application/json"
            },
            data : {
                "number": number,
                "text" : "text"
            }
        });
        return result;
    }
}