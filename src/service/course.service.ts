import{getAllCourseDb} from '../repository/course.repository'


async function getAllCourse(){
    const data = await getAllCourseDb()
  
    return data
}



export {getAllCourse};