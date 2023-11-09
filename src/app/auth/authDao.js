export const findMemberByEmail = async(connection,email)=>{
    const findMemberQuery = `
        SELECT *
        FROM member
        WHERE email = ?;
    `;
    const [findMemberRow] = await connection.query(findMemberQuery,email);
    return findMemberRow[0];
}


export const newMember = async(connection,email,provider)=>{
    const newMemberQuery = `
        INSERT INTO member(email, social_type)
        VALUES(?,?);
    `;
    const newMemberRow = await connection.query(newMemberQuery,[email,provider]);
    return newMemberQuery[0];
}