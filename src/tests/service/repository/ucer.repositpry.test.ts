import { createUserDb, getAllUserDb, getUserByIdDb, updateUserByIdDb, deleteUserByIdDb } from '../../../repository/user.repository'

const client = { query: jest.fn() }

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
})

describe('getAllUserDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
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
            ]
        })

        const result = await getAllUserDb()
        expect(client.query).toHaveBeenCalled()
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

describe('getUserByIdDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    "id": '2',
                    "name": "sasha",
                    "surname": "surname",
                    "email": "augdfdfbst3@mail.ru",
                    "pwd": "35dfdr"
                },
            ]
        })

        const result = await getUserByIdDb(`2`)
        expect(client.query).toHaveBeenCalled()
        expect(result[0].id).toBe('2')
        expect(result[0].name).toBe('sasha')
        expect(result[0].surname).toBe('surname')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
        ])
        expect(result).toHaveLength(1)
    })
})

describe('createUserDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    "id": '2',
                    "name": "sasha",
                    "surname": "surname",
                    "email": "augdfdfbst3@mail.ru",
                    "pwd": "35dfdr"
                },
            ]
        })

        const result = await createUserDb("sasha", "surname", "augdfdfbst3@mail.ru", "35dfdr")
        expect(client.query).toHaveBeenCalled()
        expect(result[0].id).toBe('2')
        expect(result[0].name).toBe('sasha')
        expect(result[0].surname).toBe('surname')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
        ])
        expect(result).toHaveLength(1)
    })
})

describe('updateUserByIdDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    "id": '2',
                    "name": "sasha",
                    "surname": "surname",
                    "email": "augdfdfbst3@mail.ru",
                    "pwd": "35dfdr"
                },
            ]
        })

        const result = await updateUserByIdDb("2", "sasha", "surname", "augdfdfbst3@mail.ru", "35dfdr")
        expect(client.query).toHaveBeenCalled()
        expect(result[0].id).toBe('2')
        expect(result[0].name).toBe('sasha')
        expect(result[0].surname).toBe('surname')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
        ])
        expect(result).toHaveLength(1)
    })
})

describe('deleteUserByIdDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({
            rows: [
                {
                    "id": '2',
                    "name": "sasha",
                    "surname": "surname",
                    "email": "augdfdfbst3@mail.ru",
                    "pwd": "35dfdr"
                },
            ]
        })

        const result = await deleteUserByIdDb(`2`)
        expect(client.query).toHaveBeenCalled()
        expect(result[0].id).toBe('2')
        expect(result[0].name).toBe('sasha')
        expect(result[0].surname).toBe('surname')
        expect(result[0].email).toBe('augdfdfbst3@mail.ru')
        expect(result[0].pwd).toBe('35dfdr')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            {
                "id": '2',
                "name": "sasha",
                "surname": "surname",
                "email": "augdfdfbst3@mail.ru",
                "pwd": "35dfdr"
            },
        ])
        expect(result).toHaveLength(1)
    })
})
