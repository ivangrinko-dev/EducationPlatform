import{getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb} from '../repository/course.repository'


async function getAllCourse(){
    const data = await getAllCourseDb()
  
    return data
}

async function createCourse(id, course){
    const data = await createCourseDb(id, course)
    return data
}


async function updateCourseById(id, course){
    const data = await updateCourseByIdDb(id, course)
        return data
    
}



async function deleteCourseById(id){
    const data = await deleteCourseByIdDb(id)
    return data
}


export {getAllCourse, createCourse, updateCourseById, deleteCourseById};