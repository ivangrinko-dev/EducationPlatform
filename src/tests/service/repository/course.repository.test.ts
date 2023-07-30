import { getAllCourseDb, createCourseDb, updateCourseByIdDb, deleteCourseByIdDb, getCourseByIdDb } from '../../../repository/course.repository'

const client = { query: jest.fn() }

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
})

describe('getAllCourseDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'PHP' }] })
        const result = await getAllCourseDb()
        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'PHP' }])
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
    })
})


describe('getCourseByIdDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'PHP' }] })
        const result = await getCourseByIdDb('1')
        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'PHP' }])
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
    })
})

describe('createCourseDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'PHP' }] })
        const result = await createCourseDb('PHP')
        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'PHP' }])
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
    })
})

describe('updateCourseByIdDb function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'PHP' }] })
        const result = await updateCourseByIdDb('1', 'PHP')
        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'PHP' }])
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
    })
})

describe('deleteCourseById function', () => {
    test('test1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'PHP' }] })
        const result = await deleteCourseByIdDb('1')
        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'PHP' }])
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
    })
})




