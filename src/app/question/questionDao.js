

export const QuestionDao = {
    saveBlank : async(connection,id,content) =>{
        const saveBlankQuery = `
            INSERT INTO blan_questions(workbook_id,content)
            VALUES(?,?);
        `
        const saveBlankRow = await connection.query(saveBlankQuery,[id,content]);
        return saveBlankRow;
    },
    saveBlankAnswer : async(connection,id,keyword,seq) =>{
        const saveBlankAnswerQuery = `
            INSERT INTO blan_questions(seq,keyword,blank_questions_id)
            VALUES(?,?,?);
        `
        const saveBlankAnswerRow = await connection.query(saveBlankAnswerQuery.[seq,keyword,id]);
        return saveBlankAnswerRow;
    }
}
