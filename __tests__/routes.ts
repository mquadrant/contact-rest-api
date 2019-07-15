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
});
describe('GET /api/contacts', () => {
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
    test('responds with all contacts having isBlock field to be false', () => {
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
                    isBlocked: false,
                    created: expect.any(String),
                });
            });
    });
});

describe('GET /api/contacts/blocked', () => {
    test('responds with all the contacts that are blocked', () => {
        return request(app)
            .get('/api/contacts/blocked')
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
    test('that the isBlocked field is always true', () => {
        return request(app)
            .get('/api/contacts/blocked')
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
                    isBlocked: true,
                    created: expect.any(String),
                });
            });
    });
});
describe('GET /api/contact/:contactId', () => {
    test('responds with the right contact', () => {
        return request(app)
            .get('/api/contact/45745c60-7111-11e8-9c9c-2d42b21b1a3e')
            .set('Accept', 'application/json')
            .expect(200)
            .then(response => {
                expect(response.body.data).toEqual({
                    id: '45745c60-7111-11e8-9c9c-2d42b21b1a3e',
                    first_name: 'Elaine',
                    last_name: 'Baine',
                    phone: '188-617-4792',
                    email: 'ebaine0@skype.com',
                    str_address: '09711 Badeau Place',
                    gender: 'Female',
                    company_name: 'Skibox',
                    isBlocked: false,
                    created: '2019-04-18T08:20:48+01:00',
                });
            });
    });
    test('that it return Not Found message when id is not found', () => {
        return request(app)
            .get('/api/contact/662827-8a')
            .set('Accept', 'application/json')
            .expect(404)
            .then(response => {
                expect(response.body).toStrictEqual({
                    error: 'Contact not found',
                });
            });
    });
});
