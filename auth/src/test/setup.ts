import { MongoMemoryServer } from "mongodb-memory-server";
import request from 'supertest';
import mongoose from "mongoose";
import { app } from '../app';


// let mongodb: any;
// beforeAll(async () => {
//     mongodb = await MongoMemoryServer.create();
//     const mongoUri = mongodb.getUri();
    
//     await mongoose.connect(mongoUri);
// });
// beforeEach(async () => {
//     const collections = await mongoose.connection.db.collections();
//     for(let collection of collections){
//         collection.deleteMany({});
//     }
// });

// afterAll(async () => {
//     await mongodb.stop();
//     await mongoose.disconnect();

// });

declare global {
    var signin: () => Promise<string[]>;
}

let mongodb: any;
beforeAll(async () => {

    process.env.JWT_KEY = "vamsi";
    mongodb = await MongoMemoryServer.create();
    const mongoUri = mongodb.getUri();
    
    await mongoose.connect(mongoUri, {dbName: "Vamsi"});
});
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for(let collection of collections){
        collection.deleteMany({});
    }
});

afterAll(async () => {
    mongoose.disconnect();
});

global.signin = async () => {
    const email = "vamsi@gmail.com";
    const password = "123456789";
    const response = await request(app).post('/api/users/signup').send({
        email,
        password
    }).expect(201);

    const cookie = response.get('Set-Cookie');
    return cookie;
}
