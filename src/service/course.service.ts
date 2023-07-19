import{getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb} from '../repository/course.repository'
import { iCourse } from '../interfaces/index'


async function getAllCourse(): Promise<iCourse[]>{
    const data = await getAllCourseDb()
  
    return data
}

async function createCourse(id: string, course: string): Promise<iCourse[]>{
    const data = await createCourseDb(id, course)
    return data
}


async function updateCourseById(id: string, course: string): Promise<iCourse[]>{
    const data = await updateCourseByIdDb(id, course)
        return data
    
}



async function deleteCourseById(id: string): Promise<iCourse[]>{
    const data = await deleteCourseByIdDb(id)
    return data
}


export {getAllCourse, createCourse, updateCourseById, deleteCourseById};