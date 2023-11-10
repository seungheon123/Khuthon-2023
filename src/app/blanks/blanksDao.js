

export const BlanksDao = {
    getText : async(connection,id)=>{
        const getTextQuery = `
            SELECT content
            FROM blank_questions
            WHERE workbook_id = ?;
        `
        const [getTextRow] = await connection.query(getTextQuery,id);
        return getTextRow[0];
    },
    getAnswers : async(connection,id)=>{
        const getAnswersQuery = `
            SELECT seq,keyword
            FROM blank_answers
            WHERE workbook_id = ?;
        `
        const [getAnswersRow] = await connection.query(getAnswersQuery,id);
        return getAnswersRow[0];
    }
}