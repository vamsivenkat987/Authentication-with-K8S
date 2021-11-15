import request from 'supertest';
import { app } from '../../app';


it('Failed for when a eamil is does not exist is supplied', async () => {
    await request(app).post("/api/users/signin").send({
        email: 'vamsi@gmail.com',
        password: '123456789'
    }).expect(400);
});

it('Fails when incorrect password was passed', async () => {
    await request(app).post("/api/users/signup").send({
        email: "vamsi@gmail.com",
        password: "123456789"
    }).expect(201);

    await request(app).post('/api/users/signin').send({
        email: "vamsi@gmail.com",
        password: "12345"
    }).expect(400);
});

it('responds with a cookie when given valid credentials', async () => {
    await request(app).post("/api/users/signup").send({
        email: "vamsi@gmail.com",
        password: "123456789"
    }).expect(201);

    const response = await request(app).post('/api/users/signin').send({
        email: "vamsi@gmail.com",
        password: "123456789"
    }).expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();

})