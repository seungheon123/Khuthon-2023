export const findMemberByEmail = async(connection,email)=>{
    const findMemberQuery = `
        SELECT *
        FROM member
        WHERE email = ?;
    `;
    const [findMemberRow] = await connection.query(findMemberQuery,email);
    return findMemberRow[0];
}


export const newMember = async(connection,email,name,provider)=>{
    const newMemberQuery = `
        INSERT INTO member(email, name, social_type)
        VALUES(?,?,?);
    `;
    const [newMemberRow] = await connection.query(newMemberQuery,[email,name,provider]);
    return newMemberRow;
}