import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
    const authResponse = await request(app).post("/api/users/signup").send({
        email: "vamsi@gmail.com",
        password: "123456789"
    }).expect(201);

    const cookie = authResponse.get('Set-Cookie');

    const response = await request(app).get('/api/users/currentuser').set('Cookie',cookie).send().expect(200);
    console.log(response.body);
    expect(response.body.currentUser.email).toEqual('vamsi@gmail.com');
    

})

it('responds with null if not authenticated', async () => {
    const response = await request(app).get('/api/users/currentuser').send().expect(200);
    expect(response.body.currentUser).toEqual(null);
})