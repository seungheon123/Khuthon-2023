

export const QuestionDao = {
    saveBlank : async(connection,id,content) =>{
        const saveBlankQuery = `
            INSERT INTO blan_questions(workbook_id,content)
            VALUES(?,?);
        `
        const saveBlankRow = await connection.query(saveBlankQuery,[id,content]);
        return saveBlankRow;
    }
}