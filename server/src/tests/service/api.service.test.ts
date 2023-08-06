import { createUser, authorizationUser } from '../../service/api.service'
import bcrypt from 'bcrypt'
import * as repository from '../../repository/api.repository'

// describe('createUser:', () => {
//     test('test1', async () => {
//         const mockUserCreate = jest.spyOn(repository, 'createUserDb')
//         const mockHash = jest.spyOn(bcrypt, `hash`)
//         const mockUserByEmail = jest.spyOn(repository, `createUserDb`)
//         mockUserByEmail.mockResolvedValue([]);
//         mockHash.mockResolvedValue([`35dfdr1sghshsrrth`])
//         mockUserCreate.mockResolvedValue([{
//             id: '3',
//             name: "ivan",
//             surname: "ivan1",
//             email: "ivan@mail.ru",
//             pwd: "35dfdr1sghshsrrth"
//         }])
//         const result = await createUser("ivan", "ivan1", "ivan@mail.ru", "35dfdr1sghshsrrth")
//         expect(mockUserByEmail).toHaveBeenCalled()
//         expect(mockHash).toHaveBeenCalled()
//         expect(mockUserCreate).toHaveBeenCalled()
//         expect(result).toEqual([
//             {
//                 id: '3',
//                 name: "ivan",
//                 surname: "ivan1",
//                 email: "ivan@mail.ru",
//                 pwd: "35dfdr1sghshsrrth"
//             }
//         ])

//     })
//     test('test2', async () => {
//         const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDb')
//         mockUserByEmail.mockResolvedValue([]);
//         try {
//             await createUser("ivan", "ivan1", "ivan@mail.ru", "35dfdr1sghshsrrth")

//         } catch (error: any) {
//             expect(mockUserByEmail).toHaveBeenCalled
//             expect(error.message).toBe('такой email уже есть')
//         }
//     })
// })

describe('authorizationUser:', () => {
    test('test1', async () => {
        const mockGetUserByEmailDb = jest.spyOn(repository, 'getUserByEmailDb')
        const hashMock = jest.spyOn(bcrypt, `compare`)
        mockGetUserByEmailDb.mockResolvedValue([{
            id: '3',
            name: "ivan",
            surname: "ivan1",
            email: "ivan@mail.ru",
            pwd: "35dfdr1sghshsrrth"
        }])
        hashMock.mockResolvedValue(true)
        const result = await authorizationUser("ivan@mail.ru", "35dfdr1sghshsrrth")
        expect(mockGetUserByEmailDb).toHaveBeenCalled()
        expect(hashMock).toHaveBeenCalled()
        expect(result).toEqual([{
            id: '3',
            name: "ivan",
            surname: "ivan1",
            email: "ivan@mail.ru",
            pwd: "35dfdr1sghshsrrth"
        }])
    })
    test('test2', async () => {
        const mockGetUserByEmailDb = jest.spyOn(repository, 'getUserByEmailDb')
        mockGetUserByEmailDb.mockResolvedValue([])
        try {
            await authorizationUser("ivan@mail.ru", "35dfdr1sghshsrrth")
        } catch (error: any) {
            expect(mockGetUserByEmailDb).toHaveBeenCalled()
            expect(error.message).toBe('Такого пользователя нет')
        }
    })

    test('test3', async () => {
        const mockGetUserByEmailDb = jest.spyOn(repository, 'getUserByEmailDb')
        const hashMock = jest.spyOn(bcrypt, `compare`)
        mockGetUserByEmailDb.mockResolvedValue([{
            id: '3',
            name: "ivan",
            surname: "ivan1",
            email: "ivan@mail.ru",
            pwd: "35dfdr1sghshsrrth"
        }])
        hashMock.mockResolvedValue(false)
        try {
            await authorizationUser("ivan@mail.ru", "35dfdr1sghshsrrth")
        } catch (error: any) {
            expect(mockGetUserByEmailDb).toHaveBeenCalled()
            expect(error.message).toBe('Пароли не совпадают')
        }
    })
})
