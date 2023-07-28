import { createUser, getAllUser, getUserById, updateUserById, deleteUserById } from '../../service/user.service'
import * as  repository from '../../repository/user.repository'

describe('getAllUser:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'getAllUserDb')
        repoFunction.mockResolvedValue([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        const result = await getAllUser()
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('2')
        expect(result[1].id).toBe('3')
        expect(result[0].name).toBe('sasha')
        expect(result[1].name).toBe('sasha1')
        expect(result[0].surname).toBe('surname')
        expect(result[1].surname).toBe('surname1')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[1].email).toBe('ssaugdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result[1].pwd).toBe('35dfdr1')
        expect(result.length).toBe(2)
        expect(result).toEqual([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        expect(result).toHaveLength(2)
    })
})

describe('getUserById:', () => {
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'getUserByIdDb')
        repoFunction.mockResolvedValue([
            {
                "id": '1',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            }
        ])
        const result = await getUserById('1')
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('1')
        expect(result[0].name).toBe('sasha')
        expect(result[0].surname).toBe('surname')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            {
                "id": '1',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },

        ])
        expect(result).toHaveLength(1)
    })
})

describe('createUser:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'createUserDb')
        repoFunction.mockResolvedValue([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        const result = await createUser("sasha1", "surname1", "ssaugdfdfbst3@mail.ru", "35dfdr1")

        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('3')
        expect(result[0].name).toBe('sasha1')
        expect(result[0].surname).toBe('surname1')
        expect(result[0].email).toBe('ssaugdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr1')
        expect(result).toEqual([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        expect(result).toHaveLength(1)
    })
})

describe ('updateUserById:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'updateUserByIdDb')
        repoFunction.mockResolvedValue([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        const result = await updateUserById('3', "sasha1", "surname1", "ssaugdfdfbst3@mail.ru", "35dfdr1")
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('3')
        expect(result[0].name).toBe('sasha1')
        expect(result[0].surname).toBe('surname1')
        expect(result[0].email).toBe('ssaugdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr1')
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
    })
})

describe ('deleteUserById:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteUserByIdDb')
        repoFunction.mockResolvedValue([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
        const result = await deleteUserById('3')
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('3')
        expect(result[0].name).toBe('sasha1')
        expect(result[0].surname).toBe('surname1')
        expect(result[0].email).toBe('ssaugdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr1')
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            {
                "id": '3',
                "name": "sasha1",
                "surname": "surname1",
                "email": "ssaugdfdfbst3@mail.ru",
                "pwd": "35dfdr1"
            }
        ])
    })
})































