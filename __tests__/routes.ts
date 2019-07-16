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

describe('POST /api/contact', () => {
    const contact = {
        first_name: 'Elaine',
        last_name: 'Baine',
        phone: '188-617-4792',
        email: 'ebaine0@skype.com',
        str_address: '09711 Badeau Place',
        gender: 'Female',
        company_name: 'Skibox',
    };
    test('that it create the contact', () => {
        return request(app)
            .post('/api/contact')
            .send(contact)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                expect(res.body.data).toEqual({
                    ...contact,
                    id: expect.any(String),
                    isBlocked: false,
                    created: expect.any(String),
                });
            });
    });
});

describe('PUT api/contact/:contactId/unblock', () => {
    test('that a contact is unblock', () => {
        return request(app)
            .put('/api/contact/45745c60-7b1a-11e8-9c9c-2d43331b1a3e/unblock')
            .expect(200)
            .then(res => {
                expect(res.text).toStrictEqual(
                    'Contact unblocked successfully!'
                );
            });
    });
    test('that it return an error message when a wrong id is passed', () => {
        return request(app)
            .put('/api/contact/45745c60-7b1a-11/unblock')
            .expect(404)
            .then(res => {
                expect(res.body).toStrictEqual({
                    error: 'An error occured, try again!',
                });
            });
    });
});

describe('PUT api/contact/:contactId/block', () => {
    test('that a contact is block', () => {
        return request(app)
            .put('/api/contact/45745c60-7b1a-11e8-9c9c-2d42116eaa3e/block')
            .expect(200)
            .then(res => {
                expect(res.text).toStrictEqual('Contact blocked successfully!');
            });
    });
    test('that it returns error when wrong id is passed', () => {
        return request(app)
            .put('/api/contact/45745c6-wrong-6eaa3e/block')
            .expect(404)
            .then(res => {
                expect(res.body).toStrictEqual({
                    error: 'An error occured, try again!',
                });
            });
    });
});

describe('PUT api/contact/:contactId', () => {
    const contact = {
        first_name: 'Johnson',
        last_name: 'Jefferson',
        phone: '000-1111-222',
        email: 'cooless0@skype.com',
        str_address: '020 skimatama street',
        gender: 'Male',
        company_name: 'JJ company',
    };
    test('that the contact is updated', () => {
        return request(app)
            .put('/api/contact/45745c60-7b1a-11e8-9c9c-2d43331b1a3e')
            .send(contact)
            .expect(201)
            .then(res => {
                expect(res.body.data).toEqual({
                    ...contact,
                    id: '45745c60-7b1a-11e8-9c9c-2d43331b1a3e',
                    isBlocked: false,
                    created: expect.any(String),
                });
            });
    });
    test('that it returns error when id is wrong', () => {
        return request(app)
            .put('/api/contact/4574-2d43331b1a3e')
            .send(contact)
            .expect(404)
            .then(res => {
                expect(res.body).toEqual({
                    error: 'An error occured, try again!',
                });
            });
    });
});
