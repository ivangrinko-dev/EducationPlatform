import { pool } from '../db'


async function getAllCourseDb() {
    const client = await pool.connect()
    const sql = 'select * from courses'
    const result = (await client.query(sql)).rows
    return result
}


export { getAllCourseDb }