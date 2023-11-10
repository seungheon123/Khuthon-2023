

export const QuestionDao = {
    saveBlank : async(connection,id,content) =>{
        const saveBlankQuery = `
            INSERT INTO blank_questions(workbook_id,content)
            VALUES(?,?);
        `
        const saveBlankRow = await connection.query(saveBlankQuery,[id,content]);
        return saveBlankRow;
    },
    saveBlankAnswer : async(connection,id,keyword,seq) =>{
        const saveBlankAnswerQuery = `
            INSERT INTO blank_answers(seq,keyword,blank_questions_id)
            VALUES(?,?,?);
        `
        const saveBlankAnswerRow = await connection.query(saveBlankAnswerQuery,[seq,keyword,id]);
        return saveBlankAnswerRow;
    },
    saveQuiz : async(connection,question,answer,workbookId) =>{
        const saveQuizQuery = `
            INSERT INTO quiz(question,answer,workbook_id)
            VALUES(?,?,?);
        `
        const saveQuizRow = await connection.query(saveQuizQuery,[question,answer,workbookId]);
        return saveQuizRow;
    }
}
