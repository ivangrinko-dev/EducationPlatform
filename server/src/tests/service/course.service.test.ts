import { getAllCourse, getCourseById, createCourse, updateCourseById, deleteCourseById } from '../../service/course.service'
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
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'getAllCourseDb')
        repoFunction.mockResolvedValue([])
        try {
            await getAllCourse()
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled()
            expect(error.message).toBe('данные не сохранены')
        }
    })
})

describe('getCourseById:', () => {
    test('test1', async () => {
        const repoFunction = jest.spyOn(repository, 'getCourseByIdDb')
        repoFunction.mockResolvedValue([
            { id: '1', course: 'PHP' }
        ])
        const result = await getCourseById('1')
        expect(repoFunction).toHaveBeenCalled()
        expect(result[0].id).toBe('1')
        expect(result[0].course).toBe('PHP')
        expect(result.length).toBe(1)
        expect(result).toEqual([
            { id: '1', course: 'PHP' }
        ])
        expect(result).toHaveLength(1)
    })
    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'getCourseByIdDb')
        repoFunction.mockResolvedValue([])
        try {
            await getCourseById(`123`)
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled()
            expect(error.message).toBe('такого id нет')
        }
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

    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'createCourseDb')
        repoFunction.mockResolvedValue([])
        try {
            await createCourse('PHPghsfjfj')
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled()
            expect(error.message).toBe('данные не сохранены')

        }
    })
})
describe('updateCourseById:', () => {
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

    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'updateCourseByIdDb')
        repoFunction.mockResolvedValue([])
        try {
            await updateCourseById('13423', 'PHP23gsd')
        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled()
            expect(error.message).toBe('такого id нет')
        }
    })

})

describe('deleteCourseById:', () => {
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

    test('test2', async () => {
        const repoFunction = jest.spyOn(repository, 'deleteCourseByIdDb')
        repoFunction.mockResolvedValue([

        ])
        try {
            await deleteCourseById('1fhmghh,gj,')

        } catch (error: any) {
            expect(repoFunction).toHaveBeenCalled()
            expect(error.message).toBe('такого id нет')
        }
    })
})
