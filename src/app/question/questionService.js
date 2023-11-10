import { BlankService } from "../blanks/blanksSerivce";
import { SubjectiveService } from "../subjective/subjectiveService";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { QuestionDao } from "./questionDao";
import pool from "../../../config/database";

export const QuestionService = {
    createQuestions : async(body)=>{
        const workbookId = body.workbookId;
        const text = body.text;
        const blankNo = body.BlankNo;
        const subNo = body.SubNo;
        //AI 서버로부터 가져오기
        const keyWords = await BlankService.getBlanks(blankNo,text);
        const keyWordsList = keyWords.data.keywords;
        const questions = await SubjectiveService.getQuestions(text,subNo);
        const newQuestions = questions.data;
        const modifiedText = replaceKeywordsWithBlank(text, keyWordsList);

        //DB 저장
        const connection = pool.getConnection(async conn => conn);
        const saveBlank = QuestionDao.saveBlank(connection,workbookId,modifiedText);


        console.log(questions);
        return response(baseResponse.SUCCESS,{keyWordsList,modifiedText,questions});
        /* 수진이꺼
        const text = body.text;
        const keyWords = body.keyWords;
        const modifiedText = replaceKeywordsWithBlank(text, keyWordsList);
        return response(baseResponse.SUCCESS,{keyWordsList,modifiedText});
        */
    },

}





function replaceKeywordsWithBlank(text, keywords) {
    const modifiedText = keywords.reduce((modified, keyword, index) => {
        const placeholder = `<blank${index + 1}>`; // Generate placeholder like 'Blank1', 'Blank2', ...
        const regex = new RegExp(keyword, 'gi');
        return modified.replace(regex, placeholder);
    }, text);

    return modifiedText;
}