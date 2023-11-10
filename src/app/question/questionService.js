import { BlankService } from "../blanks/blanksSerivce";
import { SubjectiveService } from "../subjective/subjectiveService";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
import { QuestionDao } from "./questionDao";
import pool from "../../../config/database";
import { workBookDao } from "../workbook/workbookDao";

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
        const newQuestions = questions.data.QnA;
        const modifiedText = replaceKeywordsWithBlank(text, keyWordsList);

        //DB 저장
        const connection = await pool.getConnection(async conn => conn);
        const insertSummary = await workBookDao.insertSummary(connection,workbookId,text);
        const saveBlank = QuestionDao.saveBlank(connection,workbookId,modifiedText);
        const blankId = saveBlank.insertId;
        
        for(let i = 0; i<keyWordsList.length; i++){
            const keyword = keyWordsList[i];
            await QuestionDao.saveBlankAnswer(connection,blankId,keyword,i+1);
        }

        for(let i = 0; i<newQuestions[0].length; i++){
            const question = newQuestions[0][i];
            const answer = newQuestions[1][i];
            await QuestionDao.saveQuiz(connection,question,answer,workbookId);
        }
        

        return response(baseResponse.SUCCESS,{keyWordsList,modifiedText,newQuestions});
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