export const workBookDao = {
    create : async(connection,name,id)=>{
        const createQuery = `
            INSERT INTO workbook(name,member_id)
            VALUES(?,?);
        `;
        const [createRow] = await connection.query(createQuery,[name,id]);
        return createRow;
    },
    getAll : async(connection,id)=>{
        const getAllQuery = `
            SELECT *
            FROM workbook
            WHERE member_id = ?;
        `
        const [getAllRow] = await connection.query(getAllQuery,id);
        return getAllRow;
    }
}