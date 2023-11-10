
export const SubjectiveDao = {
    getDetail : async(connection, id)=>{
        const getDetailQuery = `
            SELECT question,answer
            FROM quiz
            WHERE workbook_id = ?;
        `;
        const [getDetailRow] = await connection.query(getDetailQuery,id);
        return getDetailRow[0];
    }
}