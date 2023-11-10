export const workBookDao = {
    create : async(connection,name,summary,id)=>{
        const createQuery = `
            INSERT INTO workbook(name,summary,subject_id)
            VALUES(?,?,?);
        `;
        const [createRow] = await connection.query(createQuery,[name,summary,id]);
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
    }
}