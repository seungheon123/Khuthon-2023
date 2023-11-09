export const workBookDao = {
    create : async(connection,name,id)=>{
        const createQuery = `
            INSERT INTO workbook(name,member_id)
            VALUES(?,?);
        `;
        const [createRow] = await connection.query(createQuery,[name,id]);
        return createRow;
    }
}