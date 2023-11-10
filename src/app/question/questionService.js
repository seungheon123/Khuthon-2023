import axios from "axios";
import { BlankService } from "../blanks/blanksSerivce";
import { SubjectiveService } from "../subjective/subjectiveService";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
export const QuestionService = {
    createQuestions : async(body)=>{
        const text = body.text;
        //const keyWords = body.keyWords;
        const blankNo = body.BlankNo;
        const subNo = body.SubNo;
        const keyWords = await BlankService.getBlanks(blankNo,text);
        const keyWordsList = keyWords.data.keywords;
        const questions = await SubjectiveService.getQuestions(subNo,text);
        const modifiedText = replaceKeywordsWithBlank(text, keyWordsList);
        console.log(questions);
        return response(baseResponse.SUCCESS,{keyWordsList,modifiedText,questions});
    }
}

function replaceKeywordsWithBlank(text, keywords) {
    const modifiedText = keywords.reduce((modified, keyword, index) => {
        const placeholder = `<blank${index + 1}>`; // Generate placeholder like 'Blank1', 'Blank2', ...
        const regex = new RegExp(keyword, 'gi');
        return modified.replace(regex, placeholder);
    }, text);

    return modifiedText;
}