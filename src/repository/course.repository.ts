import { pool } from '../db'
import { iCourse } from '../interfaces/index'

async function getAllCourseDb() : Promise<iCourse[]>{
    const client = await pool.connect()
    const sql = 'select * from courses'
    const result = (await client.query(sql)).rows
    return result
}

async function createCourseDb(id: string, course: string): Promise<iCourse[]> {
    const client = await pool.connect();
    const sql = "INSERT INTO courses(id, course) values($1, $2) RETURNING *"
    const result = (await client.query(sql, [id, course])).rows
    return result
}

async function updateCourseByIdDb(id: string, course: string): Promise<iCourse[]>{
    const client = await pool.connect()
    const sql = 'update courses set course = $1  where id = $2 returning *'
    const result = (await client.query(sql, [course, id])).rows
    return result
}

async function deleteCourseByIdDb(id: string): Promise<iCourse[]> {
    const client = await pool.connect()
    const sql = 'delete from courses where id = $1 returning *'
    const result = (await client.query(sql, [id])).rows
    return result
}
export { getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb}