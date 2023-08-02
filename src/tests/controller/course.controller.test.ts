import request from 'supertest'
import app from '../../app'
let id

test('post:', async () => {
    const res = await request(app).post('/course').send({ course: 'integrTest' })
    id = res.body[0].id
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})


test('get:', async () => {
    const res = await request(app).get('/course')

    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
})

test('getById:', async () => {
    const res = await request(app).get(`/course/${id}`)

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})

test('updateById:', async () => {
    const res = await request(app).put(`/course/${id}`).send({ course: 'integrTest2' })
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})

test('deleteById:', async () => {
    const res = await request(app).delete(`/course/${id}`)
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})