
export const SubjectDao = {
    create : async(connection,name,id)=>{
        const createQuery = `
            INSERT INTO subject(name,member_id)
            VALUES(?,?);
        `;
        const createRow = await connection.query(createQuery,[name,id]);
        return createRow;
    }
}