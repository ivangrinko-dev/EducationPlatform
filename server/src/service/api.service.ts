import { createUserDb, getUserByEmailDb } from '../repository/api.repository'
import { iUser } from '../interfaces/index'
import bcrypt from 'bcrypt'

async function createUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const foundUser = await getUserByEmailDb(email)
    if (foundUser.length > 0) {
        throw new Error('Такой пользователь уже есть')
    }
    const hashedPwd = await bcrypt.hash(pwd, 2)
    const data = await createUserDb(name, surname, email, hashedPwd)
    return data
}

async function authorizationUser(email: string, pwd: string): Promise<iUser[]> {
    const foundUser = await getUserByEmailDb(email)
    if (!foundUser.length) throw new Error('Такого пользователя нет')
    const bool = await bcrypt.compare(pwd, foundUser[0].pwd)
    if (!bool) throw new Error('Пароли не совпадают')
    return foundUser
}


export { createUser, authorizationUser }