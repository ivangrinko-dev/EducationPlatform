import request from 'supertest'
import app from '../../app'

let id

test('post:', async () => {
    const res = await request(app).post('/user').send({ name: 'kjdbvj', surname: 'sa;kln', email: 'ljsn@mail.ru', pwd: 's;gsdnsg;ngn;dgn' })
    id = res.body[0].id
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})

test('get:', async () => {
    const res = await request(app).get('/user')

    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
})

test('getById:', async () => {
    const res = await request(app).get(`/user/${id}`)

    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})

test('updateById', async() => {
    const res = await request(app).put(`/user/${id}`).send({ name: 'kjddtdhthbvj', surname: 'sa;ksthrtln', email: 'ljerhererhsn@mail.ru', pwd: 's;gsearerergerhnsg;ngn;dgn' })
expect(res.status).toBe(200)
expect(res.body.length).toBeGreaterThan(0)
})

test('deleteById:', async () => {
    const res = await request(app).delete(`/user/${id}`)
    expect(res.status).toBe(200)
    expect(res.body.length).toBe(1)
})