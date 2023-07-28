import { createUser, authorizationUse, authorizationUser } from '../../service/api.service'
import * as repository from '../../repository/api.repository'

describe('createUser:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'createUserDb')
        repoFunction.mockResolvedValue([
            {
                "id": '3',
                "name": "ivan",
                "surname": "ivan1",
                "email": "ivan@mail.ru",
                "pwd": "35dfdr1sghshsrrth"
            }
        ])
        const result = await createUser("ivan", "ivan1", "ivan@mail.ru", "35dfdr1sghshsrrth")

        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('3')
        expect(result[0].name).toBe('ivan')
        expect(result[0].surname).toBe('ivan1')
        expect(result[0].email).toBe('ivan@mail.ru')
        expect(result[0].pwd).toBe('35dfdr1sghshsrrth')
        expect(result).toEqual([
            {
                "id": '3',
                "name": "ivan",
                "surname": "ivan1",
                "email": "ivan@mail.ru",
                "pwd": "35dfdr1sghshsrrth"
            }
        ])
        expect(result).toHaveLength(1)
    })
})

// describe('authorizationUser:', () => {
//     test('test2', async () => {
//         const repoFunction = jest.spyOn(repository, 'authorizationUser')
//         repoFunction.mockResolvedValue([
            
//             {
//                 "email": "ivan1@mail.ru",
//                 "pwd": "35dfdr1sghshsrrth11"
//             }
            
//         ])
//         const result = await authorizationUser("ivan1@mail.ru")

//         expect(repoFunction).toHaveBeenCalled()

//         expect(result[0].email).toBe('ivan1@mail.ru')
//         expect(result[0].pwd).toBe('35dfdr1sghshsrrth11')
//         expect(result).toEqual([
//             {
//                 "email": "ivan1@mail.ru",
//                 "pwd": "35dfdr1sghshsrrth11"
//             }
//         ])
//         expect(result).toHaveLength(1)
//     })
// })