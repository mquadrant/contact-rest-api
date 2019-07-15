import request from 'supertest';
import app from '../src/app';

describe('GET /api', () => {
    test('responds with json', () => {
        return request(app)
            .get('/api')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body).toStrictEqual({ message: 'All is well' });
            });
    });
    test('responds with json with all contacts', () => {
        return request(app)
            .get('/api/contacts')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.data).toContainEqual({
                    id: expect.any(String),
                    first_name: expect.any(String),
                    last_name: expect.any(String),
                    phone: expect.any(String),
                    email: expect.any(String),
                    str_address: expect.any(String),
                    gender: expect.any(String),
                    company_name: expect.any(String),
                    isBlocked: expect.any(Boolean),
                    created: expect.any(String),
                });
            });
    });
});
