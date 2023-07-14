import { pool } from '../db'

async function createUserDb(name, surname, email, pwd) {
    const client = await pool.connect();
    const sql = "INSERT INTO USERs(name, surname, email, pwd) values($1, $2, $3, $4) RETURNING *"
    const result = (await client.query(sql, [name, surname, email, pwd])).rows
    return result
}

export { createUserDb }