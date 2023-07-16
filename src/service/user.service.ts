import{createUserDb, getAllUserDb, getAllUserByIdDb, updateUserByIdDb, deleteUserByIdDb} from '../repository/user.repository'
import { iUser } from '../interfaces/index'
async function getAllUser(): Promise <iUser[]>{
    const data = await getAllUserDb()
  
    return data
}

async function getAllUserById(id: string): Promise <iUser[]>{
    const data = await getAllUserByIdDb(id)
        return data
    
}


async function createUser(name: string, surname: string, email: string, pwd: string): Promise <iUser[]>{
    const data = await createUserDb(name, surname, email, pwd)
    return data
}

async function updateUserById(id: string, name: string, surname: string, email: string, pwd: string): Promise <iUser[]>{
    const data = await updateUserByIdDb(id, name, surname, email, pwd)
    return data
}

async function deleteUserById(id: string): Promise <iUser[]>{
    const data = await deleteUserByIdDb(id)
    return data
}

export {createUser, getAllUser, getAllUserById, updateUserById, deleteUserById};