import{getAllCourseDb, createCourseDb, updateCourseByIdDb} from '../repository/course.repository'


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



// async function updateUserById(id: string, name: string, surname: string, email: string, pwd: string): Promise <iUser[]>{
//     const data = await updateUserByIdDb(id, name, surname, email, pwd)
//     return data
// }

// async function deleteUserById(id: string): Promise <iUser[]>{
//     const data = await deleteUserByIdDb(id)
//     return data
// }


export {getAllCourse, createCourse, updateCourseById};