
export const SubjectDao = {
    create : async(connection,name,id)=>{
        const createQuery = `
            INSERT INTO subject(name,member_id)
            VALUES(?,?);
        `;
        const createRow = await connection.query(createQuery,[name,id]);
        return createRow[0];
    },
    getAll : async(connection, id)=>{
        const getAllQuery = `
            SELECT *
            FROM subject
            WHERE member_id = ?;
        `
        const [getAllRow] = await connection.query(getAllQuery,id);
        return getAllRow[0];
    }
}