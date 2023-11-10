export const workBookDao = {
    create : async(connection,name,id)=>{
        const createQuery = `
            INSERT INTO workbook(name,subject_id)
            VALUES(?,?);
        `;
        const [createRow] = await connection.query(createQuery,[name,id]);
        return createRow;
    },
    getAll : async(connection,id)=>{
        const getAllQuery = `
            SELECT *
            FROM workbook
            WHERE subject_id = ?;
        `
        const [getAllRow] = await connection.query(getAllQuery,id);
        return getAllRow;
    },
    insertSummary : async(connection,id,summary)=>{
        const insertSummaryQuery = `
            INSERT INTO workbook(summary)
            VALUES(?)
            WHERE workbook_id = ?;
        `
        const insertSummaryRow = await connection.query(insertSummaryQuery,summary,id);
    }
}