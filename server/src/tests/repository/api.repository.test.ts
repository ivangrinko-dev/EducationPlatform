import { createUserDb, getUserByEmailDb } from '../../repository/api.repository'

const client = { query: jest.fn() }

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
})

describe('createUserDb:', () => {
    test('test1', async () => {

        client.query.mockResolvedValue({
            rows: [
                {
                    id: '3',
                    name: "ivan",
                    surname: "ivan1",
                    email: "ivan@mail.ru",
                    pwd: "35dfdr1sghshsrrth"
                }
            ]
        })
        const result = await createUserDb("ivan", "ivan1", "ivan@mail.ru", "35dfdr1sghshsrrth")
        expect(client.query).toHaveBeenCalled()
        expect(result[0].name).toBe("ivan")
        expect(result[0].surname).toBe("ivan1")
        expect(result[0].email).toBe("ivan@mail.ru")
        expect(result[0].pwd).toBe("35dfdr1sghshsrrth")
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            {
                id: '3',
                name: "ivan",
                surname: "ivan1",
                email: "ivan@mail.ru",
                pwd: "35dfdr1sghshsrrth"
            }
        ])
    })

    test('test2', async () => {
        try {
            await createUserDb("ivan", "ivan1", "ivan@mail.ru", "35dfdr1sghshsrrth")

        } catch (error: any) {
            expect(client.query).toHaveBeenCalled()
            expect(error.message).toEqual([])
        }
    })
})


describe('getUserByEmailDb:', () => {
    test('test1', async () => {

        client.query.mockResolvedValue({
            rows: [
                {
                    id: '3',
                    name: "ivan",
                    surname: "ivan1",
                    email: "ivan@mail.ru",
                    pwd: "35dfdr1sghshsrrth"
                }
            ]
        })
        const result = await getUserByEmailDb("ivan@mail.ru")
        expect(client.query).toHaveBeenCalled()
        expect(result[0].name).toBe("ivan")
        expect(result[0].surname).toBe("ivan1")
        expect(result[0].email).toBe("ivan@mail.ru")
        expect(result[0].pwd).toBe("35dfdr1sghshsrrth")
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            {
                id: '3',
                name: "ivan",
                surname: "ivan1",
                email: "ivan@mail.ru",
                pwd: "35dfdr1sghshsrrth"
            }
        ])
    })
})