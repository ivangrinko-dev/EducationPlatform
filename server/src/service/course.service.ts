import{getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb, getCourseByIdDb} from '../repository/course.repository'
import { iCourse } from '../interfaces/index'


async function getAllCourse(): Promise<iCourse[]>{
    const data = await getAllCourseDb()
    if (data.length == 0) throw new Error('данные не сохранены')
  
    return data
}

async function getCourseById(id: string): Promise<iCourse[]>{
    const data = await getCourseByIdDb(id)
    if (data.length == 0) throw new Error('такого id нет')
        return data
    
}

async function createCourse(course: string): Promise<iCourse[]>{
    const data = await createCourseDb(course)
    if (data.length == 0) throw new Error('данные не сохранены')
    return data
}


async function updateCourseById(id: string, course: string): Promise<iCourse[]>{
    const data = await updateCourseByIdDb(id, course)
    if (data.length == 0) throw new Error('такого id нет')
        return data
    
}



async function deleteCourseById(id: string): Promise<iCourse[]>{
    const data = await deleteCourseByIdDb(id)
    if (data.length == 0) throw new Error('такого id нет')
    return data
}


export {getAllCourse, createCourse, updateCourseById, deleteCourseById, getCourseById};