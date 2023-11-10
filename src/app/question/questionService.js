import axios from "axios";
import { BlankService } from "../blanks/blanksSerivce";
import { SubjectiveService } from "../subjective/subjectiveService";
import { response } from "../../../config/response";
import baseResponse from "../../../config/baseResponseStatus";
export const QuestionService = {
    createQuestions : async(body)=>{
        console.log(body);
        const text = body.text;
        const blankNo = body.BlankNo;
        const subNo = body.SubNo;
        const keyWords = await BlankService.getBlanks(blankNo,text);
        const questions = await SubjectiveService.getQuestions(subNo,text);
        const modifiedText = replaceKeywordsWithBlank(text, keyWords);
        console.log(modifiedText);
        console.log(questions);
        return response(baseResponse.SUCCESS,modifiedText,questions);
    }
}

function replaceKeywordsWithBlank(text, keywords) {
    const modifiedText = keywords.reduce((modified, keyword, index) => {
        const placeholder = `<input type="text" name="blank${index + 1}" />`; // Generate placeholder like 'Blank1', 'Blank2', ...
        const regex = new RegExp(keyword, 'gi');
        return modified.replace(regex, placeholder);
    }, text);

    return modifiedText;
}
