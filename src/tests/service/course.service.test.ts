import { getAllCourse, createCourse, updateCourseById, deleteCourseById } from '../../service/course.service'
import * as repository from '../../repository/course.repository'
describe('getAllCourse:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDb')
        repoFunction.mockResolvedValue([
            { id: '1', course: 'PHP' }, { id: '2', course: 'java' }
        ])
        const result = await getAllCourse()
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('1')
        expect(result[1].id).toBe('2')
        expect(result[0].course).toBe('PHP')
        expect(result[1].course).toBe('java')
        expect(result.length).toBe(2)
        expect(result).toEqual([
            { id: '1', course: 'PHP' }, { id: '2', course: 'java' }
        ])
        expect(result).toHaveLength(2)
    })
})

describe('createCourse:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDb')
        repoFunction.mockResolvedValue([
            { id: '1', course: 'PHP' }
        ])
        const result = await createCourse('PHP')

        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].course).toBe('PHP')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            { id: '1', course: 'PHP' }
        ])
        expect(result).toHaveLength(1)
    })
})

describe ('updateCourseById:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'updateCourseByIdDb')
        repoFunction.mockResolvedValue([
            { id: '1', course: 'PHP' }
        ])
        const result = await updateCourseById('1', 'PHP')
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
        expect(result.length).toBe(1)
        expect(result).toHaveLength(1)
        expect(result).toEqual([
            { id: '1', course: 'PHP' }
        ])
    })
})

describe ('deleteCourseById:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseByIdDb')
        repoFunction.mockResolvedValue([
            { id: '1', course: 'PHP' }
        ])
        const result = await deleteCourseById('1')
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('1')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            { id: '1', course: 'PHP' }
        ])
        expect(result[0].course).toBe('PHP')
        expect(result).toHaveLength(1)
    })
})