import { pool } from '../db'
import { iUser } from '../interfaces/index'

async function getUserByIdDb(id: string): Promise<iUser[]> {
    const client = await pool.connect()
    const sql = 'select * from users where id = $1'
    const result = (await client.query(sql, [id])).rows
    return result
}

async function getAllUserDb(): Promise<iUser[]> {
    const client = await pool.connect()
    const sql = 'select * from users'
    const result = (await client.query(sql)).rows
    return result
}

async function createUserDb(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)
        const sql = "INSERT INTO USERs(name, surname, email, pwd) values($1, $2, $3, $4) RETURNING *"
        const result = (await client.query(sql, [name, surname, email, pwd])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}

async function updateUserByIdDb(id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect()
    try {
        await client.query(`BEGIN`)
        const sql = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *'
        const result = (await client.query(sql, [name, surname, email, pwd, id])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}

async function deleteUserByIdDb(id: string): Promise<iUser[]> {
    const client = await pool.connect()
    try {
        await client.query(`BEGIN`)
        const sql = 'delete from users where id = $1 returning *'
        const result = (await client.query(sql, [id])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}
export { createUserDb, getAllUserDb, getUserByIdDb, updateUserByIdDb, deleteUserByIdDb }