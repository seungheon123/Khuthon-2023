export const workBookDao = {
    create : async(connection,name,explanation,id)=>{
        const createQuery = `
            INSERT INTO workbook(name,explanation,members_id)
            VALUES(?,?,?);
        `;
        const [createRow] = await connection.query(createQuery,[name,explanation,id]);
        return createRow;
    },
    getAll : async(connection,id)=>{
        const getAllQuery = `
            SELECT *
            FROM workbook
            WHERE members_id = ?;
        `
        const [getAllRow] = await connection.query(getAllQuery,id);
        return getAllRow;
    }
}