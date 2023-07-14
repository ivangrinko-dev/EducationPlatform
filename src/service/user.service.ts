import{createUserDb} from '../repository/user.repository'

async function createUser(name, surname, email, pwd){
    const data = await createUserDb(name, surname, email, pwd)
    return data
}

export {createUser};