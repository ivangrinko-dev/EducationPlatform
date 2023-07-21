import { pool } from '../db'
import { iCourse } from '../interfaces/index'

async function getAllCourseDb(): Promise<iCourse[]> {
    const client = await pool.connect()
    const sql = 'select * from courses'
    const result = (await client.query(sql)).rows
    return result
}

async function createCourseDb(id: string, course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)
        const sql = "INSERT INTO courses(id, course) values($1, $2) RETURNING *"
        const result = (await client.query(sql, [id, course])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}

async function updateCourseByIdDb(id: string, course: string): Promise<iCourse[]> {
    const client = await pool.connect()
    try {
        await client.query(`BEGIN`)
        const sql = 'update courses set course = $1  where id = $2 returning *'
        const result = (await client.query(sql, [course, id])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}

async function deleteCourseByIdDb(id: string): Promise<iCourse[]> {
    const client = await pool.connect()
    try {
        await client.query(`BEGIN`)
        const sql = 'delete from courses where id = $1 returning *'
        const result = (await client.query(sql, [id])).rows
        await client.query(`COMMIT`)
        return result
    } catch (error) {
        await client.query(`ROLLBACK`)
        return []
    }
}
export { getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb }