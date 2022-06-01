'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('Server Test', () => {
    test('Test 404 on a bad route', async () => {
        const response = await request.get('/people?name=hadeel');
        expect(response.status).toEqual(404);
    });
    test('Test 404 on a bad method', async () => {
        const response = await request.post('/person?name=hadeel');
        expect(response.status).toEqual(404);
    });
    it('Test 500 if no name in query', async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    });
    it('Test 200 in /person', async () => {
        const response = await request.get('/person?name=hadeel')
        expect(response.status).toEqual(200)
    })
    it('Test object in /person', async () => {
        const response = await request.get('/person?name=hadeel');
        const nameTest=response.body.name;
        expect(typeof response.body).toEqual('object')
        expect(nameTest).toEqual('hadeel')    
    })
})
