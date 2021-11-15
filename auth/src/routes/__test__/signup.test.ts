import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
    return request(app).post("/api/users/signup").send({
        email: "vamsi@gmail.com",
        password: "123456789"
    }).expect(201);
});

it('returns a valid 400 with invalid email', async () => {
    return request(app).post("/api/users/signup").send({
        email: "vam.com",
        password: "1234567"
    }).expect(400);
});
it('returns a valid 400 with invalid password', async () => {
    return request(app).post("/api/users/signup").send({
        email: "vam@gmail.com",
        password: "12"
    }).expect(400);
});

it('returns a valid 400 with empty email and password', async () => {
    return request(app).post("/api/users/signup").send({}).expect(400);
});

it('donot allow same email two times', async () => {
    await request(app).post("/api/users/signup").send({email: "vamsi@gmail.com",
    password: "123456789"}).expect(201);

    await request(app).post("/api/users/signup").send({email: "vamsi@gmail.com",
    password: "123456789"}).expect(400);

});

it('sets a cookie after sucessful signup', async () => {
    const response = await request(app).post("/api/users/signup").send({email: "vamsi@gmail.com",
    password: "123456789"}).expect(201);

    expect(response.get('Set-Cookie')).toBeDefined();
});